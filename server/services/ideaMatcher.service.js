/**
 * Service for matching user profiles with appropriate engagement ideas
 * This algorithm filters the ideas database based on user inputs and preferences
 */

const EngagementIdea = require('../models/EngagementIdea');

/**
 * Match ideas to a user's profile and preferences
 * @param {Object} userProfile - User's preferences and constraints
 * @param {String} userProfile.organizationType - Type of organization
 * @param {String} userProfile.budgetRange - Available budget range
 * @param {Object} userProfile.targetAudience - Target audience details
 * @param {Array} userProfile.targetAudience.ageGroups - Age groups to target
 * @param {Array} userProfile.targetAudience.fanTypes - Types of fans to target
 * @param {Array} userProfile.goals - Engagement goals
 * @returns {Promise<Array>} - Array of matching engagement ideas
 */
const matchIdeasToUserProfile = async (userProfile) => {
  try {
    // Start with building the base query object
    const query = {};
    
    // Match organization type if provided
    if (userProfile.organizationType) {
      query.organizationTypes = userProfile.organizationType;
    }
    
    // Match budget range if provided
    if (userProfile.budgetRange) {
      query.budgetRange = userProfile.budgetRange;
    }
    
    // For target audience, we'll use a more flexible approach
    // to ensure we don't over-filter and return too few results
    const audienceConditions = [];
    
    if (userProfile.targetAudience && userProfile.targetAudience.ageGroups && userProfile.targetAudience.ageGroups.length > 0) {
      audienceConditions.push({ 
        'targetAudience.ageGroups': { $in: userProfile.targetAudience.ageGroups } 
      });
    }
    
    if (userProfile.targetAudience && userProfile.targetAudience.fanTypes && userProfile.targetAudience.fanTypes.length > 0) {
      audienceConditions.push({ 
        'targetAudience.fanTypes': { $in: userProfile.targetAudience.fanTypes } 
      });
    }
    
    // Combine the base query with audience conditions if they exist
    const finalQuery = audienceConditions.length > 0 
      ? { $and: [query, { $or: audienceConditions }] }
      : query;
    
    // Execute the query
    const ideas = await EngagementIdea.find(finalQuery).limit(10);
    
    // If we don't have enough results, expand the search with looser criteria
    if (ideas.length < 5 && userProfile.organizationType) {
      const additionalIdeas = await EngagementIdea.find({
        organizationTypes: userProfile.organizationType
      }).limit(10 - ideas.length);
      
      // Combine and remove duplicates
      const combinedIdeas = [...ideas];
      additionalIdeas.forEach(idea => {
        if (!combinedIdeas.some(i => i._id.toString() === idea._id.toString())) {
          combinedIdeas.push(idea);
        }
      });
      
      return combinedIdeas;
    }
    
    // Apply sorting and scoring based on goals if provided
    if (userProfile.goals && userProfile.goals.length > 0) {
      return sortIdeasByGoalRelevance(ideas, userProfile.goals);
    }
    
    return ideas;
  } catch (error) {
    console.error('Error matching ideas:', error);
    throw error;
  }
};

/**
 * Sort ideas by relevance to user goals
 * @param {Array} ideas - List of engagement ideas
 * @param {Array} goals - User's engagement goals
 * @returns {Array} - Sorted ideas
 */
const sortIdeasByGoalRelevance = (ideas, goals) => {
  // Define goal to success metric mapping
  const goalToMetricMap = {
    'Increase Brand Loyalty': ['Engagement Rate', 'App Downloads'],
    'Drive Sales/Conversions': ['Sales Conversion'],
    'Build Community': ['User-Generated Content', 'Attendance', 'Social Sharing'],
    'Increase Social Media Presence': ['Social Sharing', 'Engagement Rate'],
    'Generate User Content': ['User-Generated Content'],
    'Collect Customer Data': ['Email Signups', 'App Downloads'],
    'Improve Game/Event Attendance': ['Attendance']
  };
  
  // Score each idea based on how well it matches the goals
  const scoredIdeas = ideas.map(idea => {
    let score = 0;
    
    goals.forEach(goal => {
      const relevantMetrics = goalToMetricMap[goal] || [];
      idea.successMetrics.forEach(metric => {
        if (relevantMetrics.includes(metric)) {
          score += 1;
        }
      });
    });
    
    return { idea, score };
  });
  
  // Sort by score (descending)
  scoredIdeas.sort((a, b) => b.score - a.score);
  
  // Return just the ideas in the sorted order
  return scoredIdeas.map(item => item.idea);
};

module.exports = {
  matchIdeasToUserProfile
};
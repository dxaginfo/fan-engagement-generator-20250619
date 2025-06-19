/**
 * Controller for handling engagement idea API endpoints
 */

const EngagementIdea = require('../models/EngagementIdea');
const { matchIdeasToUserProfile } = require('../services/ideaMatcher.service');

/**
 * Get all engagement ideas
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getAllIdeas = async (req, res) => {
  try {
    const ideas = await EngagementIdea.find();
    res.status(200).json(ideas);
  } catch (error) {
    console.error('Error fetching ideas:', error);
    res.status(500).json({ error: 'Error fetching ideas' });
  }
};

/**
 * Get a single idea by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getIdeaById = async (req, res) => {
  try {
    const idea = await EngagementIdea.findById(req.params.id);
    
    if (!idea) {
      return res.status(404).json({ error: 'Idea not found' });
    }
    
    res.status(200).json(idea);
  } catch (error) {
    console.error('Error fetching idea:', error);
    res.status(500).json({ error: 'Error fetching idea' });
  }
};

/**
 * Get ideas by category
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getIdeasByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const ideas = await EngagementIdea.find({ category });
    
    res.status(200).json(ideas);
  } catch (error) {
    console.error('Error fetching ideas by category:', error);
    res.status(500).json({ error: 'Error fetching ideas by category' });
  }
};

/**
 * Match ideas to a user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.matchIdeasToProfile = async (req, res) => {
  try {
    const userProfile = req.body;
    
    // Validate the user profile input
    if (!userProfile || Object.keys(userProfile).length === 0) {
      return res.status(400).json({ error: 'User profile data is required' });
    }
    
    // Use the matching service to find appropriate ideas
    const matchedIdeas = await matchIdeasToUserProfile(userProfile);
    
    res.status(200).json({ ideas: matchedIdeas });
  } catch (error) {
    console.error('Error matching ideas to profile:', error);
    res.status(500).json({ error: 'Error matching ideas to profile' });
  }
};

/**
 * Create a new engagement idea
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.createIdea = async (req, res) => {
  try {
    const newIdea = new EngagementIdea(req.body);
    const savedIdea = await newIdea.save();
    
    res.status(201).json(savedIdea);
  } catch (error) {
    console.error('Error creating idea:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Error creating idea' });
  }
};

/**
 * Update an existing engagement idea
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.updateIdea = async (req, res) => {
  try {
    const updatedIdea = await EngagementIdea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedIdea) {
      return res.status(404).json({ error: 'Idea not found' });
    }
    
    res.status(200).json(updatedIdea);
  } catch (error) {
    console.error('Error updating idea:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Error updating idea' });
  }
};

/**
 * Delete an engagement idea
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.deleteIdea = async (req, res) => {
  try {
    const deletedIdea = await EngagementIdea.findByIdAndDelete(req.params.id);
    
    if (!deletedIdea) {
      return res.status(404).json({ error: 'Idea not found' });
    }
    
    res.status(200).json({ message: 'Idea deleted successfully' });
  } catch (error) {
    console.error('Error deleting idea:', error);
    res.status(500).json({ error: 'Error deleting idea' });
  }
};

/**
 * Submit feedback for an idea
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.submitFeedback = async (req, res) => {
  try {
    // In a real implementation, this would store feedback in a separate collection
    // For now, we'll just acknowledge receipt of the feedback
    const { id } = req.params;
    const feedback = req.body;
    
    // Validate idea exists
    const idea = await EngagementIdea.findById(id);
    if (!idea) {
      return res.status(404).json({ error: 'Idea not found' });
    }
    
    // Here you would normally save the feedback to a database
    console.log(`Received feedback for idea ${id}:`, feedback);
    
    res.status(200).json({ 
      message: 'Feedback received successfully',
      ideaId: id
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Error submitting feedback' });
  }
};
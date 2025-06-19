/**
 * API service for communicating with the backend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * Fetch engagement ideas that match a user profile
 * @param {Object} userProfile - User preferences and constraints
 * @returns {Promise<Array>} - Array of matching engagement ideas
 */
export const fetchIdeasForProfile = async (userProfile) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/match`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userProfile),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.ideas || [];
  } catch (error) {
    console.error('Error fetching ideas:', error);
    throw error;
  }
};

/**
 * Fetch all available engagement ideas
 * @returns {Promise<Array>} - Array of all engagement ideas
 */
export const fetchAllIdeas = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching all ideas:', error);
    throw error;
  }
};

/**
 * Fetch an engagement idea by ID
 * @param {string} ideaId - ID of the idea to fetch
 * @returns {Promise<Object>} - The engagement idea
 */
export const fetchIdeaById = async (ideaId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/${ideaId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching idea ${ideaId}:`, error);
    throw error;
  }
};

/**
 * Fetch ideas by category
 * @param {string} category - Category to filter by
 * @returns {Promise<Array>} - Array of ideas in the category
 */
export const fetchIdeasByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/category/${category}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error(`Error fetching ideas in category ${category}:`, error);
    throw error;
  }
};

/**
 * Submit feedback for an idea
 * @param {string} ideaId - ID of the idea
 * @param {Object} feedback - Feedback data
 * @returns {Promise<Object>} - Result of the feedback submission
 */
export const submitIdeaFeedback = async (ideaId, feedback) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/${ideaId}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error submitting feedback for idea ${ideaId}:`, error);
    throw error;
  }
};
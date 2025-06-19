import React, { useState } from 'react';
import './styles/App.css';
import UserProfileForm from './components/UserProfileForm';
import ResultsList from './components/ResultsList';
import { fetchIdeasForProfile } from './services/api';

/**
 * Main application component
 */
function App() {
  // State for storing matched ideas
  const [ideas, setIdeas] = useState([]);
  
  // Loading state for API requests
  const [loading, setLoading] = useState(false);
  
  // Track if form has been submitted to show results
  const [formSubmitted, setFormSubmitted] = useState(false);

  /**
   * Handle form submission to fetch matching ideas
   * @param {Object} userProfile - User preferences from form
   */
  const handleFormSubmit = async (userProfile) => {
    setLoading(true);
    try {
      const matchedIdeas = await fetchIdeasForProfile(userProfile);
      setIdeas(matchedIdeas);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error fetching ideas:', error);
      // Could add error handling state here
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reset app to form view
   */
  const handleReset = () => {
    setFormSubmitted(false);
    setIdeas([]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <span className="icon">🎯</span>
          <h1>Fan Engagement Idea Generator</h1>
        </div>
        <p className="tagline">Discover creative ways to connect with your audience</p>
      </header>
      
      <main className="app-main">
        {!formSubmitted ? (
          <UserProfileForm onSubmit={handleFormSubmit} />
        ) : (
          <div className="results-container">
            <button 
              className="back-button" 
              onClick={handleReset}
            >
              ← Back to Form
            </button>
            <ResultsList ideas={ideas} loading={loading} />
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 Fan Engagement Idea Generator</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
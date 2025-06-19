import React, { useState } from 'react';
import '../styles/ResultsList.css';
import IdeaCard from './IdeaCard';

/**
 * Component for displaying list of engagement ideas with filtering
 * @param {Object} props - Component props
 * @param {Array} props.ideas - List of engagement ideas
 * @param {boolean} props.loading - Loading state
 */
const ResultsList = ({ ideas, loading }) => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State to track which idea card is expanded
  const [expandedIdea, setExpandedIdea] = useState(null);
  
  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Finding the perfect engagement ideas for you...</p>
      </div>
    );
  }
  
  // Show empty state
  if (ideas.length === 0) {
    return (
      <div className="no-results">
        <h3>No matching ideas found</h3>
        <p>Try adjusting your criteria to see more engagement opportunities.</p>
      </div>
    );
  }
  
  // Get unique categories from ideas for filtering
  const categories = ['All', ...new Set(ideas.map(idea => idea.category))];
  
  // Filter ideas by active category
  const filteredIdeas = activeCategory === 'All' 
    ? ideas 
    : ideas.filter(idea => idea.category === activeCategory);
  
  return (
    <div className="results-list">
      <div className="results-header">
        <h2>Engagement Ideas ({ideas.length})</h2>
        <p>Here are some engagement ideas that match your requirements:</p>
      </div>
      
      <div className="category-filter">
        <h3>Filter by Category:</h3>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="ideas-grid">
        {filteredIdeas.map(idea => (
          <IdeaCard 
            key={idea._id}
            idea={idea}
            isExpanded={expandedIdea === idea._id}
            onToggleExpand={() => {
              setExpandedIdea(expandedIdea === idea._id ? null : idea._id);
            }}
          />
        ))}
      </div>
      
      {filteredIdeas.length === 0 && (
        <div className="filtered-empty-state">
          <p>No ideas found in the "{activeCategory}" category. Try another category.</p>
        </div>
      )}
    </div>
  );
};

export default ResultsList;
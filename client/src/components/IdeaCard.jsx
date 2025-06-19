import React from 'react';
import '../styles/IdeaCard.css';

/**
 * Card component for displaying a single engagement idea
 * @param {Object} props - Component props
 * @param {Object} props.idea - Engagement idea data
 * @param {boolean} props.isExpanded - Whether the card is expanded to show details
 * @param {Function} props.onToggleExpand - Function to call when expanding/collapsing
 */
const IdeaCard = ({ idea, isExpanded, onToggleExpand }) => {
  // Get difficulty level badge color
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'green';
      case 'Moderate': return 'orange';
      case 'Complex': return 'red';
      default: return 'gray';
    }
  };
  
  // Get budget badge color
  const getBudgetColor = (budget) => {
    if (budget.includes('Low')) return 'green';
    if (budget.includes('Medium')) return 'orange';
    if (budget.includes('High')) return 'red';
    return 'gray';
  };

  return (
    <div className={`idea-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="idea-header">
        <h3>{idea.title}</h3>
        <span className="category-tag">{idea.category}</span>
      </div>
      
      <div className="idea-meta">
        <span className={`difficulty-badge ${getDifficultyColor(idea.implementationDifficulty)}`}>
          {idea.implementationDifficulty}
        </span>
        <span className={`budget-badge ${getBudgetColor(idea.budgetRange)}`}>
          {idea.budgetRange}
        </span>
      </div>
      
      <p className="idea-description">
        {isExpanded ? idea.description : `${idea.description.substring(0, 120)}...`}
      </p>
      
      {isExpanded && (
        <div className="idea-details">
          <div className="detail-group">
            <h4>Suitable For:</h4>
            <p>{idea.organizationTypes.join(', ')}</p>
          </div>
          
          <div className="detail-group">
            <h4>Target Audience:</h4>
            <div className="audience-details">
              {idea.targetAudience.ageGroups && idea.targetAudience.ageGroups.length > 0 && (
                <div>
                  <h5>Age Groups:</h5>
                  <p>{idea.targetAudience.ageGroups.join(', ')}</p>
                </div>
              )}
              
              {idea.targetAudience.fanTypes && idea.targetAudience.fanTypes.length > 0 && (
                <div>
                  <h5>Fan Types:</h5>
                  <p>{idea.targetAudience.fanTypes.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="detail-group">
            <h4>Required Resources:</h4>
            <ul className="resource-list">
              {idea.requiredResources.map(resource => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </div>
          
          <div className="detail-group">
            <h4>Success Metrics:</h4>
            <ul className="metrics-list">
              {idea.successMetrics.map(metric => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
          
          {idea.exampleCaseStudy && (
            <div className="detail-group case-study">
              <h4>Example Case Study:</h4>
              <p>{idea.exampleCaseStudy}</p>
            </div>
          )}
        </div>
      )}
      
      <button className="toggle-button" onClick={onToggleExpand}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default IdeaCard;
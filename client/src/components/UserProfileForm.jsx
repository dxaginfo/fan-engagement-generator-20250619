import React, { useState } from 'react';
import '../styles/UserProfileForm.css';

/**
 * Form component for collecting user preferences to generate engagement ideas
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function to call when form is submitted
 */
const UserProfileForm = ({ onSubmit }) => {
  // State to track form inputs
  const [userProfile, setUserProfile] = useState({
    organizationType: '',
    budgetRange: '',
    targetAudience: {
      ageGroups: [],
      fanTypes: []
    },
    goals: []
  });

  // Handle changes to standard form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle changes to audience checkboxes
  const handleAudienceChange = (e) => {
    const { name, value, checked } = e.target;
    const [section, item] = name.split('.');
    
    setUserProfile(prev => {
      const updatedAudience = { ...prev.targetAudience };
      
      if (checked) {
        updatedAudience[item] = [...updatedAudience[item], value];
      } else {
        updatedAudience[item] = updatedAudience[item].filter(val => val !== value);
      }
      
      return {
        ...prev,
        targetAudience: updatedAudience
      };
    });
  };

  // Handle changes to goals checkboxes
  const handleGoalsChange = (e) => {
    const { value, checked } = e.target;
    
    setUserProfile(prev => {
      if (checked) {
        return { ...prev, goals: [...prev.goals, value] };
      } else {
        return { ...prev, goals: prev.goals.filter(goal => goal !== value) };
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userProfile);
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h2>About Your Organization</h2>
        
        <div className="form-group">
          <label htmlFor="organizationType">Organization Type</label>
          <select 
            id="organizationType"
            name="organizationType"
            value={userProfile.organizationType}
            onChange={handleChange}
            required
          >
            <option value="">Select Organization Type</option>
            <option value="Sports Team">Sports Team</option>
            <option value="Brand">Brand</option>
            <option value="Event Organizer">Event Organizer</option>
            <option value="Media Company">Media Company</option>
            <option value="Entertainment Venue">Entertainment Venue</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="budgetRange">Budget Range</label>
          <select 
            id="budgetRange"
            name="budgetRange"
            value={userProfile.budgetRange}
            onChange={handleChange}
            required
          >
            <option value="">Select Budget Range</option>
            <option value="Low (Under $5,000)">Low (Under $5,000)</option>
            <option value="Medium ($5,000-$25,000)">Medium ($5,000-$25,000)</option>
            <option value="High ($25,000+)">High ($25,000+)</option>
          </select>
        </div>
      </div>
      
      <div className="form-section">
        <h2>Target Audience</h2>
        
        <div className="form-group">
          <label>Age Groups</label>
          <div className="checkbox-group">
            {['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'].map(age => (
              <div className="checkbox-item" key={age}>
                <input
                  type="checkbox"
                  id={`age-${age}`}
                  name="audience.ageGroups"
                  value={age}
                  checked={userProfile.targetAudience.ageGroups.includes(age)}
                  onChange={handleAudienceChange}
                />
                <label htmlFor={`age-${age}`}>{age}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label>Fan Types</label>
          <div className="checkbox-group">
            {['Casual', 'Dedicated', 'Superfan', 'New', 'Lapsed'].map(type => (
              <div className="checkbox-item" key={type}>
                <input
                  type="checkbox"
                  id={`fanType-${type}`}
                  name="audience.fanTypes"
                  value={type}
                  checked={userProfile.targetAudience.fanTypes.includes(type)}
                  onChange={handleAudienceChange}
                />
                <label htmlFor={`fanType-${type}`}>{type}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h2>Engagement Goals</h2>
        <div className="checkbox-group">
          {[
            'Increase Brand Loyalty', 
            'Drive Sales/Conversions', 
            'Build Community', 
            'Increase Social Media Presence',
            'Generate User Content',
            'Collect Customer Data',
            'Improve Game/Event Attendance'
          ].map(goal => (
            <div className="checkbox-item" key={goal}>
              <input
                type="checkbox"
                id={`goal-${goal}`}
                name="goals"
                value={goal}
                checked={userProfile.goals.includes(goal)}
                onChange={handleGoalsChange}
              />
              <label htmlFor={`goal-${goal}`}>{goal}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-button">Generate Ideas</button>
      </div>
    </form>
  );
};

export default UserProfileForm;
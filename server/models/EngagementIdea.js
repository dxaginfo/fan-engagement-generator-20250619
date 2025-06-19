const mongoose = require('mongoose');

const EngagementIdeaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['AR/VR Experience', 'Contest', 'Community Event', 'Social Media Campaign', 
           'Fan Recognition', 'Interactive Content', 'Loyalty Program', 'Co-Creation'],
    required: true
  },
  organizationTypes: {
    type: [String],
    enum: ['Sports Team', 'Brand', 'Event Organizer', 'Media Company', 'Entertainment Venue'],
    required: true
  },
  targetAudience: {
    ageGroups: {
      type: [String],
      enum: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+']
    },
    fanTypes: {
      type: [String],
      enum: ['Casual', 'Dedicated', 'Superfan', 'New', 'Lapsed']
    }
  },
  budgetRange: {
    type: String,
    enum: ['Low (Under $5,000)', 'Medium ($5,000-$25,000)', 'High ($25,000+)'],
    required: true
  },
  implementationDifficulty: {
    type: String,
    enum: ['Easy', 'Moderate', 'Complex'],
    required: true
  },
  requiredResources: {
    type: [String],
    enum: ['Social Media', 'Website', 'Email List', 'Physical Space', 'Staff', 'Technology', 'Partners'],
    required: true
  },
  successMetrics: {
    type: [String],
    enum: ['Engagement Rate', 'Attendance', 'User-Generated Content', 'Sales Conversion', 'Social Sharing', 'Email Signups', 'App Downloads'],
    required: true
  },
  exampleCaseStudy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create index for more efficient querying
EngagementIdeaSchema.index({ category: 1 });
EngagementIdeaSchema.index({ organizationTypes: 1 });
EngagementIdeaSchema.index({ budgetRange: 1 });

module.exports = mongoose.model('EngagementIdea', EngagementIdeaSchema);
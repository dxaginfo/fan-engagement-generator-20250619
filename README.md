# Fan Engagement Idea Generator

A web application that helps sports teams and brands generate fan engagement ideas based on their specific needs and audience.

## Project Overview

The Fan Engagement Idea Generator is a brainstorming tool designed to help sports teams (or any brand) come up with new ways to engage fans beyond their core product. The application suggests personalized engagement strategies based on user inputs about their organization, target audience, and available resources.

## Features

### 1. User Input Form
- Organization type selection (sports team, brand, event organizer)
- Target audience specification (demographics, fan types)
- Budget range selection
- Engagement goals selection

### 2. Idea Generation Engine
- Pre-populated database of engagement strategies across different categories
- Smart filtering to match ideas with user inputs
- Category-based organization (AR/VR, contests, community events, etc.)

### 3. Results Display
- Categorized list of recommended engagement ideas
- Filtering by category
- Detailed view with implementation guidance
- Example case studies for inspiration

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Deployment**: Docker & Heroku

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB
- NPM or Yarn

### Installation

1. Clone the repository
```
git clone https://github.com/dxaginfo/fan-engagement-generator-20250619.git
cd fan-engagement-generator-20250619
```

2. Install dependencies
```
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

4. Seed the database
```
npm run seed
```

5. Start the development server
```
npm run dev
```

6. Open `http://localhost:3000` in your browser

## Project Structure

```
├── client/                  # React frontend
│   ├── public/              # Static files
│   ├── src/                 # React components and logic
│   │   ├── components/      # UI components
│   │   ├── services/        # API service calls
│   │   └── styles/          # CSS files
├── server/                  # Node.js backend
│   ├── controllers/         # Request handlers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   └── utils/               # Helper functions
├── scripts/                 # Utility scripts
├── .env                     # Environment variables
└── package.json             # Project dependencies
```

## Future Enhancements

- User accounts to save favorite ideas
- Idea ratings and feedback
- Community features to share success stories
- Advanced filtering and recommendation algorithms
- Export functionality (PDF, presentation slides)
- Analytics dashboard for engagement strategy tracking

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All sports teams and brands that inspired these engagement strategies
- Contributors and maintainers of the project
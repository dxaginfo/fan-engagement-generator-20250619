/**
 * Sample engagement idea data for seeding the database
 */

const sampleEngagementIdeas = [
  {
    title: "AR Fan Experience App",
    description: "Create an augmented reality app that allows fans to point their phones at players or the venue to see real-time stats, player bios, and interactive content. Include AR games that can be played during downtime at the venue.",
    category: "AR/VR Experience",
    organizationTypes: ["Sports Team", "Entertainment Venue"],
    targetAudience: {
      ageGroups: ["18-24", "25-34"],
      fanTypes: ["Dedicated", "Superfan"]
    },
    budgetRange: "High ($25,000+)",
    implementationDifficulty: "Complex",
    requiredResources: ["Technology", "Staff", "Partners"],
    successMetrics: ["App Downloads", "Engagement Rate", "User-Generated Content"],
    exampleCaseStudy: "The Dallas Mavericks implemented an AR app that allowed fans to take virtual photos with players, access exclusive video content by scanning parts of the arena, and participate in AR games during timeouts. The app resulted in a 45% increase in fan engagement during games and generated significant social media sharing."
  },
  {
    title: "Fan Content Creator Program",
    description: "Develop a program that identifies and empowers passionate fans to create content about your team/brand. Provide these selected fans with access, tools, and incentives to produce high-quality content that can be shared across your official channels.",
    category: "Co-Creation",
    organizationTypes: ["Sports Team", "Brand", "Media Company"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44"],
      fanTypes: ["Dedicated", "Superfan"]
    },
    budgetRange: "Medium ($5,000-$25,000)",
    implementationDifficulty: "Moderate",
    requiredResources: ["Social Media", "Staff", "Technology"],
    successMetrics: ["User-Generated Content", "Social Sharing", "Engagement Rate"],
    exampleCaseStudy: "The Portland Trail Blazers created a 'Rip City Creators' program that selected 10 passionate fans with content creation skills. They were given media passes, equipment, and exclusive access. Their content increased the team's social media engagement by 78% and reached new audience segments that traditional marketing wasn't capturing."
  },
  {
    title: "Community Service Day with Players",
    description: "Organize a day where fans can sign up to work alongside players/staff on community service projects. This creates meaningful connections between fans and the team while giving back to the community.",
    category: "Community Event",
    organizationTypes: ["Sports Team", "Brand"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44", "45-54", "55+"],
      fanTypes: ["Casual", "Dedicated", "Superfan"]
    },
    budgetRange: "Medium ($5,000-$25,000)",
    implementationDifficulty: "Moderate",
    requiredResources: ["Staff", "Partners", "Physical Space"],
    successMetrics: ["Attendance", "Social Sharing", "User-Generated Content"],
    exampleCaseStudy: "The Chicago Bulls organized a series of community service events where fans could sign up to work alongside players repainting community centers, planting urban gardens, and distributing food at local shelters. The events strengthened community bonds, generated positive PR, and created authentic content that reached over 2 million people on social media."
  },
  {
    title: "Fantasy League with Real Prizes",
    description: "Create a branded fantasy sports experience with unique twists tied to your team/brand and offer real-world prizes and experiences to winners. Incorporate weekly challenges and mini-competitions to keep engagement high throughout the season.",
    category: "Contest",
    organizationTypes: ["Sports Team", "Media Company"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44"],
      fanTypes: ["Dedicated", "Superfan"]
    },
    budgetRange: "Medium ($5,000-$25,000)",
    implementationDifficulty: "Moderate",
    requiredResources: ["Technology", "Website", "Social Media", "Partners"],
    successMetrics: ["Engagement Rate", "Email Signups", "App Downloads"],
    exampleCaseStudy: "The Manchester City FC created a custom fantasy football platform with unique scoring rules based on the team's playing style. Weekly winners received team merchandise, while the season champion won a VIP match experience including locker room access. The platform attracted 50,000 active users and increased website traffic by 35% during the season."
  },
  {
    title: "Interactive Stadium Scavenger Hunt",
    description: "Create a digital scavenger hunt that guides fans to different locations around the venue, scanning QR codes to unlock exclusive content, answer trivia questions, and earn points redeemable for prizes or experiences.",
    category: "Interactive Content",
    organizationTypes: ["Sports Team", "Entertainment Venue", "Event Organizer"],
    targetAudience: {
      ageGroups: ["Under 18", "18-24", "25-34", "35-44"],
      fanTypes: ["Casual", "Dedicated", "New"]
    },
    budgetRange: "Low (Under $5,000)",
    implementationDifficulty: "Easy",
    requiredResources: ["Technology", "Physical Space", "Social Media"],
    successMetrics: ["Engagement Rate", "App Downloads", "Attendance"],
    exampleCaseStudy: "The Brooklyn Nets implemented a stadium scavenger hunt that guided fans throughout the Barclays Center, encouraging them to visit new areas and concessions. Fans who completed challenges received exclusive team merchandise and entered a drawing for courtside seats. The program increased concession sales by 18% and improved fan satisfaction scores by 22%."
  },
  {
    title: "Tiered Fan Loyalty Program",
    description: "Develop a multi-level loyalty program that rewards fans for various forms of engagement (attendance, purchases, social media interaction, etc.). As fans accumulate points, they unlock increasingly exclusive benefits and experiences.",
    category: "Loyalty Program",
    organizationTypes: ["Sports Team", "Brand", "Entertainment Venue"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44", "45-54", "55+"],
      fanTypes: ["Dedicated", "Superfan"]
    },
    budgetRange: "High ($25,000+)",
    implementationDifficulty: "Complex",
    requiredResources: ["Technology", "Staff", "Email List", "Partners"],
    successMetrics: ["Sales Conversion", "Attendance", "Engagement Rate"],
    exampleCaseStudy: "The Seattle Sounders FC implemented a four-tier loyalty program where fans earned points for ticket purchases, merchandise buys, app check-ins, and social media engagement. Higher tiers offered benefits like express entry, merchandise discounts, and exclusive events with players. The program resulted in a 28% increase in per-fan revenue and a 15% boost in match attendance."
  },
  {
    title: "Fan Stories Spotlight Campaign",
    description: "Launch a campaign collecting stories from fans about their connection to your team/brand. Select the most compelling stories to highlight across your channels, featuring real fans in professional photo/video content.",
    category: "Fan Recognition",
    organizationTypes: ["Sports Team", "Brand", "Media Company"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44", "45-54", "55+"],
      fanTypes: ["Dedicated", "Superfan", "Lapsed"]
    },
    budgetRange: "Medium ($5,000-$25,000)",
    implementationDifficulty: "Moderate",
    requiredResources: ["Social Media", "Staff", "Website"],
    successMetrics: ["User-Generated Content", "Social Sharing", "Engagement Rate"],
    exampleCaseStudy: "The Boston Red Sox ran a 'Sox Stories' campaign asking fans to share their personal connection to the team. They received over 5,000 submissions, selected 25 stories to develop into professional content, and featured them throughout the season. The campaign generated a 186% increase in social media engagement and reconnected many lapsed fans with the team."
  },
  {
    title: "Behind-the-Scenes Social Media Takeovers",
    description: "Allow players, coaches, or staff to take over your social media accounts for a day, giving fans an authentic, unfiltered look at their personalities and daily routines. Create interactive elements like Q&A sessions during the takeover.",
    category: "Social Media Campaign",
    organizationTypes: ["Sports Team", "Brand", "Media Company"],
    targetAudience: {
      ageGroups: ["Under 18", "18-24", "25-34"],
      fanTypes: ["Casual", "Dedicated", "Superfan"]
    },
    budgetRange: "Low (Under $5,000)",
    implementationDifficulty: "Easy",
    requiredResources: ["Social Media", "Staff"],
    successMetrics: ["Engagement Rate", "Social Sharing", "User-Generated Content"],
    exampleCaseStudy: "The Los Angeles Lakers implemented a series of Instagram takeovers where different players controlled the account for a day. Kyle Kuzma's takeover, which included behind-the-scenes training footage and a live Q&A session, generated a 300% increase in engagement compared to typical posts and added over 50,000 new followers in a single day."
  },
  {
    title: "Virtual Fan Wall at Live Events",
    description: "Create a digital display at your venue showing social media posts from fans using your hashtag. Extend this to a virtual fan wall where remote fans can appear via video to cheer and be visible to in-person attendees and potentially on broadcasts.",
    category: "Interactive Content",
    organizationTypes: ["Sports Team", "Event Organizer", "Entertainment Venue"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44"],
      fanTypes: ["Casual", "Dedicated", "Superfan"]
    },
    budgetRange: "Medium ($5,000-$25,000)",
    implementationDifficulty: "Moderate",
    requiredResources: ["Technology", "Social Media", "Physical Space"],
    successMetrics: ["User-Generated Content", "Social Sharing", "Engagement Rate"],
    exampleCaseStudy: "The Orlando Magic implemented a virtual fan wall during games with limited attendance, allowing fans at home to appear on screens visible to players and in-arena fans. They also displayed curated social media posts using the #MagicTogether hashtag. This generated over 25,000 uses of the hashtag per game and significantly increased social media mentions."
  },
  {
    title: "Interactive Prediction Contests",
    description: "Create a mobile-friendly platform where fans can make predictions about upcoming games/events, earning points for correct predictions. Offer leaderboards, badges, and prizes to drive competitive engagement.",
    category: "Contest",
    organizationTypes: ["Sports Team", "Media Company"],
    targetAudience: {
      ageGroups: ["18-24", "25-34", "35-44"],
      fanTypes: ["Casual", "Dedicated", "Superfan"]
    },
    budgetRange: "Medium ($5,000-$25,000)",
    implementationDifficulty: "Moderate",
    requiredResources: ["Technology", "Website", "Social Media"],
    successMetrics: ["Engagement Rate", "App Downloads", "Email Signups"],
    exampleCaseStudy: "The Philadelphia Eagles launched 'Eagles Predict,' a free prediction game where fans could forecast various game outcomes (first touchdown scorer, total yards, etc.). Weekly winners received merchandise, while season winners earned VIP experiences. The platform attracted 120,000 active users and increased average app session time by 400% on game days."
  }
];

module.exports = sampleEngagementIdeas;
# Nest Navigate - Home Inspection Learning Module

## Project Description
Nest Navigate is a modern, interactive learning platform built to teach first-time homebuyers about home inspections through gamified lessons. The application features an engaging user interface with 3D backgrounds, interactive quizzes, and a reward system to keep users motivated throughout their learning journey.

The platform consists of three comprehensive lessons about home inspection fundamentals, with each lesson containing multiple interactive questions. Users earn coins for correct answers and can track their progress across the module.

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Spline
- **State Management**: React hooks + localStorage
- **Build Tools**: ESLint, TypeScript

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/nest-navigate.git

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## Design Decisions and Assumptions

### Architecture
- **Component-Based Design**: The application is structured around reusable, single-responsibility components to maximize maintainability and code reuse.
- **Custom Hooks**: Business logic is extracted into custom React hooks to separate concerns and improve testability.
- **Persistent State**: User progress and rewards are stored in localStorage to persist across sessions without requiring backend authentication.
- **Mobile-First Approach**: The UI is designed to work seamlessly across all device sizes, with responsive layouts that adapt to mobile, tablet, and desktop screens. Special attention has been given to touch-friendly controls and optimized content display on smaller screens.

### User Experience
- **Side-by-Side Learning**: Study materials and questions are presented in a side-by-side format to facilitate learning and immediate application of knowledge.
- **Gamification**: Implemented a coin reward system and progress tracking to increase user engagement and motivation.
- **Visual Feedback**: Success animations, progress indicators, and a completion celebration provide positive reinforcement.

### Content Structure
- Three progressive lessons covering home inspection fundamentals
- Each lesson contains 2-3 interactive questions
- Questions include multiple-choice and true/false formats
- Study materials provide context before questions

### Assumptions
- **Target Audience**: First-time homebuyers with limited knowledge of home inspections
- **Session Length**: Users will complete lessons in short sessions (5-15 minutes each)
- **Device Usage**: Users may access content on various devices (mobile, tablet, desktop)
- **No Backend Required**: For this MVP, all data and progress can be stored client-side

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── lesson/[lessonId]/  # Dynamic lesson pages
│   └── complete/           # Completion page
├── components/             # Reusable UI components
│   ├── ui/                 # Generic UI components
│   ├── lesson/             # Lesson-specific components
│   └── home/               # Home page components
├── hooks/                  # Custom React hooks
└── data/                   # Static data and types
```

## Time Spent
The project was completed in approximately 4 hours, including:
- Initial setup and architecture planning
- Component development and styling
- Implementation of interactive features
- Testing and bug fixes
- Documentation

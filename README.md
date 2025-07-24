# Nest Navigate - Home Inspection Learning Module

A modern, interactive learning platform built with Next.js and TypeScript that teaches first-time homebuyers about home inspections through gamified lessons.

## 🏗️ Architecture

### Clean Code Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── lesson/[id]/       # Dynamic lesson pages
│   └── complete/          # Completion page
├── components/            # Reusable UI components
│   ├── ui/               # Generic UI components
│   ├── lesson/           # Lesson-specific components
│   ├── home/             # Home page components
│   └── complete/         # Completion page components
├── hooks/                # Custom React hooks
├── data/                 # Static data and types
└── styles/              # Global styles
```

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: UI components are generic and reusable
- **Type Safety**: Full TypeScript implementation with proper interfaces
- **Custom Hooks**: Business logic separated into reusable hooks

## 🚀 Features

### ✅ Module Overview Page
- Interactive 3D Spline background
- Progress tracking (X/3 lessons completed)
- Coin reward system
- Responsive lesson cards

### ✅ Interactive Learning Content
- **Lesson 1**: "What is a Home Inspection?" (3 questions)
- **Lesson 2**: "Types of Inspections" (2 questions)  
- **Lesson 3**: "Red Flags to Watch For" (3 questions)
- Side-by-side study material and quiz interface
- Rich content with highlighted key information
- Multiple question types (Quiz, True/False)

### ✅ Gamification Elements
- Animated coin counter with progress persistence
- Progress bars and visual indicators
- Success animations and feedback
- Final congratulations screen with confetti
- 10 coins per correct answer

### ✅ Responsive Design
- Mobile-first approach with Tailwind CSS
- Works seamlessly on desktop, tablet, and mobile
- Clean, modern educational UI

## 🛠️ Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Spline
- **State Management**: React hooks + localStorage
- **Architecture**: Component-based with custom hooks

## 📦 Component Structure

### UI Components (`/components/ui/`)
- `CoinCounter` - Animated coin display
- `ProgressBar` - Progress visualization
- `ProgressDots` - Question progress indicators

### Lesson Components (`/components/lesson/`)
- `QuizQuestion` - Multiple choice questions
- `TrueFalseQuestion` - True/false questions
- `SideBySideCards` - Study material + quiz layout
- `StudyMaterialCard` - Content display
- `QuestionCard` - Question wrapper
- `NavigationFooter` - Lesson navigation

### Custom Hooks (`/hooks/`)
- `useLocalStorage` - Persistent storage management
- `useLessonProgress` - Lesson state management
- `useModuleProgress` - Module-wide progress tracking

## 🎯 Key Features

### Clean Architecture Benefits
- **Maintainable**: Easy to modify and extend
- **Testable**: Components are isolated and focused
- **Reusable**: UI components work across different contexts
- **Type-Safe**: Full TypeScript coverage prevents runtime errors
- **Performance**: Optimized with proper React patterns

### User Experience
- **Engaging**: 3D background and smooth animations
- **Intuitive**: Clear navigation and progress indicators
- **Educational**: Rich content with highlighted key concepts
- **Rewarding**: Gamification keeps users motivated

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

The application is built mobile-first and adapts to all screen sizes:
- **Mobile**: Stacked layout with touch-friendly interactions
- **Tablet**: Optimized spacing and component sizing
- **Desktop**: Full side-by-side layout with hover effects

## 🎨 Design System

- **Colors**: Red accent (#ef4444) with neutral grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Layout**: CSS Grid and Flexbox for responsive design

## 🔧 Development

### Adding New Lessons
1. Update `lessonData.ts` with new lesson content
2. Questions automatically render based on type
3. Progress tracking updates automatically

### Adding New Question Types
1. Create new question component in `/components/lesson/`
2. Add type to `Question` interface in `lessonData.ts`
3. Update `QuestionCard` component to handle new type

### Customizing Styling
- All styles use Tailwind CSS classes
- Custom animations defined in `globals.css`
- Component-specific styles are co-located

This architecture ensures the codebase is maintainable, scalable, and follows React best practices while delivering an engaging educational experience.
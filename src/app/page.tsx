"use client";

import { CoinCounter } from '@/components/ui/CoinCounter';
import { ResetButton } from '@/components/ui/ResetButton';
import { HeroLessonCard } from '@/components/home/HeroLessonCard';
import { SplineBackground } from '@/components/home/SplineBackground';
import { useModuleProgress } from '@/hooks/useModuleProgress';

/**
 * Home page / Module Overview
 * 
 * Displays all available lessons with their progress status
 * and provides navigation to individual lessons
 */

export default function ModuleOverview() {
  // Get module data and handlers from custom hook
  const { coins, completedLessons, lessons, handleLessonClick, handleReset } = useModuleProgress();

  return (
    <div className="min-h-screen relative">
      {/* Spline 3D Background */}
      <SplineBackground />

      {/* Transparent Header */}
      <header
        className="absolute top-0 left-0 right-0 bg-transparent"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left - Brand */}
            <div className="flex items-center gap-4 md:gap-8">
              <span className="text-xl sm:text-2xl font-normal text-black">
                Nest Navigate
              </span>

              {/* Navigation Links - Hidden on mobile, shown on desktop */}
              <nav className="hidden md:flex items-center gap-6">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => handleLessonClick(lesson.id)}
                    className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                      completedLessons.includes(lesson.id)
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-600 hover:text-red-600 hover:border-b-2 hover:border-red-300"
                    }`}
                  >
                    Lesson {lesson.id}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right - Coin Counter */}
            <CoinCounter coins={coins} />
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4 bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-3 py-2">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson.id)}
                  className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg whitespace-nowrap ${
                    completedLessons.includes(lesson.id)
                      ? "text-red-600 bg-red-50 border border-red-200"
                      : "text-gray-600 bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-200"
                  }`}
                >
                  Lesson {lesson.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content - Responsive Layout */}
      <section
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-0"
        style={{ zIndex: 1 }}
      >
        {/* Text Content - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 flex justify-center relative pt-32 sm:pt-32 md:pt-8 md:py-0" style={{ zIndex: 10 }}>
          <div className="max-w-2xl p-4 md:p-8 md:-ml-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black mb-6 leading-tight">
              Your Helping Hand
              <span className="block font-normal text-gray-700">
                for Homeowners
              </span>
            </h1>
            <p className="text-lg text-gray-700 font-normal leading-relaxed mb-6">
              Whether you&apos;re a first-time buyer or experienced homeowner, master the fundamentals of home inspection through interactive lessons and earn rewards along the way.
            </p>
            <p className="text-base text-gray-600 font-normal leading-relaxed mb-8">
              Navigate the complex world of home ownership with confidence and knowledge.
            </p>
            
            {/* Progress Indicator */}
            <div className="mb-8">
              <span className="text-gray-700 font-normal text-sm">Progress:</span>
              <div className="flex items-center gap-2 mt-2">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      completedLessons.includes(lesson.id)
                        ? "bg-green-500 shadow-lg"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 text-sm ml-2 font-normal">
                  {completedLessons.length}/{lessons.length} completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Cards - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 flex justify-center relative" style={{ zIndex: 10 }}>
          <div className="grid gap-6 md:gap-8 max-w-lg px-4 md:px-0 md:-mr-6 pb-8 md:pb-0">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="transform transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <HeroLessonCard
                  lessonNumber={lesson.id}
                  title={lesson.title}
                  isCompleted={completedLessons.includes(lesson.id)}
                  totalQuestions={lesson.totalQuestions}
                  completedQuestions={lesson.completedQuestions}
                  onClick={() => handleLessonClick(lesson.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResetButton onReset={handleReset} />
    </div>
  );
}
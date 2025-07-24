import { ProgressDots } from '../ui/ProgressDots';

interface NavigationFooterProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  answeredQuestions: boolean[];
  showCompletion: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onBackToOverview: () => void;
  onNextLesson: () => void;
  lessonId: number;
}

export const NavigationFooter = ({
  currentQuestionIndex,
  totalQuestions,
  answeredQuestions,
  showCompletion,
  onPrevious,
  onNext,
  onBackToOverview,
  onNextLesson,
  lessonId,
}: NavigationFooterProps) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8">
      <div className="max-w-4xl mx-auto">
        {!showCompletion && (
          <div className="flex justify-between items-center">
            <button
              onClick={onPrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </button>
            
            <div className="hidden sm:block">
              <ProgressDots
                total={totalQuestions}
                current={currentQuestionIndex}
                completed={answeredQuestions}
              />
            </div>

            <button
              onClick={onNext}
              disabled={currentQuestionIndex === totalQuestions - 1}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Next</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Mobile Progress Dots - Only visible on mobile */}
        <div className="sm:hidden mt-2">
          <ProgressDots
            total={totalQuestions}
            current={currentQuestionIndex}
            completed={answeredQuestions}
          />
        </div>

        {showCompletion && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in">
            <button
              onClick={onBackToOverview}
              className="bg-gray-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              Back to Overview
            </button>
            <button
              onClick={onNextLesson}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              {lessonId < 3 ? 'Next Lesson →' : 'Complete Module 🎉'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
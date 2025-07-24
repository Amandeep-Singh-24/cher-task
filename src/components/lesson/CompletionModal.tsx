import { Confetti } from '../ui/Confetti';

interface CompletionModalProps {
  isVisible: boolean;
  lessonId: number;
  coinsEarned: number;
  onBackToOverview: () => void;
  onNextLesson: () => void;
}

export const CompletionModal = ({
  isVisible,
  lessonId,
  coinsEarned,
  onBackToOverview,
  onNextLesson,
}: CompletionModalProps) => {
  if (!isVisible) return null;

  return (
    <>
      <Confetti />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-5 sm:p-8 w-full max-w-md text-center shadow-2xl animate-scale-in">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Lesson Complete! 🎉
          </h2>
          
          <p className="text-gray-600 mb-4 sm:mb-6">
            Great job! You&apos;ve successfully completed Lesson {lessonId}.
          </p>
          
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-[10px] sm:text-xs">₿</span>
              </div>
              <span className="text-red-700 font-semibold text-base sm:text-lg">
                +{coinsEarned} coins earned!
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onBackToOverview}
              className="w-full sm:flex-1 bg-gray-100 text-gray-700 px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back to Overview
            </button>
            <button
              onClick={onNextLesson}
              className="w-full sm:flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg mt-2 sm:mt-0"
            >
              {lessonId < 3 ? 'Next Lesson →' : 'Complete Module 🎉'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
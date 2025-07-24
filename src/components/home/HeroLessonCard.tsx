interface HeroLessonCardProps {
  lessonNumber: number;
  title: string;
  isCompleted: boolean;
  totalQuestions: number;
  completedQuestions?: number;
  onClick: () => void;
}

export const HeroLessonCard = ({
  lessonNumber,
  title,
  isCompleted,
  totalQuestions,
  completedQuestions = 0,
  onClick,
}: HeroLessonCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 group bg-white/10 backdrop-blur-sm shadow-sm hover:shadow-md ${
        isCompleted
          ? "border-2 border-green-400 shadow-md"
          : "border border-gray-200 hover:border-red-300"
      }`}
      style={{ zIndex: 15 }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center font-normal text-lg border-2 ${
            isCompleted
              ? "border-green-500 text-green-600 bg-green-50"
              : "border-gray-300 text-gray-600 group-hover:border-red-300 group-hover:text-red-600 group-hover:bg-red-50"
          }`}
        >
          {lessonNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {totalQuestions} questions • Learn essential home inspection concepts
          </p>
          
          {/* Progress dots */}
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: totalQuestions }, (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < completedQuestions ? 'bg-green-500 shadow-sm' : 'bg-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-2">
              {completedQuestions}/{totalQuestions} completed
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                isCompleted
                  ? "text-green-600 bg-green-50"
                  : "text-gray-500 group-hover:text-gray-700 group-hover:bg-gray-50"
              }`}
            >
              {isCompleted ? "✓ Completed" : "Start Lesson"}
            </span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">₿</span>
              </div>
              <span className="text-xs font-medium text-gray-600">{totalQuestions * 10}</span>
            </div>
          </div>
        </div>
      </div>

      {!isCompleted && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};
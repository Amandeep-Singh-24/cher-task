interface SideBySideCardsProps {
  studyContent: React.ReactNode;
  questionContent: React.ReactNode;
  showQuestion: boolean;
  onShowQuestion: () => void;
}

export const SideBySideCards = ({
  studyContent,
  questionContent,
  showQuestion,
  onShowQuestion,
}: SideBySideCardsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Study Material Card */}
      <div className="h-full">{studyContent}</div>

      {/* Question Card */}
      <div
        className={`h-full transition-all duration-500 ${
          showQuestion
            ? "opacity-100 transform translate-x-0"
            : "opacity-100 transform translate-x-0 lg:transform-none"
        }`}
      >
        {questionContent}
      </div>
    </div>
  );
};
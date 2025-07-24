interface SideBySideCardsProps {
  studyContent: React.ReactNode;
  questionContent: React.ReactNode;
  showQuestion: boolean;
}

export const SideBySideCards = ({
  studyContent,
  questionContent,
  showQuestion,
}: SideBySideCardsProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 h-full overflow-y-auto">
      {/* Study Material Card - Conditionally shown on mobile based on showQuestion */}
      <div className={`h-full ${showQuestion ? 'hidden lg:block' : 'block'}`}>
        {studyContent}
      </div>

      {/* Question Card - Conditionally shown on mobile based on showQuestion */}
      <div
        className={`h-full transition-all duration-500 ${
          showQuestion
            ? 'block'
            : 'hidden lg:block'
        }`}
      >
        {questionContent}
      </div>
      
      {/* Mobile Toggle Button - Only visible on mobile */}
      <div className="fixed bottom-28 right-4 lg:hidden z-20">
        <button 
          onClick={() => {
            // This is just a visual indicator - the actual toggle happens in the parent component
            const event = new CustomEvent('toggle-card-view');
            document.dispatchEvent(event);
          }}
          className="bg-gradient-to-r from-red-500 to-red-600 shadow-lg rounded-full p-4 border border-red-300 animate-pulse"
          aria-label={showQuestion ? "Show Study Material" : "Show Question"}
        >
          {showQuestion ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
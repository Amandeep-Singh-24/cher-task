interface StudyMaterialCardProps {
  content: string;
}

export const StudyMaterialCard = ({ content }: StudyMaterialCardProps) => {
  return (
    <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col justify-center overflow-y-auto">
      <div className="text-center mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4">
          Study Material
        </h2>
      </div>
      <div className="prose max-w-none text-center">
        {content.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-base sm:text-lg"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>
  );
};
import { useState } from 'react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export const QuizQuestion = ({
  question,
  options,
  correctAnswer,
  onAnswer,
  isAnswered,
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(isAnswered);

  const handleAnswerSelect = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === correctAnswer;
    setAnswered(true);
    onAnswer(isCorrect);
  };

  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-white font-bold text-lg">?</span>
      </div>
      <h3
        className="text-xl font-medium text-gray-800 mb-8"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="space-y-3 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={answered}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-[1.02] ${
              selectedAnswer === index
                ? answered
                  ? index === correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-red-500 bg-red-50'
                : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
            } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <span className="font-medium text-gray-800">{option}</span>
            {answered && selectedAnswer === index && (
              <span className="ml-2 text-sm font-medium">
                {index === correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
              </span>
            )}
          </button>
        ))}
      </div>
      {!answered && selectedAnswer !== null && (
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Submit Answer
        </button>
      )}
      {answered && (
        <div className="text-center animate-fade-in">
          <div className="text-lg font-semibold text-green-600 mb-4">
            🎉 Correct! Question completed.
          </div>
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4">
            <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white font-bold text-xs">₿</span>
            </div>
            <span className="font-medium text-gray-700">+10 coins earned!</span>
          </div>
        </div>
      )}
    </div>
  );
};
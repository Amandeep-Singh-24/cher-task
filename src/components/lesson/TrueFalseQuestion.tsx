import { useState } from 'react';

interface TrueFalseQuestionProps {
  question: string;
  correctAnswer: boolean;
  onAnswer: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export const TrueFalseQuestion = ({
  question,
  correctAnswer,
  onAnswer,
  isAnswered,
}: TrueFalseQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(isAnswered);
  const [showWrongFeedback, setShowWrongFeedback] = useState(false);

  const handleAnswerSelect = (answer: boolean) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setShowWrongFeedback(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) {
      setAnswered(true);
      onAnswer(isCorrect);
    } else {
      setShowWrongFeedback(true);
      // Don't auto-reset, let user try again manually
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setShowWrongFeedback(false);
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
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => handleAnswerSelect(true)}
          disabled={answered}
          className={`flex-1 p-6 rounded-lg border-2 font-medium transition-all duration-200 hover:scale-105 ${
            selectedAnswer === true
              ? answered
                ? correctAnswer
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-red-500 bg-red-50 text-red-700'
                : 'border-red-500 bg-red-50 text-red-700'
              : 'border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700'
          } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
        >
          True
        </button>
        <button
          onClick={() => handleAnswerSelect(false)}
          disabled={answered}
          className={`flex-1 p-6 rounded-lg border-2 font-medium transition-all duration-200 hover:scale-105 ${
            selectedAnswer === false
              ? answered
                ? !correctAnswer
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-red-500 bg-red-50 text-red-700'
                : 'border-red-500 bg-red-50 text-red-700'
              : 'border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700'
          } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
        >
          False
        </button>
      </div>
      {!answered && !showWrongFeedback && selectedAnswer !== null && (
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Submit Answer
        </button>
      )}
      {showWrongFeedback && (
        <div className="text-center animate-fade-in">
          <div className="text-lg font-semibold text-red-600 mb-4">
            ❌ Incorrect! Please try again.
          </div>
          <p className="text-gray-600 mb-4">
            Review the study material and select a different answer.
          </p>
          <button
            onClick={handleTryAgain}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-6 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
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
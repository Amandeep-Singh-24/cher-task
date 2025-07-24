import { QuizQuestion } from "./QuizQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

interface Question {
  type: "quiz" | "trueFalse";
  question: string;
  options?: string[];
  correctAnswer: number | boolean;
}

interface QuestionCardProps {
  question: Question;
  currentQuestionIndex: number;
  isQuizStarted: boolean;
  isAnswered: boolean;
  onAnswer: (isCorrect: boolean) => void;
  onStartQuiz: () => void;
}

export const QuestionCard = ({
  question,
  currentQuestionIndex,
  isQuizStarted,
  isAnswered,
  onAnswer,
  onStartQuiz,
}: QuestionCardProps) => {
  return (
    <div className="h-full bg-white rounded-xl p-8 shadow-md border border-gray-200 flex flex-col justify-center">
      {isQuizStarted ? (
        <>
          {question.type === "quiz" && (
            <QuizQuestion
              question={question.question}
              options={question.options!}
              correctAnswer={question.correctAnswer as number}
              onAnswer={onAnswer}
              isAnswered={isAnswered}
            />
          )}
          {question.type === "trueFalse" && (
            <TrueFalseQuestion
              question={question.question}
              correctAnswer={question.correctAnswer as boolean}
              onAnswer={onAnswer}
              isAnswered={isAnswered}
            />
          )}
        </>
      ) : (
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Question {currentQuestionIndex + 1}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to test your knowledge?
          </p>
          <button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg border border-red-300"
          >
            Start Quiz →
          </button>
        </div>
      )}
    </div>
  );
};

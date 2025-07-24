import { QuizQuestion } from './QuizQuestion';
import { TrueFalseQuestion } from './TrueFalseQuestion';

interface Question {
  type: 'quiz' | 'trueFalse';
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
}

export const QuestionCard = ({
  question,
  currentQuestionIndex,
  isQuizStarted,
  isAnswered,
  onAnswer,
}: QuestionCardProps) => {
  return (
    <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-200 flex flex-col justify-center">
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
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-gray-600 mb-4">
            Question {currentQuestionIndex + 1}
          </h2>
          <p className="text-gray-500">Click "Start Quiz" to begin</p>
        </div>
      )}
    </div>
  );
};
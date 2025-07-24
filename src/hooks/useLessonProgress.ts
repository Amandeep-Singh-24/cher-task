import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useLessonProgress(lessonId: number, totalQuestions: number) {
  const [coins, setCoins] = useLocalStorage('nestNavigateCoins', 0);
  const [completedLessons, setCompletedLessons] = useLocalStorage<number[]>('nestNavigateCompletedLessons', []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (totalQuestions > 0 && answeredQuestions.length === 0) {
      setAnsweredQuestions(new Array(totalQuestions).fill(false));
    }
  }, [totalQuestions, answeredQuestions.length]);

  const handleQuestionAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      const newCoins = coins + 10;
      setCoins(newCoins);

      // Mark current question as answered
      const newAnsweredQuestions = [...answeredQuestions];
      newAnsweredQuestions[currentQuestionIndex] = true;
      setAnsweredQuestions(newAnsweredQuestions);

      // Check if all questions are answered
      if (newAnsweredQuestions.every((answered) => answered)) {
        setLessonCompleted(true);
        setShowCompletion(true);

        // Save lesson completion
        if (!completedLessons.includes(lessonId)) {
          setCompletedLessons([...completedLessons, lessonId]);
        }
      }
    }
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsFlipped(false);
    }
  };

  return {
    coins,
    completedLessons,
    currentQuestionIndex,
    isFlipped,
    answeredQuestions,
    lessonCompleted,
    showCompletion,
    handleQuestionAnswer,
    handleFlipCard,
    handleNextQuestion,
    handlePrevQuestion,
  };
}
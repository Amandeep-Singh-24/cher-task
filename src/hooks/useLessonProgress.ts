import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useLessonProgress(lessonId: number, totalQuestions: number) {
  const [coins, setCoins, isCoinsHydrated] = useLocalStorage('nestNavigateCoins', 0);
  const [completedLessons, setCompletedLessons, isLessonsHydrated] = useLocalStorage<number[]>('nestNavigateCompletedLessons', []);
  const [lessonProgress, setLessonProgress] = useLocalStorage<Record<number, number>>('nestNavigateLessonProgress', {});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [coinsEarnedThisLesson, setCoinsEarnedThisLesson] = useState(0);

  useEffect(() => {
    if (totalQuestions > 0 && answeredQuestions.length === 0) {
      setAnsweredQuestions(new Array(totalQuestions).fill(false));
    }
  }, [totalQuestions, answeredQuestions.length]);

  const handleQuestionAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      const newCoins = coins + 10;
      setCoins(newCoins);
      setCoinsEarnedThisLesson(prev => prev + 10);

      // Mark current question as answered
      const newAnsweredQuestions = [...answeredQuestions];
      newAnsweredQuestions[currentQuestionIndex] = true;
      setAnsweredQuestions(newAnsweredQuestions);

      // Update lesson progress
      const questionsCompleted = newAnsweredQuestions.filter(Boolean).length;
      setLessonProgress(prev => ({ ...prev, [lessonId]: questionsCompleted }));

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

  const handleReset = () => {
    // Reset localStorage values
    setCoins(0);
    setCompletedLessons([]);
    setLessonProgress({});
    
    // Reset local state
    setCurrentQuestionIndex(0);
    setIsFlipped(false);
    setAnsweredQuestions(new Array(totalQuestions).fill(false));
    setLessonCompleted(false);
    setShowCompletion(false);
    setCoinsEarnedThisLesson(0);
  };

  return {
    coins,
    completedLessons,
    currentQuestionIndex,
    isFlipped,
    answeredQuestions,
    lessonCompleted,
    showCompletion,
    coinsEarnedThisLesson,
    isHydrated: isCoinsHydrated && isLessonsHydrated,
    handleQuestionAnswer,
    handleFlipCard,
    handleNextQuestion,
    handlePrevQuestion,
    handleReset,
  };
}
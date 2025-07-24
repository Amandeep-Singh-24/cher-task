import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook to manage lesson progress state and interactions
 * 
 * Handles question navigation, answer tracking, completion state,
 * and synchronizes with localStorage for persistence
 */
export function useLessonProgress(lessonId: number, totalQuestions: number) {
  // Persistent state (synced with localStorage)
  const [coins, setCoins, isCoinsHydrated] = useLocalStorage('nestNavigateCoins', 0);
  const [completedLessons, setCompletedLessons, isLessonsHydrated] = useLocalStorage<number[]>('nestNavigateCompletedLessons', []);
  const [lessonProgress, setLessonProgress] = useLocalStorage<Record<number, number>>('nestNavigateLessonProgress', {});
  
  // Local state (not persisted)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [coinsEarnedThisLesson, setCoinsEarnedThisLesson] = useState(0);

  // Initialize answered questions array when totalQuestions is known
  useEffect(() => {
    if (totalQuestions > 0 && answeredQuestions.length === 0) {
      setAnsweredQuestions(new Array(totalQuestions).fill(false));
    }
  }, [totalQuestions, answeredQuestions.length]);

  // Handle correct/incorrect answers and update progress
  const handleQuestionAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      const newCoins = coins + 10;
      setCoins(newCoins);
      setCoinsEarnedThisLesson(prev => prev + 10);

      // Mark current question as answered
      const newAnsweredQuestions = [...answeredQuestions];
      newAnsweredQuestions[currentQuestionIndex] = true;
      setAnsweredQuestions(newAnsweredQuestions);

      // Update lesson progress for home screen display
      const questionsCompleted = newAnsweredQuestions.filter(Boolean).length;
      setLessonProgress(prev => ({ ...prev, [lessonId]: questionsCompleted }));

      // Check if all questions are answered to show completion modal
      if (newAnsweredQuestions.every((answered) => answered)) {
        setLessonCompleted(true);
        setShowCompletion(true);

        // Save lesson completion status
        if (!completedLessons.includes(lessonId)) {
          setCompletedLessons([...completedLessons, lessonId]);
        }
      }
    }
  }, [coins, setCoins, answeredQuestions, currentQuestionIndex, lessonId, setLessonProgress, completedLessons, setCompletedLessons]);

  // Toggle between study material and question views
  const handleFlipCard = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  // Navigate to next question
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsFlipped(false); // Show study material for new question
    }
  }, [currentQuestionIndex, totalQuestions]);

  // Navigate to previous question
  const handlePrevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsFlipped(false); // Show study material for new question
    }
  }, [currentQuestionIndex]);

  // Reset all progress (used by reset button)
  const handleReset = useCallback(() => {
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
  }, [setCoins, setCompletedLessons, setLessonProgress, totalQuestions]);

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
import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { lessonData } from '@/data/lessonData';

/**
 * Custom hook for the module overview page
 * 
 * Provides lesson data with progress information and navigation
 * functions for the home screen
 */
export function useModuleProgress() {
  // Get persistent data from localStorage
  const [coins, setCoins] = useLocalStorage('nestNavigateCoins', 0);
  const [completedLessons, setCompletedLessons] = useLocalStorage<number[]>('nestNavigateCompletedLessons', []);
  const [lessonProgress, setLessonProgress] = useLocalStorage<Record<number, number>>('nestNavigateLessonProgress', {});

  // Create lesson data with progress information
  const lessons = useMemo(() => [
    { 
      id: 1, 
      title: "What is a Home Inspection?", 
      totalQuestions: lessonData[1]?.questions.length || 0,
      completedQuestions: lessonProgress[1] || 0
    },
    { 
      id: 2, 
      title: "Types of Inspections", 
      totalQuestions: lessonData[2]?.questions.length || 0,
      completedQuestions: lessonProgress[2] || 0
    },
    { 
      id: 3, 
      title: "Red Flags to Watch For", 
      totalQuestions: lessonData[3]?.questions.length || 0,
      completedQuestions: lessonProgress[3] || 0
    },
  ], [lessonProgress]);

  // Navigate to a specific lesson
  const handleLessonClick = useCallback((lessonId: number) => {
    window.location.href = `/lesson/${lessonId}`;
  }, []);

  // Reset all progress data
  const handleReset = useCallback(() => {
    setCoins(0);
    setCompletedLessons([]);
    setLessonProgress({});
  }, [setCoins, setCompletedLessons, setLessonProgress]);

  return {
    coins,
    completedLessons,
    lessons, // lessonProgress is used internally to create lessons
    handleLessonClick,
    handleReset,
  };
}
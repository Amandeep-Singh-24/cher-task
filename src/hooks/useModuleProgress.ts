import { useLocalStorage } from './useLocalStorage';
import { lessonData } from '@/data/lessonData';

export function useModuleProgress() {
  const [coins, setCoins] = useLocalStorage('nestNavigateCoins', 0);
  const [completedLessons, setCompletedLessons] = useLocalStorage<number[]>('nestNavigateCompletedLessons', []);
  const [lessonProgress, setLessonProgress] = useLocalStorage<Record<number, number>>('nestNavigateLessonProgress', {});

  const lessons = [
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
  ];

  const handleLessonClick = (lessonId: number) => {
    window.location.href = `/lesson/${lessonId}`;
  };

  const handleReset = () => {
    setCoins(0);
    setCompletedLessons([]);
    setLessonProgress({});
  };

  return {
    coins,
    completedLessons,
    lessonProgress,
    lessons,
    handleLessonClick,
    handleReset,
  };
}
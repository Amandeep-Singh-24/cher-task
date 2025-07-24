import { useLocalStorage } from './useLocalStorage';

export function useModuleProgress() {
  const [coins] = useLocalStorage('nestNavigateCoins', 0);
  const [completedLessons] = useLocalStorage<number[]>('nestNavigateCompletedLessons', []);

  const lessons = [
    { id: 1, title: "What is a Home Inspection?" },
    { id: 2, title: "Types of Inspections" },
    { id: 3, title: "Red Flags to Watch For" },
  ];

  const handleLessonClick = (lessonId: number) => {
    window.location.href = `/lesson/${lessonId}`;
  };

  return {
    coins,
    completedLessons,
    lessons,
    handleLessonClick,
  };
}
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Confetti } from "@/components/ui/Confetti";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function CompletePage() {
  const router = useRouter();
  const [coins] = useLocalStorage("nestNavigateCoins", 0);
  const [completedLessons] = useLocalStorage<number[]>("nestNavigateCompletedLessons", []);

  // We'll use a state to track if we've checked the lessons
  const [isHydrated, setIsHydrated] = useLocalStorage<boolean>("isHydrated", false);
  
  // Wait for hydration before checking lessons
  useEffect(() => {
    // Only check after hydration is complete
    if (isHydrated && completedLessons.length < 3) {
      router.push("/");
    }
  }, [completedLessons, router, isHydrated]);
  
  // Mark as hydrated after initial render
  useEffect(() => {
    setIsHydrated(true);
  }, [setIsHydrated]);

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Confetti />
      <div className="max-w-2xl mx-auto text-center p-8">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Congratulations! 🎉
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          You've successfully completed all lessons in the Home Inspection module!
        </p>

        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <span className="text-red-700 font-semibold text-2xl">
              {coins} total coins earned
            </span>
          </div>
          <p className="text-gray-700">
            You've mastered the fundamentals of home inspection!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((lessonId) => (
            <div
              key={lessonId}
              className="bg-white rounded-lg border-2 border-green-500 p-4 shadow-sm"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800">Lesson {lessonId}</span>
              </div>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleBackToHome}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
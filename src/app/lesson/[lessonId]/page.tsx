"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { CoinCounter } from "@/components/ui/CoinCounter";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ResetButton } from "@/components/ui/ResetButton";
import { SideBySideCards } from "@/components/lesson/SideBySideCards";
import { StudyMaterialCard } from "@/components/lesson/StudyMaterialCard";
import { QuestionCard } from "@/components/lesson/QuestionCard";
import { NavigationFooter } from "@/components/lesson/NavigationFooter";
import { CompletionModal } from "@/components/lesson/CompletionModal";
import { lessonData } from "@/data/lessonData";
import { useLessonProgress } from "@/hooks/useLessonProgress";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = parseInt(params.lessonId as string);
  const currentLesson = lessonData[lessonId];

  const {
    coins,
    currentQuestionIndex,
    isFlipped,
    answeredQuestions,
    showCompletion,
    coinsEarnedThisLesson,
    isHydrated,
    handleQuestionAnswer,
    handleFlipCard,
    handleNextQuestion,
    handlePrevQuestion,
    handleReset,
  } = useLessonProgress(lessonId, currentLesson?.questions.length || 0);

  // Add state for mobile view toggle
  const [mobileShowQuestion, setMobileShowQuestion] = useState(false);

  // Listen for toggle events from the SideBySideCards component
  useEffect(() => {
    const handleToggle = () => {
      setMobileShowQuestion((prev) => !prev);
    };

    document.addEventListener("toggle-card-view", handleToggle);
    return () => {
      document.removeEventListener("toggle-card-view", handleToggle);
    };
  }, []);

  // Navigation functions defined outside of render
  const handleNextLesson = useCallback(() => {
    if (lessonId < 3) {
      router.push(`/lesson/${lessonId + 1}`);
    } else {
      router.push("/complete");
    }
  }, [lessonId, router]);

  const handleBackToOverview = useCallback(() => {
    router.push("/");
  }, [router]);

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Lesson Not Found
          </h1>
          <button
            onClick={handleBackToOverview}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-colors"
          >
            Back to Overview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="absolute top-0 left-0 right-0 bg-transparent"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={handleBackToOverview}
                className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm sm:text-base">Nest Navigate</span>
              </button>
            </div>
            <CoinCounter coins={coins} isHydrated={isHydrated} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-screen flex flex-col">
        {/* Header Section */}
        <div className="pt-20 sm:pt-28 pb-4 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={currentLesson.questions.length}
              label="Question Progress"
            />

            {/* Lesson Header */}
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-black mb-2 leading-tight">
                {currentLesson.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <span>Lesson {lessonId} of 3</span>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-[8px] sm:text-xs">
                      ₿
                    </span>
                  </div>
                  <span>10 coins per question</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto h-full">
            <div className="h-full max-h-[500px]">
              <SideBySideCards
                showQuestion={isFlipped || mobileShowQuestion}
                studyContent={
                  <StudyMaterialCard
                    content={
                      currentLesson.questions[currentQuestionIndex]
                        ?.studyContent || currentLesson.content
                    }
                  />
                }
                questionContent={
                  <QuestionCard
                    question={currentLesson.questions[currentQuestionIndex]}
                    currentQuestionIndex={currentQuestionIndex}
                    isQuizStarted={isFlipped}
                    isAnswered={answeredQuestions[currentQuestionIndex]}
                    onAnswer={handleQuestionAnswer}
                    onStartQuiz={handleFlipCard}
                  />
                }
              />
            </div>
          </div>
        </div>

        {/* Mobile indicator for which view is active */}
        <div className="lg:hidden text-center text-sm text-gray-500 -mt-4 mb-6 pb-4">
          <div className="bg-white/80 backdrop-blur-sm py-2 px-4 rounded-lg inline-block">
            {mobileShowQuestion ? "Question View" : "Study Material View"}
            <span className="ml-2 text-xs">
              (Tap button in bottom right to switch)
            </span>
          </div>
        </div>

        <NavigationFooter
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={currentLesson.questions.length}
          answeredQuestions={answeredQuestions}
          showCompletion={false}
          onPrevious={handlePrevQuestion}
          onNext={handleNextQuestion}
          onBackToOverview={handleBackToOverview}
          onNextLesson={handleNextLesson}
          lessonId={lessonId}
        />
      </main>

      <CompletionModal
        isVisible={showCompletion}
        lessonId={lessonId}
        coinsEarned={coinsEarnedThisLesson}
        onBackToOverview={handleBackToOverview}
        onNextLesson={handleNextLesson}
      />

      <ResetButton onReset={handleReset} />
    </div>
  );
}

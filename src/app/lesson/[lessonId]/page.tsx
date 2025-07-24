"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToOverview}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5"
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
                Nest Navigate
              </button>
            </div>
            <CoinCounter coins={coins} isHydrated={isHydrated} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-screen flex flex-col">
        {/* Header Section */}
        <div className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={currentLesson.questions.length}
              label="Question Progress"
            />

            {/* Lesson Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-normal text-black mb-2 leading-tight">
                {currentLesson.title}
              </h1>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
                <span>Lesson {lessonId} of 3</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">₿</span>
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
                showQuestion={isFlipped}
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

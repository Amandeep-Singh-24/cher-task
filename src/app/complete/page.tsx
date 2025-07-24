'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CoinCounter } from '@/components/ui/CoinCounter';
import { Confetti } from '@/components/complete/Confetti';

export default function CompletionPage() {
  const router = useRouter();
  const [coins, setCoins] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Load saved progress from localStorage
    const savedCoins = localStorage.getItem('nestNavigateCoins');
    if (savedCoins) {
      setCoins(parseInt(savedCoins));
    }

    // Hide confetti after 3 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRestartModule = () => {
    // Clear saved progress
    localStorage.removeItem('nestNavigateCompletedLessons');
    localStorage.setItem('nestNavigateCoins', '0');
    router.push('/');
  };

  const handleBackToOverview = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white relative">
      {showConfetti && <Confetti />}
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 bg-transparent" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-normal text-black">
                Nest Navigate
              </span>
            </div>
            <CoinCounter coins={coins} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Congratulations Message */}
          <h1 className="text-5xl font-normal text-black mb-6 leading-tight">
            🎉 Congratulations! 🎉
          </h1>
          <p className="text-xl text-gray-700 font-normal leading-relaxed mb-8">
            You've successfully completed the "Understanding Home Inspections" module!
          </p>

          {/* Achievement Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-200 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-normal text-gray-800 mb-6">Module Complete!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-normal text-red-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-normal text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-normal text-red-600 mb-2">75</div>
                <div className="text-sm text-gray-600">Coins Earned</div>
              </div>
            </div>

            {/* Coin Reward Display */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white font-bold text-lg">₿</span>
                </div>
                <span className="text-2xl font-normal text-gray-800">You've earned 75 coins!</span>
              </div>
              <p className="text-gray-600">Great job mastering the fundamentals of home inspections!</p>
            </div>
          </div>

          {/* What You've Learned */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-200 mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-normal text-gray-800 mb-6">What You've Learned</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Home Inspection Basics</h4>
                <p className="text-sm text-gray-600">Understanding what home inspections cover and their importance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Inspection Types</h4>
                <p className="text-sm text-gray-600">Different types of inspections and when they're needed</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Red Flags</h4>
                <p className="text-sm text-gray-600">Identifying major issues that require immediate attention</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBackToOverview}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Back to Overview
            </button>
            <button
              onClick={handleRestartModule}
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 hover:scale-105"
            >
              Restart Module
            </button>
          </div>

          {/* Certificate */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-normal text-gray-800 mb-2">Certificate of Completion</h3>
              <p className="text-gray-600 mb-4">
                You've successfully completed the "Understanding Home Inspections" module
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Completed on {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
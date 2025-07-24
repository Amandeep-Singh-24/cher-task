'use client';

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleSplineLoad = () => {
    try {
      console.log("Spline scene loaded successfully");
      setIsLoaded(true);
    } catch (error) {
      console.error("Error in Spline load handler:", error);
      setHasError(true);
    }
  };

  const handleSplineError = (error: Error | unknown) => {
    try {
      console.error("Spline loading error:", error);
      setHasError(true);
    } catch (err) {
      console.error("Error in Spline error handler:", err);
      setHasError(true);
    }
  };

  if (!isMounted) {
    return (
      <div className="fixed inset-0 w-full h-full bg-white" style={{ zIndex: 100 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-600 text-lg">Initializing...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 1 }}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <div className="text-gray-600 text-lg">Loading 3D Scene...</div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <div className="text-gray-600 text-lg">3D Scene Unavailable</div>
        </div>
      )}
      
      {!hasError && (
        <Spline
          scene="https://prod.spline.design/EXCTJiiLFcR9uOSW/scene.splinecode"
          onLoad={handleSplineLoad}
          onError={handleSplineError}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100
          }}
        />
      )}
    </div>
  );
};
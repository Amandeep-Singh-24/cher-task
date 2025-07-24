import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for persistent storage with SSR compatibility
 * 
 * Uses a ref to avoid hydration mismatches between server and client,
 * and tracks hydration state to ensure consistent rendering
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);
  // Store initialValue in a ref to avoid it changing between renders
  const initialValueRef = useRef(initialValue);

  // Load value from localStorage once on client-side
  useEffect(() => {
    if (typeof window !== "undefined" && !isHydrated) {
      try {
        const item = window.localStorage.getItem(key);
        const value = item ? JSON.parse(item) : initialValueRef.current;
        setStoredValue(value);
      } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
      }
      setIsHydrated(true);
    }
  }, [key, isHydrated]);

  // Create setValue function outside of render cycle
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, isHydrated] as const;
}
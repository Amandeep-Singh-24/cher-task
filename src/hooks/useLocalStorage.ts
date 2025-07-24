import { useState, useEffect, useRef } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);
  const initialValueRef = useRef(initialValue);

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
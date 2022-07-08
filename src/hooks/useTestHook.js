import { useEffect } from 'react';

export const useTestHook = () => {
  useEffect(() => {
    console.log('I\'m a test custom hook.');
  }, []);
}
import { useEffect } from 'react';

export default function useScheduler(callback, interval = 300000) {
  useEffect(() => {
    callback();
    const id = setInterval(callback, interval);
    return () => clearInterval(id);
  }, [callback, interval]);
}

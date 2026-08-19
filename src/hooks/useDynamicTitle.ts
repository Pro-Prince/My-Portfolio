import { useEffect } from 'react';

export function useDynamicTitle(title: string) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Prince Patel - I Build Things That Actually Work';
    };
  }, [title]);
}

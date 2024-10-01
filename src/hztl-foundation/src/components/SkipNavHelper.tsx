'use client';
import { useEffect } from 'react';

const SkipNavHelper: React.FC = () => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const skipLink = document.querySelector('a[href="#content"]');
      if (event.key === ' ' && skipLink && skipLink === document.activeElement) {
        event.preventDefault();
        (skipLink as HTMLAnchorElement).click();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return null;
};

export default SkipNavHelper;

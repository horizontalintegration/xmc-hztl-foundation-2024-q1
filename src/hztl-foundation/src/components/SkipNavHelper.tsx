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

    const handleClick = () => {
      const contentElement = document.getElementById('content');
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        contentElement.focus(); // Ensure the content is focused
      }
    };

    const skipLink = document.querySelector('a[href="#content"]');
    skipLink?.addEventListener('click', handleClick);

    document.addEventListener('keydown', handleKeydown);

    return () => {
      skipLink?.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return null;
};

export default SkipNavHelper;

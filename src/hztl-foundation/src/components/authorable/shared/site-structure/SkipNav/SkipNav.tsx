// Global
import React from 'react';
import { tv } from 'tailwind-variants';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: [
      'left-1',
      'rounded-none',
      'sr-only',
      'top-1',
      'focus:absolute',
      'focus:bg-theme-black',
      'focus:flex',
      'focus:not-sr-only',
      'focus:outline-theme-darkblue',
      'focus:px-4',
      'focus:py-2',
      'focus:text-white',
      'focus:underline',
      'focus:z-50',
    ],
  },
});

const SkipNav: React.FC = () => {
  /*
   * Rendering
   */

  const { base } = TAILWIND_VARIANTS();

  return (
    <a className={base()} href="#content" title="Skip to the main content">
      Skip to main content
    </a>
  );
};

export default SkipNav;

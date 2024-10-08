import React from 'react';
import SkipNavHelper from './SkipNavHelper';

const SkipNav: React.FC = () => {
  return (
    <div>
      <a
        href="#content"
        title="Skip to the main content"
        className="sr-only focus:not-sr-only focus:absolute top-0 left-0 focus:bg-theme-black focus:text-white focus:underline focus:py-2 focus:px-4 focus:z-50 focus:flex rounded-none"
      >
        Skip to main content
      </a>
      <SkipNavHelper />
    </div>
  );
};

export default SkipNav;

import React from 'react';
import SkipNavHelper from './SkipNavHelper';

const SkipNav: React.FC = () => {
  return (
    <div className="relative">
      <a
        href="#content"
        title="Skip to the main content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:w-full focus:bg-black focus:text-white focus:p-2 focus:z-50 focus:flex focus:justify-center"
      >
        Skip to main content
      </a>
      <SkipNavHelper />
    </div>
  );
};

export default SkipNav;

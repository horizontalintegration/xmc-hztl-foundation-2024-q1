import React from 'react';

const SkipNav: React.FC = () => {
  return (
    <a
      href="#content"
      title="Skip to the main content"
      className="sr-only focus:not-sr-only focus:absolute top-1 left-1 focus:bg-theme-black focus:text-white focus:underline focus:py-2 focus:px-4 focus:z-50 focus:flex rounded-none focus:outline-theme-darkblue"
    >
      Skip to main content
    </a>
  );
};

export default SkipNav;

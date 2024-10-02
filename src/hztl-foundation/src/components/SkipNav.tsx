import React from 'react';
import SkipNavHelper from './SkipNavHelper';
import Link from 'next/link';

const SkipNav: React.FC = () => {
  return (
    <div className="relative">
      <Link
        href="/#content"
        title="Skip to the main content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:w-full focus:bg-black focus:text-white focus:p-2 focus:z-50 focus:flex focus:justify-center"
      >
        Skip to main content
      </Link>
      <SkipNavHelper />
    </div>
  );
};

export default SkipNav;

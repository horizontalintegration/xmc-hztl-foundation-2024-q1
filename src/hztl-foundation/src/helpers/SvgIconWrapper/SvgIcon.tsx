// Global
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import React from 'react';

/**
 * Standardize SVG icons on a 48x48 grid to allow
 * for consistent use across the project
 *
 * Icon contents should be stored in the icons subdirectory
 * using the naming scheme 'icon--[name].tsx'
 */

export type SvgIconSize = 'sm' | 'md' | 'em' | 'lg';

export type IconTypes =
  | undefined
  | 'arrow-right'
  | 'pause'
  | 'play'
  | 'chevron-down'
  | 'outline-search';

export interface SvgIconProps {
  className?: string;
  icon: IconTypes;
  size?: SvgIconSize;
}

const sizeClasses: Record<SvgIconSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-16 w-16',
  lg: 'h-6 w-6',
  em: 'h-em w-em',
};

const SvgIcon = ({ icon, size = 'sm', className }: SvgIconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));

  return (
    <svg
      width={14}
      height={14}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className={classnames(sizeClasses[size], className)}
    >
      <IconContent />
    </svg>
  );
};

export default React.memo(SvgIcon);

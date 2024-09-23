// Global
import dynamic from 'next/dynamic';
import React from 'react';
import { tv } from 'tailwind-variants';

/**
 * Standardize SVG icons on a 48x48 grid to allow
 * for consistent use across the project
 *
 * Icon contents should be stored in the icons subdirectory
 * using the naming scheme 'icon--[name].tsx'
 */

type SvgFill = 'currentColor' | 'none';

export type SvgIconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'em' | 'lg';

export type SvgIconTypes =
  | undefined
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'close'
  | 'download'
  | 'magnifier'
  | 'new-window'
  | 'pause'
  | 'play'
  | 'plus'
  | 'refine'
  | 'sorting';

export interface SvgIconProps {
  className?: string;
  fill?: SvgFill;
  icon: SvgIconTypes;
  size?: SvgIconSize;
  viewBox?: string;
}

const TAILWIND_VARIANTS = tv({
  base: [],
  variants: {
    size: {
      xxs: ['!h-3', '!w-3'], //added solely for fixing the search and results UI
      xs: ['!h-4', '!w-4'],
      sm: ['!h-8', '!w-8'],
      md: ['!h-16', '!w-16'],
      lg: ['!h-24', '!w-24'],
      em: ['!h-em', '!w-em'],
    },
  },
});

const SvgIcon = ({
  className,
  fill = 'currentColor',
  icon,
  size = 'sm',
  viewBox = '0 0 24 24',
}: SvgIconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));

  if (!icon) return <></>;

  return (
    <svg
      className={TAILWIND_VARIANTS({ className, size })}
      fill={fill}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <IconContent />
    </svg>
  );
};

export default React.memo(SvgIcon);

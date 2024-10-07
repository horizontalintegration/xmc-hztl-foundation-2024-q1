// Global
import { sendGTMEvent } from '@next/third-parties/google';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { GtmEvent } from 'lib/utils/gtm-utils';

// Local
import { SvgIcon } from 'helpers/SvgIcon';
import {
  CtaElements,
  CtaIconAlignments,
  CtaIcons,
  CtaStyleProperties,
  CtaVariants,
  CtaVisibility,
} from 'lib/utils/style-param-utils/modules/ctas';

import { StyleParamRecord } from 'lib/utils/style-param-utils';

export type CtaProps = {
  ctaStyle?: StyleParamRecord<CtaElements, CtaStyleProperties>;
  ctaIcon?: CtaIcons;
  ctaIconAlignment?: CtaIconAlignments;
  ctaVariant?: CtaVariants;
  ctaVisibility?: CtaVisibility;
};

export type ButtonWrapperProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CtaProps &
  React.PropsWithChildren & {
    className?: string;
    gtmEvent?: GtmEvent;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text?: string;
  };

export const ctaTailwindVariant = tv({
  slots: {
    base: [],
    icon: [],
  },
  variants: {
    iconAlignment: {
      left: {
        base: ['flex-row-reverse'],
      },
      right: {
        base: ['flex-row'],
      },
    },
    variant: {
      link: {
        base: [
          'border-0',
          'h-fit',
          'w-fit',
          'font-bold',
          // 'hover:text-theme-darkblue',
          // 'active:text-theme-lightteal',
          // 'active:underline',
          'focus:outline-theme-darkblue',
        ],
      },
      primary: {
        base: [
          'bg-black',
          'flex',
          'font-bold',
          'font-modern',
          'gap-x-2',
          'items-center',
          'justify-center',
          'leading-normal',
          'px-4',
          'py-3',
          'rounded',
          'text-center',
          'text-white',
          'active:bg-theme-grey',
          'active:text-white',
          'disabled:bg-theme-offwhite',
          'disabled:no-underline',
          'disabled:text-white',
          'focus:-outline-offset-4',
          'focus:bg-theme-lightgrey',
          'focus:outline-4',
          'focus:outline-black',
          'focus:outline',
          'focus:text-black',
          'hover:bg-theme-darkgrey',
          'hover:text-white',
          'hover:no-underline',
        ],
      },
      secondary: {
        base: [
          'bg-white',
          'border-black',
          'border',
          'flex',
          'font-bold',
          'font-modern',
          'gap-x-2',
          'items-center',
          'justify-center',
          'leading-normal',
          'px-4',
          'py-3',
          'rounded',
          'text-black',
          'text-center',
          'active:bg-theme-grey',
          'active:border-theme-darkgrey',
          'active:text-white',
          'disabled:bg-theme-offwhite',
          'disabled:no-underline',
          'disabled:text-white',
          'focus:-outline-offset-4',
          'focus:bg-theme-lightgrey',
          'focus:outline-4',
          'focus:outline-black',
          'focus:outline',
          'focus:text-black',
          'hover:bg-theme-darkgrey',
          'hover:text-white',
          'hover:border-theme-darkgrey',
          'hover:no-underline',
        ],
      },
      tertiary: {
        base: ['bg-white', 'text-black', 'focus:bg-white', 'hover:bg-mild-gray'],
      },
    },
    visibility: {
      visible: {
        base: [],
      },
      hidden: {
        base: ['hidden'],
      },
    },
  },
});

const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  (
    { className, gtmEvent, onClick, text, children, ...props }: ButtonWrapperProps,
    ref
  ): JSX.Element | null => {
    const ctaIcon = props.ctaIcon ?? props.ctaStyle?.ctaIcon;
    const ctaVariant = props.ctaVariant ?? props.ctaStyle?.ctaVariant ?? 'primary';
    const ctaIconAlignment = props.ctaIconAlignment ?? props.ctaStyle?.ctaIconAlignment ?? 'right';

    const { base, icon } = ctaTailwindVariant({
      className: className,
      iconAlignment: ctaIconAlignment,
      variant: ctaVariant,
    });

    /*
     * EVENT HANDLERS
     */

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (gtmEvent) {
        sendGTMEvent({ ...gtmEvent });
      }

      if (onClick) {
        onClick(e);
      }
    };

    /*
     * RENDERING
     */

    // If no content is present, don't print
    if (!text && !children) return <></>;

    return (
      <button className={base()} onClick={handleOnClick} ref={ref}>
        {text}
        {children}
        {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />}
      </button>
    );
  }
);

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;

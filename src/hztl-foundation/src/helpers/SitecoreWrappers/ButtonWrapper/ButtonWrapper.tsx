// Global
import { sendGTMEvent } from '@next/third-parties/google';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { GtmEvent } from 'lib/utils/gtm-utils';

// Local
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { CtaIconPositions, CtaIcons, CtaVariants } from 'lib/utils/style-param-utils';

import { StyleParamRecord } from 'lib/utils/style-param-utils';

export type CtaProps = {
  ctaStyle?: StyleParamRecord;
  ctaIcon?: CtaIcons;
  ctaIconAlignment?: CtaIconPositions;
  ctaVariant?: CtaVariants;
};

export type ButtonWrapperProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CtaProps & {
    className?: string;
    gtmEvent?: GtmEvent;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
  };

export const ctaTailwindVariant = tv({
  slots: {
    base: [
      'bg-black',
      'flex',
      'font-modern',
      'gap-xxs',
      'items-center',
      'justify-center',
      'leading-normal',
      'py-4',
      'px-8',
      'rounded',
      'text-white',
      'active:bg-gray',
      'active:text-white',
      'disabled:bg-mild-gray',
      'disabled:text-dark-gray',
      'focus:bg-light-gray',
      'focus:outline',
      'focus:outline-4',
      'focus:outline-black',
      'focus:-outline-offset-4',
      'focus:!text-black',
      'hover:bg-dark-gray',
    ],
    icon: [],
  },
  variants: {
    iconAlignment: {
      left: {
        icon: ['flex-row-reverse'],
      },
      right: {
        icon: ['flex-row'],
      },
    },
    variant: {
      link: {
        base: [
          'bg-transparent',
          'text-dark-blue',
          'active:bg-transparent',
          'active:text-light-green',
          'disabled:bg-transparent',
          'disabled:text-mild-gray',
          'disabled:no-underline',
          'focus:bg-transparent',
          'hover:bg-transparent',
          'hover:underline',
        ],
      },
      primary: {
        base: [],
      },
      secondary: {
        base: [
          'bg-white',
          'border',
          'border-black',
          'text-black',
          'active:border-gray',
          'disabled:border-none',
          'hover:bg-black',
          'hover:text-white',
        ],
      },
      tertiary: {
        base: ['bg-white', 'text-black', 'focus:bg-white', 'hover:bg-mild-gray'],
      },
    },
  },
});

const ButtonWrapper = forwardRef<HTMLButtonElement>(
  (
    { className, gtmEvent, onClick, text, ...props }: ButtonWrapperProps,
    ref
  ): JSX.Element | null => {
    const ctaIcon = props.ctaIcon ?? props.ctaStyle?.['cta-icon'].value;
    const ctaVariant = props.ctaVariant ?? props.ctaStyle?.['cta-variant'].value ?? 'primary';
    const ctaIconAlignment =
      props.ctaIconAlignment ?? props.ctaStyle?.['cta-icon-alignment'].value ?? 'right';

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
    if (!text) return <></>;

    return (
      <button className={base()} onClick={handleOnClick} ref={ref} {...props}>
        {text}
        {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />}
      </button>
    );
  }
);

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;

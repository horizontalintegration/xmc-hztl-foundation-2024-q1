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
} from 'lib/utils/style-param-utils/modules/ctas';

import { StyleParamRecord } from 'lib/utils/style-param-utils';

export type CtaProps = {
  ctaStyle?: StyleParamRecord<CtaElements, CtaStyleProperties>;
  ctaIcon?: CtaIcons;
  ctaIconAlignment?: CtaIconAlignments;
  ctaVariant?: CtaVariants;
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
        base: [],
      },
      primary: {
        base: [
          'bg-black',
          'flex',
          'font-bold',
          'font-modern',
          'gap-xxs',
          'items-center',
          'justify-center',
          'leading-normal',
          'px-8',
          'py-3',
          'rounded',
          'text-center',
          'text-white',
          'active:!bg-light-gray',
          'active:!outline-black',
          'active:!text-black',
          'disabled:bg-mild-gray',
          'disabled:no-underline',
          'disabled:text-dark-gray',
          'focus:-outline-offset-4',
          'focus:bg-gray',
          'focus:outline-4',
          'focus:outline-gray',
          'focus:outline',
          'focus:text-white',
          'hover:!bg-dark-gray',
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
          'gap-xxs',
          'items-center',
          'justify-center',
          'leading-normal',
          'px-8',
          'py-3',
          'rounded',
          'text-black',
          'text-center',
          'active:!bg-light-gray',
          'active:!outline-black',
          'active:!text-black',
          'disabled:bg-mild-gray',
          'disabled:no-underline',
          'disabled:text-dark-gray',
          'focus:-outline-offset-4',
          'focus:bg-gray',
          'focus:outline-4',
          'focus:outline-gray',
          'focus:outline',
          'focus:text-white',
          'hover:!bg-dark-gray',
          'hover:!text-white',
          'hover:no-underline',
        ],
      },
      tertiary: {
        base: ['bg-white', 'text-black', 'focus:bg-white', 'hover:bg-mild-gray'],
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

// Global
import { sendGTMEvent } from '@next/third-parties/google';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { GtmEvent } from 'lib/utils/gtm-utils';

// Local
import { SvgIcon } from 'helpers/SvgIconWrapper';
// import { CTAIconInterface } from 'interfaces/CTAInterface';
import { CtaIconPositions, CtaIcons, CtaVariants } from 'lib/utils/style-param-utils';

export type CtaProps = {
  ctaIcon?: CtaIcons;
  ctaIconAlignment?: CtaIconPositions;
  ctaVariant?: CtaVariants;
};

export type ButtonWrapperProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CtaProps & {
    className?: string;
    gtmEvent?: GtmEvent;
    id?: string;
    isDisabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    text: string;
    title?: string;
    type?: string;
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
    {
      className,
      gtmEvent,
      ctaVariant = 'primary',
      ctaIcon,
      ctaIconAlignment = 'right',
      id,
      isDisabled,
      onClick,

      text,
      title,
      type = 'button',
      ...props
    }: ButtonWrapperProps,
    ref
  ): JSX.Element | null => {
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
      <button
        aria-label={props['aria-label'] ? props['aria-label'] : text}
        className={base()}
        disabled={isDisabled}
        id={id}
        onClick={handleOnClick}
        ref={ref}
        title={title || text}
        type={type}
      >
        {text}
        {ctaIcon && <SvgIcon className={icon()} icon={ctaIcon} size="xs" />}
      </button>
    );
  }
);

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;

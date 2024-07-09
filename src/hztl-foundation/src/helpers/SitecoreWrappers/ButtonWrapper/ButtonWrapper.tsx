// Global
import { sendGTMEvent } from '@next/third-parties/google';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { GtmEvent } from 'lib/utils/gtm-utils';

// Local
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { CTAIconInterface } from 'interfaces/CTAInterface';

type ButtonVariant = 'link' | 'primary' | 'secondary' | 'tertiary';

type IconAlignment = 'left' | 'right' | undefined;

export type ButtonWrapperProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  gtmEvent?: GtmEvent;
  iconAlignment?: IconAlignment;
  iconField?: CTAIconInterface;
  id?: string;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  text: string;
  title?: string;
  type?: string;
};

const tailwindVariant = tv({
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
      iconAlignment = 'right',
      iconField,
      id,
      isDisabled,
      onClick,
      variant = 'primary',
      text,
      title,
      type = 'button',
      ...props
    }: ButtonWrapperProps,
    ref
  ): JSX.Element | null => {
    const { base, icon } = tailwindVariant({
      className: className,
      iconAlignment: iconAlignment,
      variant: variant,
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
        {iconField && <SvgIcon className={icon()} icon={iconField?.fields.Value.value} size="xs" />}
      </button>
    );
  }
);

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;

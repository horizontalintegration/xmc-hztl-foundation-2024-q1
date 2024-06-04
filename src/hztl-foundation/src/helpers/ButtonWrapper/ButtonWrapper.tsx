import React, { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { twMerge } from 'tailwind-merge';
import { GtmEvent } from 'lib/utils/gtm-utils';

interface RequiredButtonProps {
  id: string;
  title: string;
}

type IconAlignment = 'left' | 'right' | 'top' | 'bottom';

export interface ButtonWrapperProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'title'>,
    RequiredButtonProps,
    PropsWithChildren {
  icon?: ReactElement;
  iconAlignment?: IconAlignment;
  gtmEvent?: GtmEvent;
}

const ButtonWrapper = React.forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  ({ className, icon, iconAlignment = 'right', gtmEvent, children, ...props }, ref) => {
    const buttonAlignmentStyles: Record<IconAlignment, string> = {
      left: 'flex-row-reverse',
      right: 'flex-row',
      top: 'flex-col-reverse',
      bottom: 'flex-col',
    };

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick && props.onClick(e);

      if (gtmEvent) {
        const gtmEventInner = {
          ...gtmEvent,
        };

        sendGTMEvent(gtmEventInner);
      }
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          'flex items-center justify-center font-modern',
          buttonAlignmentStyles[iconAlignment],
          className
        )}
        type="button"
        {...props}
        onClick={handleOnClick}
      >
        {children}
        {icon && <i>{icon}</i>}
      </button>
    );
  }
);

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;

import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { twMerge } from 'tailwind-merge';
import { GtmEvent } from 'lib/utils/gtm-utils';
import {
  CTAAlignmentInterface,
  CTAButtonWrapperInterface,
  CTAIconInterface,
  CTAStyleInterface,
  CTATextInterface,
  CTATitleInterface,
} from 'src/interfaces/CTAInterface';
import { SvgIcon } from 'helpers/SvgIconWrapper';

interface RequiredButtonProps {
  id?: string;
  title?: string;
}

type IconAlignment = 'left' | 'right' | 'top' | 'bottom';

export interface ButtonWrapperProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'title'>,
    RequiredButtonProps,
    CTAButtonWrapperInterface,
    PropsWithChildren {
  gtmEvent?: GtmEvent;
}

const ButtonWrapper = React.forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  ({ className, ctaType, gtmEvent, ...props }, ref) => {
    const buttonAlignmentStyles: Record<IconAlignment, string> = {
      left: 'flex-row-reverse',
      right: 'flex-row',
      top: 'flex-col-reverse',
      bottom: 'flex-col',
    };
    if (!props?.fields) return <></>;
    const {
      cta1Icon,
      cta1IconAlignment,
      cta1Style,
      cta1Text,
      cta1Title,
      cta2Icon,
      cta2IconAlignment,
      cta2Style,
      cta2Text,
      cta2Title,
    } = props?.fields;

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick && props.onClick(e);

      if (gtmEvent) {
        const gtmEventInner = {
          ...gtmEvent,
        };

        sendGTMEvent(gtmEventInner);
      }
    };
    const buttonClasses = (style: string) =>
      `flex h-14 gap-xxs items-center justify-center px-16 py-xs rounded-md text-center font-modern font-bold leading-normal text-base ${
        style === 'secondary' ? 'border-1 border-gray text-gray' : 'bg-gray text-white'
      }`;
    const renderTextButton = (
      icon?: CTAIconInterface,
      iconAlignment?: CTAAlignmentInterface,
      style?: CTAStyleInterface,
      text?: CTATextInterface,
      title?: CTATitleInterface,
      handleOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    ) => {
      const styeValue = style?.fields.Value.value || '';
      const iconAlignmentValue = iconAlignment?.fields.Value.value;
      return (
        text?.value && (
          <button
            title={title?.value}
            ref={ref}
            className={twMerge(
              iconAlignmentValue && buttonAlignmentStyles[iconAlignment?.fields.Value.value],
              buttonClasses(styeValue),
              className
            )}
            type={props.type || 'button'}
            {...props}
            onClick={handleOnClick}
          >
            {text.value}
            {icon?.fields.Value.value && (
              <SvgIcon
                icon={icon?.fields.Value.value}
                className={`${
                  styeValue === 'primary' ? '!stroke-white' : ' !stroke-black'
                } w-5 h-5`}
              />
            )}
          </button>
        )
      );
    };
    switch (ctaType) {
      case 'cta1Text':
        return renderTextButton(
          cta1Icon,
          cta1IconAlignment,
          cta1Style,
          cta1Text,
          cta1Title,
          handleOnClick
        );
      case 'cta2Text':
        return renderTextButton(
          cta2Icon,
          cta2IconAlignment,
          cta2Style,
          cta2Text,
          cta2Title,
          handleOnClick
        );
      default:
        return null;
    }
  }
);

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;

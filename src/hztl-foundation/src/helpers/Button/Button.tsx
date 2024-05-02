// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { MouseEventHandler, ReactElement } from 'react';
import { tv } from 'tailwind-variants';

type NativeAttrs = Omit<React.ButtonHTMLAttributes<undefined>, keyof Props>;

export type ButtonTags = 'a' | 'button';

export type ButtonTargets = '_blank' | '_self' | '_parent' | '_top' | undefined;

interface Props {
  disabled?: boolean;
  fitContent?: boolean;
  fullWidth?: boolean;
  href?: string;
  id?: string;
  label: string;
  loading?: boolean;
  onClick?: MouseEventHandler;
  srOnlyText?: string;
  tag?: ButtonTags;
  target?: ButtonTargets;
  title?: string;
}

export type ButtonProps = Props & NativeAttrs;

const tailwindVariants = tv({
  slots: {
    base: [
      'bg-slate-200',
      'inline-flex',
      'items-center',
      'justify-center',
      'p-4',
      'whitespace-nowrap',
      'disabled:cursor-not-allowed',
      'enabled:duration-150',
      'enabled:transition',
      'focus-visible:shadow-focus',
      'focus-visible:outline-0',
      'hover:bg-slate-400',
      'hover:ease-in',
    ],
    labelText: ['inline-flex', 'items-center', 'justify-center', 'relative', 'top-0'],
    screenReaderText: ['sr-only'],
  },
  variants: {
    fitContent: {
      true: {},
      false: { base: ['min-w-60'] },
    },
    fullWidth: {
      false: {},
      true: { base: ['min-w-full'] },
    },
  },
});

const Button = ({
  fitContent = true,
  disabled = false,
  fullWidth = false,
  href,
  id,
  label,
  onClick = (): void => undefined,
  srOnlyText,
  tag = 'button',
  target = '_self',
  title,
}: ButtonProps): ReactElement => {
  const { base, labelText, screenReaderText } = tailwindVariants({
    fitContent: fitContent,
    fullWidth: fullWidth,
  });

  const children = (
    <>
      <span className={screenReaderText()}>{srOnlyText || label}</span>
      <div className={labelText()} data-component="helpers/general/button">
        {label && <Text encode={false} field={{ value: label }} tag="span" />}
      </div>
    </>
  );

  return React.createElement(
    tag,
    {
      'aria-label': title ? title : label,
      className: base(),
      disabled,
      href: href?.length ? href?.toLocaleLowerCase() : undefined,
      id,
      onClick: (evt: React.MouseEvent<Element, MouseEvent>) => {
        onClick(evt);
      },
      target: tag === 'a' && target ? target : null,
      title,
    },
    children
  );
};

export default Button;

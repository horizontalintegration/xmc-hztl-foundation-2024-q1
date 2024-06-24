/* eslint-disable prettier/prettier */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  CTAAlignmentInterface,
  CTAButtonProps,
  CTAIconInterface,
  CTAStyleInterface,
  CTATextInterface,
  CTATitleInterface,
} from './ctaButtonInterface';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const CTAButtonWrapper: React.FC<CTAButtonProps> = ({ fields, ctaType, onClick }) => {
  const {
    cta1Icon,
    cta1IconAlignment,
    cta1Link,
    cta1Style,
    cta1Text,
    cta1Title,
    cta2Icon,
    cta2IconAlignment,
    cta2Link,
    cta2Style,
    cta2Text,
    cta2Title,
  } = fields;

  const buttonClasses = (style: string) =>
    `flex items-center justify-center px-16 py-3 rounded-[4px] text-center font-modern font-bold leading-normal text-base ${
      style === 'secondary'
        ? 'border-[1px] border-[#2F2D2E] text-[#2F2D2E]'
        : 'bg-[#2F2D2E] text-[#FFF]'
    }`;

  const renderLinkButton = (
    icon: CTAIconInterface,
    iconAlignment: CTAAlignmentInterface,
    link: LinkField,
    style: CTAStyleInterface,
    text: CTATextInterface,
    title: CTATitleInterface
  ) =>
    link?.value?.href && (
      <Link field={link} className={buttonClasses(style?.fields.Value.value)} title={title?.value}>
        {iconAlignment?.fields.Value.value === 'left' && (
          <SvgIcon icon={icon?.fields.Value.value} />
        )}
        {text.value}
        {iconAlignment?.fields.Value.value === 'right' && (
          <SvgIcon icon={icon?.fields.Value.value} />
        )}
      </Link>
    );

  const renderTextButton = (
    icon: CTAIconInterface,
    iconAlignment: CTAAlignmentInterface,
    style: CTAStyleInterface,
    text: CTATextInterface,
    onClick?: () => void
  ) =>
    text?.value && (
      <button onClick={onClick} className={buttonClasses(style?.fields.Value.value)}>
        {iconAlignment?.fields.Value.value === 'left' && (
          <SvgIcon icon={icon?.fields.Value.value} />
        )}
        {text.value}
        {iconAlignment?.fields.Value.value === 'right' && (
          <SvgIcon icon={icon?.fields.Value.value} />
        )}
      </button>
    );

  switch (ctaType) {
    case 'cta1Link':
      return renderLinkButton(
        cta1Icon,
        cta1IconAlignment,
        cta1Link,
        cta1Style,
        cta1Text,
        cta1Title
      );
    case 'cta2Link':
      return renderLinkButton(
        cta2Icon,
        cta2IconAlignment,
        cta2Link,
        cta2Style,
        cta2Text,
        cta2Title
      );
    case 'cta1Text':
      return renderTextButton(cta1Icon, cta1IconAlignment, cta1Style, cta1Text, onClick);
    case 'cta2Text':
      return renderTextButton(cta2Icon, cta2IconAlignment, cta2Style, cta2Text, onClick);
    default:
      return null;
  }
};

export default CTAButtonWrapper;


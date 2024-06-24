/* eslint-disable prettier/prettier */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { IconTypes } from 'helpers/SvgIconWrapper';

export interface CTAIconInterface {
  fields: {
    Value: {
      value: IconTypes;
    };
  };
}

export interface CTAAlignmentInterface {
  fields: {
    Value: {
      value: string;
    };
  };
}

export interface CTAStyleInterface {
  fields: {
    Value: {
      value: string;
    };
  };
}

export interface CTATextInterface {
  value: string;
}

export interface CTATitleInterface {
  value: string;
}

export interface CTAButtonInterface {
  cta1Icon: CTAIconInterface;
  cta1IconAlignment: CTAAlignmentInterface;
  cta1Link: LinkField;
  cta1Style: CTAStyleInterface;
  cta1Text: CTATextInterface;
  cta1Title: CTATitleInterface;
  cta2Icon: CTAIconInterface;
  cta2IconAlignment: CTAAlignmentInterface;
  cta2Link: LinkField;
  cta2Style: CTAStyleInterface;
  cta2Text: CTATextInterface;
  cta2Title: CTATitleInterface;
}
export interface CTAButtonProps {
  fields: CTAButtonInterface;
  ctaType: 'cta1Link' | 'cta2Link' | 'cta1Text' | 'cta2Text';
  onClick?: () => void;
}


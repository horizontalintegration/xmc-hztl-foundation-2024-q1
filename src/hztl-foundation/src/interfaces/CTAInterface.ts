/* eslint-disable prettier/prettier */
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { IconTypes } from 'helpers/SvgIconWrapper';

export interface CTAIconInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Value: {
      value: IconTypes;
    };
  };
}

export interface CTAAlignmentInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Value: {
      value: 'left' | 'right' | 'top' | 'bottom';
    };
  };
}

export interface CTAStyleInterface {
  id: string;
  url: string;
  name: string;
  displayName: string;
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

export interface CommonCTAInterface {
  cta1Icon?: CTAIconInterface;
  cta1IconAlignment?: CTAAlignmentInterface;
  cta1Style?: CTAStyleInterface;
  cta1Title?: CTATitleInterface;
  cta2Icon?: CTAIconInterface;
  cta2IconAlignment?: CTAAlignmentInterface;
  cta2Style?: CTAStyleInterface;
  cta2Title?: CTATitleInterface;
}

export interface CTAWrapperInterface {
  fields?: CommonCTAInterface & {
    cta1Link?: LinkField;
    cta2Link?: LinkField;
    cta1Text?: CTATextInterface;
    cta2Text?: CTATextInterface;
  };
  ctaType?: 'cta1Link' | 'cta2Link' | 'cta1Text' | 'cta2Text';
}

import { CtaVariants } from './style-param-utils/modules/ctas';

interface CtaStyle {
  ctaVariant?: CtaVariants;
}

const getCtaStyle = (ctaStyle: CtaStyle = {}, defaultVariant: CtaVariants) => {
  return {
    ...ctaStyle,
    ctaVariant: ctaStyle?.ctaVariant ?? defaultVariant,
  };
};

const getCtaClassName = (
  ctaVariant: string | undefined,
  linkStyle: () => string,
  primaryStyle: () => string,
  secondaryStyle: () => string,
  defaultStyle: () => string
): string => {
  switch (ctaVariant) {
    case 'link':
      return linkStyle();
    case 'primary':
      return primaryStyle();
    case 'secondary':
      return secondaryStyle();
    default:
      return defaultStyle(); // Use the provided default style
  }
};

export { getCtaStyle, getCtaClassName };

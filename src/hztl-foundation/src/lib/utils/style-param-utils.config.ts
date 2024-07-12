export const CtaIconAlignmentValues = ['left', 'right'] as const;
export type CtaIconAlignments = (typeof CtaIconAlignmentValues)[number];

export const CtaIconValues = ['arrow-right', 'download'] as const;
export type CtaIcons = (typeof CtaIconValues)[number];

export const CtaVariantValues = ['primary', 'secondary', 'tertiary', 'link'] as const;
export type CtaVariants = (typeof CtaVariantValues)[number];

export const StylePropertyValues = ['ctaVariant', 'ctaIcon', 'ctaIconAlignment'] as const;
export type StyleProperties = (typeof StylePropertyValues)[number];

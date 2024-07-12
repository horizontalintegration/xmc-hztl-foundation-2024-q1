// CTA
export type CtaElements = 'cta1' | 'cta2';

export const CtaStylePropertyValues = ['ctaVariant', 'ctaIcon', 'ctaIconAlignment'] as const;
export const CtaVariantValues = ['primary', 'secondary', 'tertiary', 'link'] as const;
export const CtaIconValues = ['arrow-right', 'download'] as const;
export const CtaIconAlignmentValues = ['left', 'right'] as const;

export type CtaStyleProperties = (typeof CtaStylePropertyValues)[number];
export type CtaVariants = (typeof CtaVariantValues)[number];
export type CtaIcons = (typeof CtaIconValues)[number];
export type CtaIconAlignments = (typeof CtaIconAlignmentValues)[number];

export type GetCtaValueType<TStyleProp extends StyleProperties> =
  TStyleProp extends 'ctaIconAlignment'
    ? CtaIconAlignments
    : TStyleProp extends 'ctaIcon'
      ? CtaIcons
      : TStyleProp extends 'ctaVariant'
        ? CtaVariants
        : string;

// Card List
export type CardListElements = 'cards';
export const CardListStylePropertyValues = ['cardsPerRow'] as const;
export const CardListCardsPerRowValues = ['1', '2', '3', '4'] as const;

export type CardListStyleProperties = (typeof CardListStylePropertyValues)[number];
export type CardListCardsPerRows = (typeof CardListCardsPerRowValues)[number];

export type GetCardListValueType<TStyleProp extends StyleProperties> =
  TStyleProp extends 'cardsPerRow' ? CardListCardsPerRows : never;

// General
export const StylePropertyValues = [
  ...CtaStylePropertyValues,
  ...CardListStylePropertyValues,
] as const;

export type StyleProperties = (typeof StylePropertyValues)[number];

export type DefaultElement = 'default';
export type ValidElements = CtaElements | CardListElements | DefaultElement;

export type GetStyleProperties<TElement extends ValidElements> = TElement extends CtaElements
  ? CtaStyleProperties
  : TElement extends CardListElements
    ? CardListStyleProperties
    : StyleProperties;

export type GetValueType<
  TElement extends ValidElements,
  TStyleProp extends StyleProperties,
> = TElement extends CtaElements
  ? GetCtaValueType<TStyleProp>
  : TElement extends CardListElements
    ? GetCardListValueType<TStyleProp>
    : string;

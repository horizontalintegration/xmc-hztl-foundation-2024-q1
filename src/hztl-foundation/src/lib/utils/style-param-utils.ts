import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

const CtaIconPositionValues = ['left', 'right'] as const;
export type CtaIconPositions = (typeof CtaIconPositionValues)[number];

const CtaIconValue = ['arrow-right', 'download'] as const;
export type CtaIcons = (typeof CtaIconValue)[number];

const CtaVariantValues = ['primary', 'secondary', 'tertiary', 'link'] as const;
export type CtaVariants = (typeof CtaVariantValues)[number];

const StyleParamTypeArray = ['cta-variant', 'cta-icon', 'cta-icon-alignment'] as const;

export type StyleParamType = (typeof StyleParamTypeArray)[number];

type DefaultElement = 'default';

type GetValueType<ParamType extends StyleParamType> = ParamType extends 'cta-icon-alignment'
  ? CtaIconPositions
  : ParamType extends 'cta-icon'
    ? CtaIcons
    : ParamType extends 'cta-variant'
      ? CtaVariants
      : string;

export type StyleParamValue<
  TElement extends string,
  ParamType extends StyleParamType = StyleParamType,
> = {
  rawValue: string;
  type: ParamType;
  targetElement: TElement | DefaultElement;
  value: GetValueType<ParamType>;
};

export type StyleParamRecord<TElement extends string = string> = {
  [Property in StyleParamType]: StyleParamValue<TElement, Property>;
};

export type ComponentStyleParams<TElement extends string> = {
  [Property in TElement | DefaultElement]?: StyleParamRecord<TElement>;
};

export function parseStyleParams<TElement extends string = DefaultElement>(
  params: ComponentParams,
  validElements?: TElement[]
): ComponentStyleParams<TElement> {
  const selectedStylesString = params.Styles ?? '';

  const result: ComponentStyleParams<TElement> = {};

  selectedStylesString.split(' ').forEach((rawValue) => {
    const split = rawValue.split(':');

    const hasTargetElement = split.length === 3;

    const targetElement: TElement | DefaultElement = hasTargetElement
      ? (split[0] as TElement)
      : 'default';

    const type = hasTargetElement ? (split[1] as StyleParamType) : (split[0] as StyleParamType);

    const value = hasTargetElement ? split[2] : split[1];

    if (!StyleParamTypeArray.includes(type)) {
      console.warn(`Unknown type ${type}, expected one of ${JSON.stringify(StyleParamTypeArray)}`);
    }

    if (validElements && targetElement !== 'default' && !validElements.includes(targetElement)) {
      console.warn(
        `Unknown target element ${targetElement}, expected one of ${JSON.stringify(validElements)}`
      );
    }

    const paramValue: StyleParamValue<TElement> = {
      rawValue: rawValue,
      type: type,
      targetElement: targetElement,
      value: value as GetValueType<typeof type>,
    };

    result[targetElement] = { ...result[targetElement], [type]: paramValue };
  });

  return result;
}

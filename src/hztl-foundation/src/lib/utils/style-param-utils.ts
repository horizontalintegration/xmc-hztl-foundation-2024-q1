import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  StyleProperties,
  StylePropertyValues,
  GetValueType,
  GetStyleProperties,
  ValidElements,
  DefaultElement,
} from './style-param-utils.config';

/**
 * This function parses and looks for styles matching the format `[element?]:[styleType]:[value]`.  `element` is optional, 
 * and will be set as 'default' if missing.
 * @example
 *    // Assuming you have styles coming back from sitecore like
 *    props.params.Styles === 'cta1:ctaVariant:primary cta1:ctaIcon:arrow-right cta2:ctaVariant:secondary cardsPerRow:1'
 *    // Parse the styles
 *    const styles = parseStyleParams(props.params, ['cta1', 'cta2']);
 *    // Get data
 *    const cardsPerRow = styles.default.cardsPerRow;
 *    // In the component body:
 *    <LinkWrapper field={props.fields?.cta1Link}
              ctaStyle={styles.cta1}
              // or
              ctaVariant={styles.cta1.ctaVariant}
              ctaIcon={styles.cta1.ctaIcon}
              ctaIconAlignment={styles.cta1.ctaIconAlignment}
            />
      <LinkWrapper field={props.fields?.cta2Link}
              ctaStyle={styles.cta2}
              // or
              ctaVariant={styles.cta2.ctaVariant}
              ctaIcon={styles.cta2.ctaIcon}
              ctaIconAlignment={styles.cta2.ctaIconAlignment}
            />
 * @param params The rendering params
 * @param validElements The valid elements to look for in the styles, e.g. for the case above you would pass ['cta1', 'cta2']
 * @returns an object that encapsultes the styles in this rendering.
 * e.g. with the above style, you can use `result.cta1.ctaVariant` and would get the correct typing.
 */
export function parseStyleParams<TElement extends ValidElements = DefaultElement>(
  params: ComponentParams | undefined,
  validElements?: TElement[]
): ComponentStyleParams<TElement> {
  const selectedStylesString = params?.Styles?.trim() ?? '';

  const result: ComponentStyleParams<TElement> = {};

  selectedStylesString.split(' ').forEach((rawValue) => {
    const split = rawValue.split(':');

    // This is not one of our styles
    if (split.length < 2) {
      return;
    }
    const hasTargetElement = split.length === 3;

    const targetElement: TElement | DefaultElement = hasTargetElement
      ? (split[0] as TElement)
      : 'default';

    const styleType = hasTargetElement
      ? (split[1] as StyleProperties)
      : (split[0] as StyleProperties);

    const value = hasTargetElement ? split[2] : split[1];

    if (!StylePropertyValues.includes(styleType)) {
      console.warn(
        `Unknown styleType ${styleType}, expected one of ${JSON.stringify(StylePropertyValues)}`
      );
    }

    if (validElements && targetElement !== 'default' && !validElements.includes(targetElement)) {
      console.warn(
        `Unknown target element ${targetElement}, expected one of ${JSON.stringify(validElements)}`
      );
    }

    const typedValue = value as GetValueType<TElement, typeof styleType>;
    result[targetElement] = {
      ...result[targetElement],
      [styleType]: typedValue,
    };
  });

  return result;
}

/** Utility "function" to dynamically get the value type based on style type */

export type StyleParamRecord<TElement extends ValidElements, TStyleProp extends StyleProperties> = {
  [P in TStyleProp]?: GetValueType<TElement, P>;
};

export type GetStyleParamRecord<TElement extends ValidElements> = StyleParamRecord<
  TElement,
  GetStyleProperties<TElement>
>;

export type ComponentStyleParams<TElement extends ValidElements = DefaultElement> = {
  [P in TElement | DefaultElement]?: GetStyleParamRecord<P>;
};

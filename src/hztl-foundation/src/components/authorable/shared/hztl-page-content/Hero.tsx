// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { CtaVariants } from 'lib/utils/style-param-utils/modules/ctas';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: [
      'component',
      'flex',
      'flex-col-reverse',
      'items-center',
      'justify-center',
      'min-h-[50vh]',
      'my-8',
      'md:flex-row',
    ],
    ctaPrimary: ['px-8'],
    ctaSecondary: ['px-8'],
    ctaLink: ['text-theme-darkblue', 'text-base'],
    columnA: ['flex', 'items-center', 'justify-center', 'w-full', 'md:w-1/2'],
    columnB: ['w-full', 'md:w-1/2'],
    contentContainer: ['max-w-[472px]', 'p-6', 'w-fit'],
    ctaContainer: [
      'flex',
      'flex-wrap',
      'gap-6',
      'justify-center',
      'items-center',
      'md:justify-normal',
    ],
    description: ['mb-6', 'text-base'],
    heading: ['font-bold', 'font-modern', 'mb-6', 'text-5xl', 'md:text-4xl'],
  },
});

export type HeroProps = ComponentProps & HztlPageContent.Hero;

const Hero = (props: HeroProps): JSX.Element => {
  const { cta1Link, cta2Link, Description, Heading, Image } = props?.fields || {};
  const { GridParameters } = props?.params || {};

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  /*
   * Rendering
   */

  const modifiedTailwindVariants = tv({
    extend: TAILWIND_VARIANTS,
    slots: {
      base: GridParameters,
    },
  });

  const {
    base,
    columnA,
    columnB,
    contentContainer,
    ctaContainer,
    ctaPrimary,
    ctaSecondary,
    ctaLink,
    description,
    heading,
  } = modifiedTailwindVariants();

  /**
   * Function to get the CTA style.
   * If ctaStyle is undefined, it defaults to the provided defaultVariant.
   *
   * @param {CtaStyle} ctaStyle - The CTA style object.
   * @param {string} defaultVariant - The default variant to use if ctaStyle is undefined.
   * @returns {object} - The CTA style object with the appropriate variant.
   */

  interface CtaStyle {
    ctaVariant?: CtaVariants;
  }

  const getCtaStyle = (ctaStyle: CtaStyle = {}, defaultVariant: CtaVariants) => {
    return {
      ...ctaStyle,
      ctaVariant: ctaStyle?.ctaVariant ?? defaultVariant,
    };
  };

  return (
    <section className={base()} data-component="authorable/shared/hztml-page-content/hero">
      <div className={columnA()}>
        <div className={contentContainer()}>
          <PlainTextWrapper className={heading()} field={Heading} tag="h1" />
          <RichTextWrapper className={description()} field={Description} tag="div" />
          <div className={ctaContainer()}>
            <LinkWrapper
              className={styles.cta1?.ctaVariant === 'link' ? ctaLink() : ctaPrimary()}
              ctaStyle={getCtaStyle(styles.cta1, 'primary')}
              field={cta1Link}
              suppressNewTabIcon={true}
            />
            <LinkWrapper
              className={styles.cta2?.ctaVariant === 'link' ? ctaLink() : ctaSecondary()}
              ctaStyle={getCtaStyle(styles.cta2, 'secondary')}
              suppressNewTabIcon={true}
              field={cta2Link}
            />
          </div>
        </div>
      </div>
      <div className={columnB()}>
        <ImageWrapper field={Image} />
      </div>
    </section>
  );
};

export const Default = withStandardComponentWrapper(Hero);

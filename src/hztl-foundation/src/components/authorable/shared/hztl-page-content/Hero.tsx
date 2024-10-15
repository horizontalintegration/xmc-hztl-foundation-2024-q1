// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { getCtaStyle, getCtaClassName } from 'lib/utils/cta-utils';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'flex', 'flex-col-reverse', 'items-center', 'md:flex-row'],
    ctaPrimary: ['px-8'],
    ctaSecondary: ['px-8'],
    ctaLink: ['text-theme-darkblue', 'text-base'],
    columnA: ['flex', 'w-full', 'md:w-1/2'],
    columnB: ['w-full', 'md:w-1/2'],
    contentContainer: ['md:max-w-lg', 'p-4', 'w-full'],
    ctaContainer: ['flex', 'flex-wrap', 'gap-6', 'md:justify-normal'],
    description: ['mb-6', 'text-base'],
    heading: ['font-bold', 'font-modern', 'mb-6', 'text-5xl', 'md:text-4xl'],
  },
});

export type HeroProps = ComponentProps & HztlPageContent.Hero;

const Hero = (props: HeroProps): JSX.Element => {
  const { cta1Link, cta2Link, Description, Heading, Image } = props?.fields || {};

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);
  console.log('styles', styles);
  console.log('styles.cta2?.ctaVariant', styles.cta2?.ctaVariant);
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
  } = TAILWIND_VARIANTS();

  return (
    <section className={base()} data-component="authorable/shared/hztml-page-content/hero">
      <div className={columnA()}>
        <div className={contentContainer()}>
          <PlainTextWrapper className={heading()} field={Heading} tag="h1" />
          <RichTextWrapper className={description()} field={Description} tag="div" />
          <div className={ctaContainer()}>
            <LinkWrapper
              className={getCtaClassName(
                styles.cta1?.ctaVariant,
                ctaLink,
                ctaPrimary,
                ctaSecondary,
                ctaPrimary
              )}
              ctaStyle={getCtaStyle(styles.cta1, 'primary')}
              field={cta1Link}
              suppressNewTabIcon={true}
            />
            <LinkWrapper
              className={getCtaClassName(
                styles.cta2?.ctaVariant,
                ctaLink,
                ctaPrimary,
                ctaSecondary,
                ctaSecondary
              )}
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

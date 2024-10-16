// Global
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { getCtaStyle } from 'lib/utils/cta-utils';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

const TAILWIND_VARIANTS = tv({
  defaultVariants: {
    style: 'primary',
  },
  slots: {
    base: ['component', 'flex', 'flex-col-reverse', 'items-center', 'md:flex-row'],
    cta: [],
    columnA: ['flex', 'w-full', 'md:w-1/2'],
    columnB: ['w-full', 'md:w-1/2'],
    contentContainer: ['md:max-w-lg', 'p-4', 'w-full'],
    ctaContainer: ['flex', 'flex-wrap', 'gap-6', 'md:justify-normal'],
    description: ['mb-6', 'text-base'],
    heading: ['font-bold', 'font-modern', 'mb-6', 'text-5xl', 'md:text-4xl'],
  },
  variants: {
    style: {
      link: {
        cta: ['text-base', 'text-theme-darkblue'],
      },
      primary: {
        cta: ['px-8'],
      },
      secondary: {
        cta: ['px-8'],
      },
      tertiary: {
        cta: ['px-8'],
      },
    },
  },
});

export type HeroProps = ComponentProps & HztlPageContent.Hero;

const Hero = (props: HeroProps): JSX.Element => {
  const { cta1Link, cta2Link, Description, Heading, Image } = props?.fields || {};

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  const { base, cta, columnA, columnB, contentContainer, ctaContainer, description, heading } =
    TAILWIND_VARIANTS();

  return (
    <section className={base()} data-component="authorable/shared/hztml-page-content/hero">
      <div className={columnA()}>
        <div className={contentContainer()}>
          <PlainTextWrapper className={heading()} field={Heading} tag="h1" />
          <RichTextWrapper className={description()} field={Description} tag="div" />
          <div className={ctaContainer()}>
            <LinkWrapper
              className={cta({ style: styles.cta1?.ctaVariant })}
              ctaStyle={getCtaStyle(styles.cta1, 'primary')}
              field={cta1Link}
              suppressNewTabIcon={true}
            />
            <LinkWrapper
              className={cta({ style: styles.cta2?.ctaVariant })}
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

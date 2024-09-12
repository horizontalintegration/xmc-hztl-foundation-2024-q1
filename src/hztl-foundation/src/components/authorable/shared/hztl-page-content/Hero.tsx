// Global
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Helpers
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

// Types
export type HeroProps = ComponentProps & HztlPageContent.Hero;

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: 'component hero my-ml min-h-[50vh] flex flex-col-reverse md:flex-row justify-center items-center gap-[57px]',
    wrapper: 'w-full md:w-1/2 flex items-center justify-center',
    content: 'max-w-[472px] w-fit px-s md:py-ml',
    heading: 'font-modern text-xl font-bold mb-6',
    description: 'text-gray text-base my-spacing-spacing-5 leading-normal',
    ctaWrapper: 'flex gap-spacing-spacing-4 flex-wrap justify-center md:justify-normal',
    imageWrapper: 'w-full md:w-1/2',
  },
});

const Hero = (props: HeroProps): JSX.Element => {
  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  const { base, wrapper, content, heading, description, ctaWrapper, imageWrapper } =
    tailwindVariants();

  /*
   * Rendering
   */

  if (!props?.fields) {
    return <></>;
  }

  return (
    <section className={base()}>
      <div className={wrapper()}>
        <div className={content()}>
          <PlainTextWrapper tag="h2" className={heading()} field={props.fields?.Heading} />
          <RichTextWrapper tag="div" className={description()} field={props.fields?.Description} />
          <div className={ctaWrapper()}>
            <LinkWrapper
              field={props.fields?.cta1Link}
              suppressNewTabIcon={true}
              ctaStyle={styles.cta1}
            />
            <LinkWrapper
              field={props.fields?.cta2Link}
              suppressNewTabIcon={true}
              ctaStyle={styles.cta2}
            />
          </div>
        </div>
      </div>
      <div className={imageWrapper()}>
        <ImageWrapper field={props.fields?.Image} />
      </div>
    </section>
  );
};

export const Default = withStandardComponentWrapper(Hero);

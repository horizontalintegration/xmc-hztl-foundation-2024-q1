// Global
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { CtaVariants } from 'lib/utils/style-param-utils/modules/ctas';

// Local
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';

const TAILWIND_VARIANTS = tv({
  slots: {
    content: ['slide-content-inner', 'flex', 'items-center', 'justify-start'],
    descriptionText: ['mb-4', 'text-base', 'text-theme-black', 'sm:text-lg'],
    ctaButtons: ['flex', 'flex-col', 'gap-3', 'items-center', 'lg:flex-row'],
    ctaLink: ['text-base', 'text-theme-darkblue'],
    ctaPrimary: ['px-4'],
    ctaSecondary: ['px-4'],
    heading: [
      'capitalize',
      'font-bold',
      'mb-4',
      'text-2xl',
      'lg:text-4xl',
      'lg:leading-[48px]',
      'text-theme-black',
    ],
    imageWrapper: ['h-full', 'object-cover', 'w-full'],
    slide: ['flex', 'items-center', 'justify-center', 'min-h-125'],
    slideContent: [
      'slide-content',
      'absolute',
      'max-w-[70%]',
      'z-10',
      'lg:box-border',
      'lg:left-[10%]',
      'lg:max-w-[70%]',
      'lg:top-1/2 ',
      'lg:transform',
      'lg:-translate-y-1/2',
      'lg:p-5',
      'lg:text-left',
      'xl:max-w-[50%]',
    ],
    slideMedia: [
      'slide-media',
      'absolute',
      'bg-center',
      'bg-cover',
      'h-full',
      'left-0',
      'top-0',
      'w-full',
      'lg:max-h-125',
    ],
    wrapper: ['bg-neutral-50', 'p-4', 'relative', 'text-black', 'lg:p-6'],
  },
});

export type CarouselItemProps = ComponentProps &
  HztlPageContent.CarouselItem & { componentName?: string; dataSource?: string; uid: string };

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  const { description, image, primaryCTA, secondaryCTA, title } = props?.fields || {};

  /*
   * Rendering
   */

  if (!props?.fields) {
    return <></>;
  }

  const {
    content,
    ctaPrimary,
    ctaSecondary,
    ctaButtons,
    ctaLink,
    descriptionText,
    heading,
    imageWrapper,
    slide,
    slideContent,
    slideMedia,
    wrapper,
  } = TAILWIND_VARIANTS();

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

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
    <>
      <SplideSlide>
        <div className={slide()}>
          <div className={slideContent()}>
            <div className={content()}>
              <div className={wrapper()}>
                <PlainTextWrapper className={heading()} field={title} tag="h2" />
                {description && (
                  <RichTextWrapper className={descriptionText()} field={description} />
                )}
                {primaryCTA && (
                  <div className={ctaButtons()}>
                    <LinkWrapper
                      aria-label={primaryCTA?.value.text}
                      className={styles.cta1?.ctaVariant === 'link' ? ctaLink() : ctaPrimary()}
                      ctaStyle={getCtaStyle(styles.cta1, 'primary')}
                      field={primaryCTA}
                    ></LinkWrapper>
                    <LinkWrapper
                      aria-label={secondaryCTA?.value.text}
                      className={styles.cta2?.ctaVariant === 'link' ? ctaLink() : ctaSecondary()}
                      ctaStyle={getCtaStyle(styles.cta2, 'secondary')}
                      field={secondaryCTA}
                    ></LinkWrapper>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={slideMedia()}>
            <ImageWrapper className={imageWrapper()} field={image} />
          </div>
        </div>
      </SplideSlide>
    </>
  );
};

export const Default = withStandardComponentWrapper(CarouselItem);

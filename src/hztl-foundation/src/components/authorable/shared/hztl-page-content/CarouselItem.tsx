// Global
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';

// Local
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { withStandardComponentWrapper } from 'helpers/HOC';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';

/*
 * Tailwind Variants
 */

const TAILWIND_VARIANTS = tv({
  slots: {
    base: [
      'slide-content',
      'absolute',
      'lg:left-[10%]',
      'lg:top-1/2 ',
      'lg:box-border',
      'lg:max-w-[70%]',
      'lg:-translate-y-1/2',
      'lg:transform',
      'lg:p-5',
      'lg:text-left',
      'xl:max-w-[50%]',
      'z-10',
      'max-w-[70%]',
    ],
    wrapper: ['relative', 'lg:p-6', 'text-black', 'bg-neutral-50', 'p-4'],
    content: ['slide-content-inner', 'flex', 'justify-start', 'items-center'],
    inner: ['relative', 'flex', 'flex-col', 'gap-s', 'p-4', 'w-auto', 'sm:p-6'],
    heading: [
      'capitalize',
      'font-bold',
      'mb-4',
      'text-2xl',
      'leading-[32px]',
      'lg:text-4xl',
      'lg:leading-[48px]',
      'text-theme-black',
    ],
    descriptionText: ['mb-4', 'text-base', 'sm:text-lg', 'text-theme-black'],
    ctaButtons: ['flex', 'flex-col', 'gap-3', 'lg:flex-row', 'items-center'],
    ctaPrimary: ['px-4'],
    ctaSecondary: ['px-4'],
    ctaLink: ['text-theme-darkblue', 'text-base'],
    slideMedia: [
      'slide-media',
      'h-full',
      'w-full',
      'absolute',
      'top-0',
      'left-0',
      'bg-cover',
      'bg-center',
      'lg:max-h-[500px]',
    ],
  },
});

export type CarouselItemProps = ComponentProps &
  HztlPageContent.CarouselItem & { componentName?: string; dataSource?: string; uid: string };

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  const { description, image, primaryCTA, secondaryCTA, title } = props?.fields || {};

  const {
    base,
    content,
    ctaPrimary,
    ctaSecondary,
    ctaButtons,
    ctaLink,
    descriptionText,
    heading,
    //inner,
    slideMedia,
    wrapper,
  } = TAILWIND_VARIANTS();

  /*
   * Rendering
   */

  if (!props?.fields) {
    return <></>;
  }
  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  /**
   * Function to get the CTA style.
   * If ctaStyle is undefined, it defaults to the provided defaultVariant.
   *
   * @param {any} ctaStyle - The CTA style object.
   * @param {string} defaultVariant - The default variant to use if ctaStyle is undefined.
   * @returns {object} - The CTA style object with the appropriate variant.
   */

  const getCtaStyle = (ctaStyle: any, defaultVariant: string) => {
    return {
      ...ctaStyle,
      ctaVariant: ctaStyle?.ctaVariant ?? defaultVariant,
    };
  };

  return (
    <>
      <SplideSlide>
        <div className="flex min-h-[480px] justify-center items-center">
          {/* Slide Content. */}
          <div className={base()}>
            <div className={content()}>
              <div className={wrapper()}>
                <PlainTextWrapper tag="h2" className={heading()} field={title} />

                {/* Slide description. */}
                {description && (
                  <RichTextWrapper field={description} className={descriptionText()} />
                )}

                {/* Slide links. */}
                {primaryCTA && (
                  <div className={ctaButtons()}>
                    <LinkWrapper
                      field={primaryCTA}
                      aria-label={primaryCTA?.value.text}
                      className={styles.cta1?.ctaVariant === 'link' ? ctaLink() : ctaPrimary()}
                      ctaStyle={getCtaStyle(styles.cta1, 'primary')}
                    ></LinkWrapper>
                    <LinkWrapper
                      field={secondaryCTA}
                      aria-label={secondaryCTA?.value.text}
                      className={styles.cta2?.ctaVariant === 'link' ? ctaLink() : ctaSecondary()}
                      ctaStyle={getCtaStyle(styles.cta2, 'secondary')}
                    ></LinkWrapper>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Slide media. */}
          <div className={slideMedia()}>
            <ImageWrapper field={image} className="h-full w-full object-cover" />
          </div>
        </div>
      </SplideSlide>
    </>
  );
};

export const Default = withStandardComponentWrapper(CarouselItem);

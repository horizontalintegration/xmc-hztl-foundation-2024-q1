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
      // 'slide-content',
      'lg:absolute',
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
      'sm:w-full',
      'sm:relative',
    ],
    wrapper: ['relative', 'lg:p-6', 'text-black', 'bg-neutral-50', 'p-4'],
    content: ['slide-content-inner', 'flex', 'justify-start', 'items-center'],
    inner: ['relative', 'flex', 'flex-col', 'gap-s', 'p-4', 'w-auto', 'sm:p-6'],
    heading: [
      'capitalize',
      'font-bold',
      'mb-4',
      'text-2xl',
      'font-semibold',
      'leading-[32px]',
      'sm:text-5xl',
      'sm:leading-[48px]',
    ],
    descriptionText: ['mb-4', 'text-base', 'sm:text-lg', 'text-theme-black'],
    ctaWrapper: ['flex'],
    ctaButtons: ['flex', 'flex-col', 'gap-3', 'md:flex-row'],
    ctaButton1: [
      'bg-theme-black',
      'content-center',
      'font-bold',
      'h-12',
      'rounded',
      'text-center',
      'text-sm',
      'text-white',
      'w-32',
    ],
    ctaButton2: [
      'border',
      'border-theme-black',
      'content-center',
      'font-bold',
      'h-12',
      'rounded',
      'text-center',
      'text-sm',
      'text-theme-black',
      'w-32',
    ],
    slideMedia: [
      'slide-media',
      'h-full',
      'lg:h-screen',
      'w-full',
      'absolute',
      'top-0',
      'left-0',
      'bg-cover',
      'bg-center',
      'sm:relative',
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
    ctaButton1,
    ctaButton2,
    ctaButtons,
    ctaWrapper,
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
  return (
    <>
      <SplideSlide>
        <div className="flex">
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
                  <div className={ctaWrapper()}>
                    <div className={ctaButtons()}>
                      <LinkWrapper
                        field={primaryCTA}
                        aria-label={primaryCTA?.value.text}
                        className={ctaButton1()}
                        ctaStyle={styles.cta1}
                      ></LinkWrapper>
                      <LinkWrapper
                        field={secondaryCTA}
                        aria-label={secondaryCTA?.value.text}
                        className={ctaButton2()}
                        ctaStyle={styles.cta2}
                      ></LinkWrapper>
                    </div>
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

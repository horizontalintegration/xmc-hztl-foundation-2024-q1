// Global
import { SplideSlide } from '@splidejs/react-splide';
import { tv } from 'tailwind-variants';
import '@splidejs/splide/css';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';

// Local
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { ItemEx } from '../../../../.generated/_.Sitecore.Override';
import { withStandardComponentWrapper } from 'helpers/HOC';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';

export type CarouselItemProps = ComponentProps & ItemEx & HztlPageContent.CarouselItem;

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: [
      'slide-content',
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
      'z-10', // Ensure the content is above the background
      'sm:w-full', // Take the full width of the container
      'sm:relative', // Keep relative positioning for larger screens
    ],
    wrapper: [
      'relative',
      'lg:p-6',
      'text-black',
      'bg-neutral-50', // No background on mobile
      'p-4', // Decreased padding on mobile
    ],
    content: ['slide-content-inner', 'flex', 'justify-start', 'items-center'],
    inner: [
      'relative',
      'flex',
      'flex-col',
      'gap-s',
      'p-4', // Less padding on mobile
      'w-auto',
      'sm:p-6', // Reset padding for larger screens
    ],
    heading: [
      'mb-4',
      'text-2xl', // Smaller heading size on mobile
      'font-semibold',
      'leading-[32px]', // Adjust line height for mobile
      'sm:text-5xl', // Reset size for larger screens
      'sm:leading-[48px]', // Reset line height for larger screens
    ],
    description: [
      'mb-4',
      'text-base', // Smaller text for mobile
      'sm:text-lg', // Reset text size for larger screens
    ],
    ctaWrapper: ['flex'],
    ctaButtons: ['flex'],
    ctaButton1: [
      'btn',
      'lg:btn--inverse',
      'mr-4',
      'text-sm', // Smaller CTA button on mobile
      'sm:text-base', // Reset for larger screens
    ],
    ctaButton2: [
      'btn',
      'lg:btn--inverse',
      'text-sm', // Smaller CTA button on mobile
      'sm:text-base', // Reset for larger screens
    ],
    slideMedia: [
      'slide-media',
      'h-screen', // Make the image cover the entire screen height
      'w-full', // Full width
      'absolute', // Position absolutely behind the content
      'top-0',
      'left-0',
      'bg-cover',
      'bg-center',
      'sm:relative', // Reset for larger screens
      'sm:max-h-[500px]', // Limit height for larger screens
    ],
  },
});

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  const {
    base,
    wrapper,
    content,
    // inner,
    heading,
    description,
    ctaWrapper,
    ctaButtons,
    ctaButton1,
    ctaButton2,
    slideMedia,
  } = tailwindVariants();

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
                <PlainTextWrapper tag="h2" className={heading()} field={props?.fields?.title} />

                {/* Slide description. */}
                {props?.fields?.description && (
                  <RichTextWrapper field={props?.fields?.description} className={description()} />
                )}

                {/* Slide links. */}
                {props?.fields?.primaryCTA && (
                  <div className={ctaWrapper()}>
                    <div className={ctaButtons()}>
                      <LinkWrapper
                        field={props?.fields?.primaryCTA}
                        aria-label={props?.fields?.primaryCTA?.value.text}
                        className={ctaButton1()}
                        ctaStyle={styles.cta1}
                      ></LinkWrapper>
                      <LinkWrapper
                        field={props?.fields?.secondaryCTA}
                        aria-label={props?.fields?.secondaryCTA?.value.text}
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
            <ImageWrapper field={props?.fields?.image} className="h-auto w-full" />
          </div>
        </div>
      </SplideSlide>
    </>
  );
};

export const Default = withStandardComponentWrapper(CarouselItem);

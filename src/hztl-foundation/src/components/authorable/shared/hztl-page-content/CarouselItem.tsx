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
      'z-10',
      'sm:w-full',
      'sm:relative',
    ],
    wrapper: ['relative', 'lg:p-6', 'text-black', 'bg-neutral-50', 'p-4'],
    content: ['slide-content-inner', 'flex', 'justify-start', 'items-center'],
    inner: ['relative', 'flex', 'flex-col', 'gap-s', 'p-4', 'w-auto', 'sm:p-6'],
    heading: [
      'mb-4',
      'text-2xl',
      'font-semibold',
      'leading-[32px]',
      'sm:text-5xl',
      'sm:leading-[48px]',
    ],
    description: ['mb-4', 'text-base', 'sm:text-lg'],
    ctaWrapper: ['flex'],
    ctaButtons: ['flex'],
    ctaButton1: ['btn', 'lg:btn--inverse', 'mr-4', 'text-sm', 'sm:text-base'],
    ctaButton2: ['btn', 'lg:btn--inverse', 'text-sm', 'sm:text-base'],
    slideMedia: [
      'slide-media',
      'h-screen',
      'w-full',
      'absolute',
      'top-0',
      'left-0',
      'bg-cover',
      'bg-center',
      'sm:relative',
      'sm:max-h-[500px]',
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

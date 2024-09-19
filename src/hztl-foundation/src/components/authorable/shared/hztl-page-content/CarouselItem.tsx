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

const TAILWIND_VARIANTS = tv({
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
    ],
    wrapper: ['relative', 'p-6', 'lg:bg-white', 'lg:text-black'],
    content: ['slide-content-inner', 'flex', 'justify-center'],
    inner: ['relative', 'flex', 'flex-col', 'gap-s', 'p-6', 'w-auto'],
    heading: ['mb-4', 'text-5xl', 'font-semibold', 'leading-[48px]'],
    description: ['mb-4'],
    ctaWrapper: ['flex'],
    ctaButtons: ['flex'],
    ctaButton1: ['btn', 'lg:btn--inverse', 'mr-4'],
    ctaButton2: ['btn', 'lg:btn--inverse'],
    slideMedia: ['slide-media'],
  },
});

export type CarouselItemProps = ComponentProps &
  HztlPageContent.CarouselItem & { componentName?: string; dataSource?: string; uid: string };

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  const { description, image, primaryCTA, secondaryCTA, title } = props?.fields || {};

  const {
    base,
    wrapper,
    // content,
    // inner,
    heading,
    description,
    ctaWrapper,
    ctaButtons,
    ctaButton1,
    ctaButton2,
    ctaButtons,
    ctaWrapper,
    descriptionText,
    heading,
    inner,
    slideMedia,
    wrapper,
  } = TAILWIND_VARIANTS();

  /*
   * Rendering
   */

  if (!props?.fields) return <></>;

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

  return (
    <>
      <SplideSlide>
        <div className="relative">
          {/* Slide Content. */}
          <div className={base()}>
            <div className="slide-content-inner">
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

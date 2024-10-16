// Global
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { parseStyleParams } from 'lib/utils/style-param-utils';
import { getCtaStyle } from 'lib/utils/cta-utils';

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
    cta: [],
    descriptionText: ['mb-4', 'text-base', 'text-theme-black', 'sm:text-lg'],
    ctaButtons: ['flex', 'flex-col', 'gap-3', 'items-center', 'lg:flex-row'],
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
  variants: {
    style: {
      link: {
        cta: ['text-base', 'text-theme-darkblue'],
      },
      primary: {
        cta: ['px-4'],
      },
      secondary: {
        cta: ['px-4'],
      },
      tertiary: {
        cta: ['px-4'],
      },
    },
  },
});

export type CarouselItemProps = ComponentProps &
  HztlPageContent.CarouselItem & { componentName?: string; dataSource?: string; uid: string };

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  const { description, image, primaryCTA, secondaryCTA, title } = props?.fields || {};

  /*
   * Rendering
   */

  const {
    content,
    cta,
    ctaButtons,
    descriptionText,
    heading,
    imageWrapper,
    slide,
    slideContent,
    slideMedia,
    wrapper,
  } = TAILWIND_VARIANTS();

  const styles = parseStyleParams(props.params, ['cta1', 'cta2']);

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
                      className={cta({ style: styles.cta1?.ctaVariant })}
                      ctaStyle={getCtaStyle(styles.cta1, 'primary')}
                      field={primaryCTA}
                    ></LinkWrapper>
                    <LinkWrapper
                      aria-label={secondaryCTA?.value.text}
                      className={cta({ style: styles.cta2?.ctaVariant })}
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

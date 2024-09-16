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
      'flex-col-reverse',
      'flex',
      'items-start',
      'min-h-[500px]',
      'mx-auto',
      'py-6',
      'relative',
      'w-[80%]',
      'mmd:flex-row',
      'mmd:items-center',
      'mmd:justify-center',
      'mmd:w-[85%]',
      'sm:h-auto',
    ],
    content: ['flex', 'justify-center'],
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
    ctaButtons: ['flex', 'flex-col', 'gap-3', 'md:flex-row'],
    ctaWrapper: ['flex'],
    descriptionText: ['text-theme-black'],
    heading: ['capitalize', 'font-bold', 'text-3xl', 'md:text-5xl'],
    inner: ['relative', 'flex', 'flex-col', 'gap-6', 'p-6', 'w-auto'],
    slideMedia: ['flex-1'],
    wrapper: ['flex-1'],
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
    <SplideSlide>
      <div className={base()}>
        <div className={wrapper()}>
          <div className={content()}>
            <div className={inner()}>
              <PlainTextWrapper tag="h2" className={heading()} field={title} />
              {description && <RichTextWrapper field={description} className={descriptionText()} />}
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
        <div className={slideMedia()}>
          <ImageWrapper field={image} />
        </div>
      </div>
    </SplideSlide>
  );
};

export const Default = withStandardComponentWrapper(CarouselItem);

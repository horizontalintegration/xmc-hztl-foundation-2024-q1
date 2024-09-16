// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import { tv } from 'tailwind-variants';
import '@splidejs/splide/css';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { withStandardComponentWrapper } from 'helpers/HOC';

export type CarouselProps = ComponentProps & HztlPageContent.CarouselItem;

/*
 * Tailwind Variants
 */

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'relative'],
    slideArrows: ['splide__arrows'],
    previousButton: [
      'splide__arrow',
      'splide__arrow--prev',
      'icon-hover-focus-rounded',
      'stroke-gray',
      '!bg-transparent',
    ],
    nextButton: [
      'splide__arrow',
      'splide__arrow--next',
      'icon-hover-focus-rounded',
      'stroke-gray',
      '!bg-transparent',
    ],
    screenReader: ['sr-only'],
    progressBarWrapper: ['splide__progress'],
    progressBarItem: ['splide__progress__bar'],
    slideControls: ['absolute', 'bottom-1', 'right-5'],
    slideControlButton: ['splide__toggle', 'icon-hover-focus-rounded'],
    playButton: ['splide__toggle__play'],
    pauseButton: ['splide__toggle__pause'],
    iconStyles: ['h-l', 'w-l'],
  },
});

const Carousel = (props: CarouselProps): JSX.Element => {
  const { DynamicPlaceholderId, RenderingIdentifier } = props?.params || {};

  const phKey = `carousel-${DynamicPlaceholderId}`;

  const {
    base,
    iconStyles,
    nextButton,
    pauseButton,
    playButton,
    previousButton,
    progressBarItem,
    progressBarWrapper,
    screenReader,
    slideArrows,
    slideControlButton,
    slideControls,
  } = TAILWIND_VARIANTS();

  /*
   * Rendering
   */

  return (
    <div className={base()} id={RenderingIdentifier}>
      <Splide
        hasTrack={false}
        options={{
          autoplay: 'pause',
          gap: '.01rem',
          interval: 3000,
          pagination: true,
          perMove: 1,
          perPage: 1,
          rewind: true,
          width: '100%',
        }}
      >
        <SplideTrack>
          <Placeholder name={phKey} rendering={props.rendering} />
        </SplideTrack>
        <div className={slideArrows()}>
          <button className={previousButton()}>
            <span className={screenReader()}>Previous slide</span>
            <SvgIcon icon="arrow-right" size="md" />
          </button>
          <button className={nextButton()}>
            <span className={screenReader()}>Next slide</span>
            <SvgIcon icon="arrow-right" size="md" />
          </button>
        </div>
        <div className={progressBarWrapper()}>
          <div className={progressBarItem()} />
        </div>
        <div className={slideControls()}>
          <button className={slideControlButton()} type="button">
            <span className={playButton()}>
              <span className={screenReader()}>Play slideshow</span>
              <SvgIcon className={iconStyles()} icon="play" />
            </span>
            <span className={pauseButton()}>
              <span className={screenReader()}>Pause slideshow</span>
              <SvgIcon className={iconStyles()} icon="pause" />
            </span>
          </button>
        </div>
      </Splide>
    </div>
  );
};

export const Default = withStandardComponentWrapper(Carousel, false);

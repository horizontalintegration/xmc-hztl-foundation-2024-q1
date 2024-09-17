// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import { SvgIcon } from 'helpers/SvgIcon';

export type CarouselProps = ComponentProps & HztlPageContent.CarouselItem;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'relative'],
    iconStyles: ['h-l', 'w-l'],
    nextButton: [
      'splide__arrow',
      'splide__arrow--next',
      '!bg-transparent',
      'icon-hover-focus-rounded',
      'opacity-50',
    ],
    nextButtonIcon: ['fill-theme-black'],
    pauseButton: ['splide__toggle__pause'],
    playButton: ['splide__toggle__play'],
    previousButton: [
      'splide__arrow',
      'splide__arrow--prev',
      '!bg-transparent',
      'icon-hover-focus-rounded',
      'opacity-50',
    ],
    previousButtonIcon: ['fill-theme-black'],
    progressBarItem: ['splide__progress__bar'],
    progressBarWrapper: ['splide__progress'],
    screenReader: ['sr-only'],
    slideArrows: ['splide__arrows'],
    slideControlButton: ['splide__toggle', 'icon-hover-focus-rounded'],
    slideControls: ['absolute', 'bottom-1', 'right-5'],
  },
});

const Carousel = (props: CarouselProps): JSX.Element => {
  const { DynamicPlaceholderId, RenderingIdentifier } = props?.params || {};

  const phKey = `carousel-${DynamicPlaceholderId}`;

  const {
    base,
    iconStyles,
    nextButton,
    nextButtonIcon,
    pauseButton,
    playButton,
    previousButton,
    previousButtonIcon,
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
          classes: {
            page: 'splide__pagination__page bg-theme-lightgrey border-black h-4 w-4',
          },
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
            <SvgIcon className={previousButtonIcon()} icon="arrow-right" size="md" />
          </button>
          <button className={nextButton()}>
            <span className={screenReader()}>Next slide</span>
            <SvgIcon className={nextButtonIcon()} icon="arrow-right" size="md" />
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

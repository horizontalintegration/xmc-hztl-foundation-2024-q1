// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Splide, SplideProps, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { withStandardComponentWrapper } from 'helpers/HOC';
import { SvgIcon } from 'helpers/SvgIcon';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import useDictionary from 'src/hooks/useDictionary';

export type CarouselProps = ComponentProps & HztlPageContent.CarouselItem;

const SPLIDE_OPTIONS = {
  autoplay: 'pause',
  classes: {
    page: 'splide__pagination__page lg:!h-[17px] lg:!w-[17px] !h-[12px] !w-[12px]',
  },
  gap: '.01rem',
  interval: 3000,
  pagination: true,
  perMove: 1,
  perPage: 1,
  rewind: true,
  width: '100%',
} as SplideProps;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'overflow-hidden', 'relative'],
    nextButton: [
      'splide__arrow',
      'splide__arrow--next',
      '!bg-transparent',
      '!border-none',
      '!opacity-100',
      '!shadow-none',
    ],
    nextButtonIcon: ['fill-theme-black', 'opacity-50'],
    pagination: [
      '!bottom-6',
      '!left-1/2',
      'space-x-1',
      'splide__pagination',
      'transform',
      '-translate-x-1/2',
      '!lg:absolute',
      'lg:!bottom-12',
    ],
    pauseButton: ['splide__toggle__pause'],
    playButton: ['splide__toggle__play'],
    previousButton: [
      'splide__arrow',
      'splide__arrow--prev',
      '!bg-transparent',
      '!border-none',
      '!opacity-100',
      '!shadow-none',
    ],
    previousButtonIcon: ['fill-theme-black', 'opacity-50'],
    progressBarItem: ['splide__progress__bar'],
    progressBarWrapper: ['splide__progress'],
    screenReader: ['sr-only'],
    slideArrows: ['splide__arrows'],
    slideControlButton: ['splide__toggle', 'icon-hover-focus-rounded'],
    slideControls: ['absolute', 'bottom-2', 'right-6', 'text-gray', 'lg:bottom-8', 'lg:right-14'],
  },
});

const Carousel = (props: CarouselProps): JSX.Element => {
  const { DynamicPlaceholderId, RenderingIdentifier } = props?.params || {};

  const phKey = `carousel-${DynamicPlaceholderId}`;

  const { getDictionaryValue } = useDictionary();

  /*
   * Rendering
   */

  const {
    base,
    nextButton,
    nextButtonIcon,
    pagination,
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

  return (
    <section
      className={base()}
      data-component="authorable/shared/hztl-page-content/carousel"
      id={RenderingIdentifier}
    >
      <Splide hasTrack={false} options={SPLIDE_OPTIONS}>
        <SplideTrack>
          <Placeholder name={phKey} rendering={props.rendering} />
        </SplideTrack>
        <div className={slideArrows()}>
          <button className={previousButton()}>
            <span className={screenReader()}>{getDictionaryValue('PreviousSlide')}</span>
            <SvgIcon className={previousButtonIcon()} icon="arrow-right" size="md" />
          </button>
          <button className={nextButton()}>
            <span className={screenReader()}>{getDictionaryValue('NextSlide')}</span>
            <SvgIcon className={nextButtonIcon()} icon="arrow-right" size="md" />
          </button>
        </div>
        <div className={progressBarWrapper()}>
          <div className={progressBarItem()} />
        </div>
        <ul className={pagination()}></ul>
        <div className={slideControls()}>
          <button className={slideControlButton()} type="button">
            <span className={playButton()}>
              <span className={screenReader()}>{getDictionaryValue('PlaySlideshow')}</span>
              <SvgIcon icon="play" size="sm" />
            </span>
            <span className={pauseButton()}>
              <span className={screenReader()}>{getDictionaryValue('PauseSlideshow')}</span>
              <SvgIcon icon="pause" size="sm" />
            </span>
          </button>
        </div>
      </Splide>
    </section>
  );
};

export const Default = withStandardComponentWrapper(Carousel, false);

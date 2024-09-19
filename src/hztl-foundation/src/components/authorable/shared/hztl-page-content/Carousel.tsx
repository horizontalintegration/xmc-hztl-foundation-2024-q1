// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { tv } from 'tailwind-variants';
import '@splidejs/splide/css';
// import { IconContext } from 'react-icons';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlinePauseCircle } from 'react-icons/ai';
// import { FaChevronRight } from 'react-icons/fa6';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
// import { SvgIcon } from 'helpers/SvgIconWrapper';
import { withStandardComponentWrapper } from 'helpers/HOC';
import { SvgIcon } from 'helpers/SvgIcon';

export type CarouselProps = ComponentProps & HztlPageContent.CarouselItem;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['component', 'relative', 'p-2'],
    slideArrows: ['splide__arrows'],
    previousButton: [
      'splide__arrow',
      'splide__arrow--prev',
      'icon-hover-focus-rounded',
      '!opacity-100',
      'max-lg:!top-auto',
      'max-lg:bottom-[100px]',
    ],
    nextButton: [
      'splide__arrow',
      'splide__arrow--next',
      'icon-hover-focus-rounded',
      '!opacity-100',
      'max-lg:!top-auto',
      'max-lg:bottom-[100px]',
    ],
    previousButtonIcon: ['fill-theme-black'],
    progressBarItem: ['splide__progress__bar'],
    slideControls: ['absolute', 'bottom-2', 'lg:bottom-8', 'lg:right-14', 'right-6', 'text-gray'],
    slideControlButton: ['splide__toggle', 'icon-hover-focus-rounded'],
    playButton: ['splide__toggle__play'],
    pauseButton: ['splide__toggle__pause'],
    iconStyles: ['h-l', 'w-l'],
    pagination: [
      'splide__pagination',
      '!lg:absolute',
      '!bottom-6',
      'lg:!bottom-12',
      '!left-1/2',
      'transform',
      '-translate-x-1/2',
    ],
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
    playButton,
    pauseButton,
    pagination,
    // iconStyles,
  } = tailwindVariants();

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
          <button className={`${previousButton()} !bg-transparent !shadow-none !border-none`}>
            <span className={screenReader()}>Previous slide</span>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1024"
              height="1024"
              viewBox="0 0 1024 1024"
              className="!h-12 !w-12"
            >
              <g id="icomoon-ignore"></g>
              <path
                fill="#808080"
                d="M234.792 994.007c-39.989-39.988-39.989-104.826 0-144.814l337.191-337.193-337.191-337.192c-39.99-39.989-39.99-104.826 0-144.816s104.826-39.989 144.816 0l409.599 409.6c39.991 39.988 39.991 104.826 0 144.814l-409.599 409.6c-39.989 39.991-104.826 39.991-144.816 0z"
              ></path>
            </svg>
          </button>

          <button className={`${nextButton()} !bg-transparent !shadow-none !border-none`}>
            <span className={screenReader()}>Next slide</span>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1024"
              height="1024"
              viewBox="0 0 1024 1024"
              className="!h-12 !w-12"
            >
              <g id="icomoon-ignore"></g>
              <path
                fill="#808080"
                d="M234.792 994.007c-39.989-39.988-39.989-104.826 0-144.814l337.191-337.193-337.191-337.192c-39.99-39.989-39.99-104.826 0-144.816s104.826-39.989 144.816 0l409.599 409.6c39.991 39.988 39.991 104.826 0 144.814l-409.599 409.6c-39.989 39.991-104.826 39.991-144.816 0z"
              ></path>
            </svg>
          </button>
        </div>
        {/* Progress Bar */}
        <div className={progressBarWrapper()}>
          <div className={progressBarItem()} />
        </div>
        <ul className={pagination()}></ul> {/* Pagination dots */}
        <div className={slideControls()}>
          <button className={slideControlButton()} type="button">
            <span className={playButton()}>
              <span className={screenReader()}>Play slideshow</span>
              {/* <SvgIcon className={iconStyles()} icon={'play'} /> */}
              <AiOutlinePlayCircle size="2.3em" title="Play slideshow" />
            </span>
            <span className={pauseButton()}>
              <span className={screenReader()}>Pause slideshow</span>
              {/* <SvgIcon className={iconStyles()} icon={'pause'} /> */}
              <AiOutlinePauseCircle size="2.3em" title="Pause slideshow" />
            </span>
          </button>
        </div>
      </Splide>
    </div>
  );
};

export const Default = withStandardComponentWrapper(Carousel, false);

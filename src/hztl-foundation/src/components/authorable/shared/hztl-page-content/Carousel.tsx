// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import { tv } from 'tailwind-variants';
import '@splidejs/splide/css';
// import { IconContext } from 'react-icons';
// import { AiOutlinePlayCircle } from 'react-icons/ai';
// import { AiOutlinePauseCircle } from 'react-icons/ai';
// // import { FaChevronRight } from 'react-icons/fa6';

// Lib
import { ComponentProps } from 'lib/component-props';

// Local
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
// import { SvgIcon } from 'helpers/SvgIconWrapper';
import { withStandardComponentWrapper } from 'helpers/HOC';

export type CarouselProps = ComponentProps & HztlPageContent.CarouselItem;

/*
 * Tailwind Variants
 */

const tailwindVariants = tv({
  slots: {
    base: ['component', 'relative', 'p-2', 'overflow:hidden'],
    slideArrows: ['splide__arrows'],
    previousButton: [
      'splide__arrow',
      'splide__arrow--prev',
      'icon-hover-focus-rounded',
      '!opacity-100',
    ],
    nextButton: [
      'splide__arrow',
      'splide__arrow--next',
      'icon-hover-focus-rounded',
      '!opacity-100',
    ],
    screenReader: ['sr-only'],
    progressBarWrapper: ['splide__progress'],
    progressBarItem: ['splide__progress__bar'],
    slideControls: ['absolute', 'bottom-2', 'lg:bottom-8', 'lg:right-14', 'right-6', 'text-gray'],
    slideControlButton: [
      'splide__toggle',
      'icon-hover-focus-rounded',
      // 'border-2', // Adjust the border width
      // 'border-blue-500', // Set the border color
      // 'hover:border-blue-700', // Add hover effect for border color
      // 'rounded-full', // Makes the button round
    ],
    playButton: ['splide__toggle__play', 'text-blue-500'],
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
      'space-x-1', //sapce between pagination dots
    ],
  },
});

const Carousel = (props: CarouselProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const phKey = `carousel-${props?.params?.DynamicPlaceholderId}`;

  const {
    base,
    slideArrows,
    previousButton,
    nextButton,
    screenReader,
    progressBarWrapper,
    progressBarItem,
    slideControls,
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
    <div id={id ? id : undefined} className={base()}>
      <Splide
        hasTrack={false}
        options={{
          rewind: true,
          width: '100%',
          gap: '.01rem',
          perPage: 1,
          perMove: 1,
          pagination: true,
          autoplay: 'pause',
          interval: 3000,
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
            {/* Play button */}
            <span className={playButton()}>
              <span className={screenReader()}>Play slideshow</span>
              {/* <SvgIcon className={iconStyles()} icon={'play'} /> */}
              {/* <AiOutlinePlayCircle
                size="2.5em"
                title="Play slideshow"
                className="text-black thin-icon"
              /> */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L26 20L18 25V15Z"
                  stroke="#2F2D2E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
                  stroke="#2F2D2E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            {/* Pause button */}
            <span className={pauseButton()}>
              <span className={screenReader()}>Pause slideshow</span>
              {/* <SvgIcon className={iconStyles()} icon={'pause'} /> */}
              {/* <AiOutlinePauseCircle size="2.5em" title="Pause slideshow" className="text-black" /> */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 15V25M23.3333 15V25M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
                  stroke="#2F2D2E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </Splide>
    </div>
  );
};

export const Default = withStandardComponentWrapper(Carousel, false);

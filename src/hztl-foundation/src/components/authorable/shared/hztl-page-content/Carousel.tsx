// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css';

// Helper
import { SvgIcon } from 'helpers/SvgIconWrapper';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

export type CarouselProps = ComponentProps & HztlPageContent.CarouselItem;

export const Default = (props: CarouselProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const phKey = `carousel`;
  return (
    <div id={id ? id : undefined} className="component relative">
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

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev icon-hover-focus-rounded max-lg:!top-auto max-lg:bottom-[100px] stroke-gray !bg-transparent">
            <span className="sr-only">Previous slide</span>
            <SvgIcon icon={'arrow-right'} size="lg" />
          </button>

          <button className="splide__arrow splide__arrow--next icon-hover-focus-rounded max-lg:!top-auto max-lg:bottom-[100px] stroke-gray !bg-transparent">
            <span className="sr-only">Next slide</span>
            <SvgIcon icon={'arrow-right'} size="lg" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <div className="absolute bottom-1 right-5">
          <button className="splide__toggle icon-hover-focus-rounded" type="button">
            {/* Play button */}
            <span className="splide__toggle__play">
              <span className="sr-only">Play slideshow</span>
              <SvgIcon className="h-l w-l" icon={'play'} />
            </span>

            {/* Pause button */}
            <span className="splide__toggle__pause">
              <span className="sr-only">Pause slideshow</span>
              <SvgIcon className="h-l w-l" icon={'pause'} />
            </span>
          </button>
        </div>
      </Splide>
    </div>
  );
};

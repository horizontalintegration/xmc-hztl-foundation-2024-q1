import React from 'react';
import { ItemEx } from '../../../../.generated/_.Sitecore.Override';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

// Helper
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import { SvgIcon } from 'helpers/SvgIconWrapper';

export type CarouselProps = ComponentProps & HztlPageContent.Carousel;
export type CarouselItem = ItemEx & HztlPageContent.CarouselItem;

const CarouselDefaultComponent = (props: CarouselProps): JSX.Element => {
  return (
    <div className={`component hero ${props.params.styles}`}>
      <div className="component-content">
        <span className="is-empty-hint">Carousel</span>
      </div>
    </div>
  );
};

export const Default = (props: CarouselProps): JSX.Element => {
  if (props.fields) {
    return (
      <div>
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
            {props?.fields?.carouselList?.map((slide: CarouselItem, key: number) => {
              return (
                <SplideSlide key={slide.id}>
                  <div className="relative py-m w-[350px] mml:w-auto min-h-[500px] sm:h-auto md:h-[500px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
                    {/* Slide Content. */}
                    <div className="slide-content z-10 lg:absolute lg:left-[3%] lg:top-1/2 lg:box-border lg:max-w-[70%] lg:-translate-y-1/2 lg:transform lg:bg-opacity-80 lg:p-5 lg:text-left xl:max-w-[50%]">
                      <div className="slide-content-inner">
                        <div className="relative flex flex-col gap-s p-6 sm:w-44 mmd:w-auto h-[225px]">
                          <h2 className="sm:text-5xl mmd:text-l capitalize font-bold">
                            {slide?.fields?.title?.value}
                          </h2>

                          {/* Slide description. */}
                          {slide?.fields?.description && (
                            <p className="text-xs text-gray">{slide?.fields?.description?.value}</p>
                          )}

                          {/* Slide links. */}
                          {slide?.fields?.primaryCTA && (
                            <div className="flex">
                              <div className="flex flex-col mml:flex-row gap-xs" key={key}>
                                <LinkWrapper
                                  field={slide?.fields?.primaryCTA}
                                  aria-label={slide?.fields?.primaryCTA?.value.text}
                                  className="w-32 h-12 rounded content-center text-center bg-gray text-white text-button font-bold"
                                ></LinkWrapper>
                                <LinkWrapper
                                  field={slide?.fields?.secondaryCTA}
                                  aria-label={slide?.fields?.secondaryCTA?.value.text}
                                  className="w-32 h-12 rounded content-center text-center text-button font-bold border-1 border-gray text-gray"
                                ></LinkWrapper>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Slide media. */}
                    <div className="slide-media">
                      <ImageWrapper field={slide?.fields?.image} />
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev icon-hover-focus-rounded max-lg:!top-auto max-lg:bottom-[100px] stroke-gray !bg-transparent">
              <span className="sr-only">Previous slide</span>
              <SvgIcon icon={'arrow-right'} />
            </button>

            <button className="splide__arrow splide__arrow--next icon-hover-focus-rounded max-lg:!top-auto max-lg:bottom-[100px] stroke-gray !bg-transparent">
              <span className="sr-only">Next slide</span>
              <SvgIcon icon={'arrow-right'} />
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
  }
  return <CarouselDefaultComponent {...props} />;
};

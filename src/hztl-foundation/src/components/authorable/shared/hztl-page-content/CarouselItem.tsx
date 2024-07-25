import { ItemEx } from '../../../../.generated/_.Sitecore.Override';
// Lib
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

// Helper
import { withStandardComponentWrapper } from 'helpers/HOC';
import LinkWrapper from 'helpers/SitecoreWrappers/LinkWrapper/LinkWrapper';
import ImageWrapper from 'helpers/SitecoreWrappers/ImageWrapper/ImageWrapper';
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import RichTextWrapper from 'helpers/SitecoreWrappers/RichTextWrapper/RichTextWrapper';

export type CarouselItemProps = ComponentProps & ItemEx & HztlPageContent.CarouselItem;

const CarouselItemDefaultComponent = (props: CarouselItemProps): JSX.Element => {
  return (
    <div className={`component hero ${props?.params?.styles}`}>
      <div className="component-content">
        <span className="is-empty-hint">CarouselItem</span>
      </div>
    </div>
  );
};

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  if (props.fields) {
    return (
      <SplideSlide key={props.id}>
        <div className="relative py-m w-[350px] mml:w-auto min-h-[500px] sm:h-auto md:h-[500px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
          {/* Slide Content. */}
          <div className="slide-content z-10 lg:absolute lg:left-[3%] lg:top-1/2 lg:box-border lg:max-w-[70%] lg:-translate-y-1/2 lg:transform lg:bg-opacity-80 lg:p-5 lg:text-left xl:max-w-[50%]">
            <div className="slide-content-inner">
              <div className="relative flex flex-col gap-s p-6 sm:w-44 mmd:w-auto h-[225px]">
                <h2 className="sm:text-5xl mmd:text-l capitalize font-bold">
                  {props?.fields?.title?.value}
                </h2>

                {/* Slide description. */}
                {props?.fields?.description && (
                  <RichTextWrapper
                    field={props?.fields?.description}
                    className="text-xs text-gray"
                  />
                )}

                {/* Slide links. */}
                {props?.fields?.primaryCTA && (
                  <div className="flex">
                    <div className="flex flex-col mml:flex-row gap-xs">
                      <LinkWrapper
                        field={props?.fields?.primaryCTA}
                        aria-label={props?.fields?.primaryCTA?.value.text}
                        className="w-32 h-12 rounded content-center text-center bg-gray text-white text-button font-bold"
                      ></LinkWrapper>
                      <LinkWrapper
                        field={props?.fields?.secondaryCTA}
                        aria-label={props?.fields?.secondaryCTA?.value.text}
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
            <ImageWrapper field={props?.fields?.image} />
          </div>
        </div>
      </SplideSlide>
    );
  }
  return <CarouselItemDefaultComponent {...props} />;
};

export const Default = withStandardComponentWrapper(CarouselItem);

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
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';

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
        <div className="relative py-m mmd:w-[85%] w-[80%] min-h-[500px] sm:h-auto mx-auto flex flex-col-reverse mmd:flex-row mmd:justify-center mmd:items-center items-start">
          {/* Slide Content. */}
          <div className="slide-content flex-1">
            <div className="slide-content-inner flex justify-center">
              <div className="relative flex flex-col gap-s p-6 w-auto">
                <PlainTextWrapper
                  tag="h2"
                  className="md:text-5xl text-3xl capitalize font-bold"
                  field={props?.fields?.title}
                />

                {/* Slide description. */}
                {props?.fields?.description && (
                  <RichTextWrapper
                    field={props?.fields?.description}
                    className="text-xs text-black"
                  />
                )}

                {/* Slide links. */}
                {props?.fields?.primaryCTA && (
                  <div className="flex">
                    <div className="flex md:flex-row flex-col gap-xs">
                      <LinkWrapper
                        field={props?.fields?.primaryCTA}
                        aria-label={props?.fields?.primaryCTA?.value.text}
                        className="w-32 h-12 rounded content-center text-center bg-black text-white text-button font-bold"
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
          <div className="slide-media flex-1">
            <ImageWrapper field={props?.fields?.image} />
          </div>
        </div>
      </SplideSlide>
    );
  }
  return <CarouselItemDefaultComponent {...props} />;
};

export const Default = withStandardComponentWrapper(CarouselItem);

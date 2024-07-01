import React from 'react';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';
import { SvgIcon } from 'helpers/SvgIconWrapper';

export type VideoProps = ComponentProps & HztlPageContent.Video;

const VideoDefaultComponent = (props: VideoProps): JSX.Element => (
  <div className={`component video ${props?.params?.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Video</span>
    </div>
  </div>
);

export const Default = (props: VideoProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;

  if (props?.fields) {
    return (
      <div
        className={`component video ${
          props?.params?.styles !== undefined ? props?.params?.styles : ''
        }`}
        id={id ? id : ''}
      >
        <div data-component="authorable/general/video" className="flex py-xxs gap-s px-ml">
          <div className="p-6 bg-[#B2B2B2]">
            <div className="px-20 py-11 bg-white">
              <div className="text-right">
                <SvgIcon icon={'close'} className="inline-block w-auto h-auto stroke-black" />
              </div>
              <div>
                <video className="w-auto" controls preload="none">
                  <source src={props?.fields?.SelectFile?.value?.src} type="video/mp4" />
                  <source src={props?.fields?.SelectFile?.value?.src} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <VideoDefaultComponent {...props} />;
};

import React, { useState } from 'react';
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import VideoWrapper from 'helpers/SitecoreWrappers/VideoWrapper/VideoWrapper';
import ModalWrapper from 'helpers/SitecoreWrappers/ModalWrapper/ModalWrapper';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!props?.fields) {
    return <VideoDefaultComponent {...props} />;
  }

  return (
    <div className={`component rich-text`} id={id ? id : undefined}>
      <div className="py-spacing-spacing-7 px-spacing-spacing-4 md:px-spacing-spacing-2"></div>
      <button
        className="flex h-14 gap-xxs items-center justify-center px-16 py-xs rounded-md text-center font-modern font-bold leading-normal text-base bg-gray text-white"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Launch Video
      </button>
      {isModalOpen && (
        <ModalWrapper
          isModalOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          size="large"
          closeIconClasses="mt-xs mb-xxxs mr-s text-black"
          modalLabel={props?.fields?.Title?.value as unknown as string}
        >
          <VideoWrapper {...props} />
        </ModalWrapper>
      )}
    </div>
  );
};

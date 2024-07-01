import React, { useState } from 'react';
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';
import VideoWrapper from 'helpers/VideoWrapper/VideoWrapper';
import ModalWrapper from 'helpers/ModalWrapper/ModalWrapper';

export type VideoProps = ComponentProps & HztlPageContent.Video;

export const Default = (props: VideoProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="py-spacing-spacing-7 px-spacing-spacing-4 md:px-spacing-spacing-2"></div>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Click me</button>
      {isModalOpen && (
        <ModalWrapper
          isModalOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          size="large"
          closeIconClasses="mt-xs mb-xxxs mr-s text-black"
        >
          <VideoWrapper {...props} />
        </ModalWrapper>
      )}
    </div>
  );
};

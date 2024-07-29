// Global
import React from 'react';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

// Local
import ModalWrapper, { ModalWrapperProps } from 'helpers/GenericWrappers/ModalWrapper/ModalWrapper';
import VideoWrapper, { Source, Track } from 'helpers/GenericWrappers/VideoWrapper/VideoWrapper';
import ButtonWrapper, {
  ButtonWrapperProps,
} from 'helpers/SitecoreWrappers/ButtonWrapper/ButtonWrapper';

export type VideoProps = ComponentProps &
  HztlPageContent.Video & {
    fields?: {
      Captions?: {
        value: Track[];
      };
      Cta?: ButtonWrapperProps;
      Controls?: {
        value: boolean;
      };
      Fluid?: {
        value: boolean;
      };
      Height: {
        value: number | string;
      };
      Modal?: ModalWrapperProps;
      Muted?: {
        value: boolean;
      };
      OpenInModal: {
        value: boolean;
      };
      Poster?: {
        value: string;
      };
      Sources: {
        value: Source[];
      };
      Subtitles?: {
        value: Track[];
      };
      Width: {
        value: number | string;
      };
    };
  };

/*
 * RENDERING
 */

const RenderVideoPlayer = (props: VideoProps): JSX.Element => {
  const {
    AutoPlay,
    Captions,
    Controls,
    Fluid,
    Height,
    Loop,
    Muted,
    Poster,
    Sources,
    Subtitles,
    Width,
  } = props?.fields || {};

  return (
    <VideoWrapper
      autoplay={AutoPlay?.value}
      captions={Captions?.value}
      controls={Controls?.value}
      fluid={Fluid?.value}
      height={Height?.value}
      loop={Loop?.value}
      muted={Muted?.value}
      poster={Poster?.value}
      sources={Sources?.value || []}
      subtitles={Subtitles?.value}
      width={Width?.value}
    />
  );
};

const RenderVideoPlayerModal = (props: VideoProps): JSX.Element => {
  const { Cta, Modal } = props?.fields || {};

  return (
    <ModalWrapper
      content={<RenderVideoPlayer {...props} />}
      id={Modal?.id || ''}
      label={Modal?.label || ''}
      size={Modal?.size}
      title={Modal?.title}
      trigger={
        <ButtonWrapper
          ctaVariant={Cta?.ctaVariant}
          id={Cta?.id}
          text={Cta?.text}
          title={Cta?.title}
          type={Cta?.type}
        />
      }
    />
  );
};

const Video = (props: VideoProps): JSX.Element => {
  const { OpenInModal } = props?.fields || {};

  if (props?.fields && OpenInModal?.value === true) return <RenderVideoPlayerModal {...props} />;

  if (props?.fields && OpenInModal?.value === false) return <RenderVideoPlayer {...props} />;

  return (
    <div className="component video">
      <div className="component-content">
        <span className="is-empty-hint">Video</span>
      </div>
    </div>
  );
};

export default Video;

// Global
import React from 'react';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

// Local
import VideoWrapper from 'helpers/GenericWrappers/VideoWrapper/VideoWrapper';

export type InlineVideoProps = ComponentProps &
  HztlPageContent.Video & {
    componentName?: string;
    dataSource?: string;
    uid?: string;
  };

/*
 * RENDERING
 */

const InlineVideo = (props: InlineVideoProps): JSX.Element => {
  const {
    autoplay,
    captions,
    controls,
    fluid,
    height,
    loop,
    muted,
    poster,
    sources,
    subtitles,
    width,
  } = props?.fields || {};

  if (!props?.fields)
    return (
      <div className="component video">
        <div className="component-content">
          <span className="is-empty-hint">Video</span>
        </div>
      </div>
    );

  return (
    <VideoWrapper
      autoplay={autoplay?.value}
      captions={captions}
      controls={controls?.value}
      fluid={fluid?.value}
      height={height?.value}
      loop={loop?.value}
      muted={muted?.value}
      poster={poster?.value?.src}
      sources={sources || []}
      subtitles={subtitles}
      width={width?.value}
    />
  );
};

export default InlineVideo;

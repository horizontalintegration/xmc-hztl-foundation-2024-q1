// Global
import React from 'react';
// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

// Local
import VideoWrapper from 'helpers/GenericWrappers/VideoWrapper/VideoWrapper';

export type InlineVideoProps = ComponentProps & HztlPageContent.InlineVideo;

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

  const mappedCaptions = captions?.map((caption) => ({
    isDefault: false,
    kind: 'captions',
    label: 'English',
    srclang: 'en',
    src: caption?.url,
  }));

  const mappedSources = sources?.map((source) => ({
    src: source?.url,
    type: source?.fields?.['Mime Type']?.value,
  }));

  const mappedSubtitles = subtitles?.map((subtitle) => ({
    isDefault: false,
    kind: 'subtitles',
    label: 'English',
    srclang: 'en',
    src: subtitle?.url,
  }));

  return (
    <VideoWrapper
      autoplay={autoplay?.value}
      captions={mappedCaptions}
      controls={controls?.value}
      fluid={fluid?.value}
      height={height?.value}
      loop={loop?.value}
      muted={muted?.value}
      poster={poster?.value?.src}
      sources={mappedSources || []}
      subtitles={mappedSubtitles}
      width={width?.value}
    />
  );
};

export default InlineVideo;

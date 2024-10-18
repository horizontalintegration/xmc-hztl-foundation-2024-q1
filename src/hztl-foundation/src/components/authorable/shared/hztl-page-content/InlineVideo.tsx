// Global
import React from 'react';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import VideoWrapper, { Source, Track } from 'helpers/GenericWrappers/VideoWrapper/VideoWrapper';
import useDictionary from 'src/hooks/useDictionary';

type RawSource = {
  displayName?: string;
  id?: string;
  name?: string;
  url?: string;
  fields?: {
    Blob?: { value?: string };
    CountryCode?: { value?: string };
    Description?: { value?: string };
    Extension?: { value?: string };
    'File Path'?: { value?: string };
    Format?: { value?: string };
    LocationDescription?: { value?: string };
    Keywords?: { value?: string };
    'Mime Type'?: { value?: string };
    Size?: { value?: string };
    Title?: { value?: string };
    ZipCode?: { value?: string };
  };
};

type RawTrack = {
  displayName: string;
  fields: {
    CaptionContent: { value: string };
    Label: { value: string };
    SrcLang: { value: string };
  };
  id: string;
  name: string;
  url: string;
};

export type InlineVideoProps = ComponentProps &
  HztlPageContent.InlineVideo & {
    componentName: string;
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

  const { getDictionaryValue } = useDictionary();

  if (!props?.fields)
    return (
      <div className="component video">
        <div className="component-content">
          <span className="is-empty-hint">{getDictionaryValue('VideoUnavailable')}</span>
        </div>
      </div>
    );

  const mappedCaptions: Track[] =
    captions?.map((caption: RawTrack) => ({
      isDefault: false,
      kind: 'captions',
      label: caption?.fields?.Label?.value,
      srclang: caption?.fields?.SrcLang?.value,
      src: caption.url,
    })) || [];

  const mappedSources: Source[] =
    sources?.map((source: RawSource) => ({
      src: source.url,
      type: source.fields?.['Mime Type']?.value,
    })) || [];

  const mappedSubtitles: Track[] =
    subtitles?.map((subtitle: RawTrack) => ({
      isDefault: false,
      kind: 'subtitles',
      label: subtitle?.fields?.Label?.value,
      srclang: subtitle?.fields?.SrcLang?.value,
      src: subtitle.url,
    })) || [];

  return (
    <section data-component="authorable/shared/hztml-page-content/inlinevideo">
      <VideoWrapper
        autoplay={autoplay?.value}
        captions={mappedCaptions}
        controls={controls?.value}
        fluid={fluid?.value}
        height={height?.value}
        loop={loop?.value}
        muted={muted?.value}
        poster={poster?.value?.src}
        sources={mappedSources}
        subtitles={mappedSubtitles}
        width={width?.value}
      />
    </section>
  );
};

export default InlineVideo;

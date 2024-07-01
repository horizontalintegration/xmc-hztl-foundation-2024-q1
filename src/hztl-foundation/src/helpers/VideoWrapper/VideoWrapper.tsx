import React from 'react';

import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';
import { ComponentProps } from 'lib/component-props';

export type VideoWrapperProps = ComponentProps & HztlPageContent.Video;

const VideoWrapper = (props: VideoWrapperProps): JSX.Element => {
  const uploadedVideoLink = props?.fields?.SelectFile?.value?.src;
  const videoLink = props?.fields?.Title?.value;
  const youtubeData = props?.fields?.YoutubeId?.value;
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeData}`;

  return (
    <>
      {uploadedVideoLink ? (
        <video width={900} height={500} controls preload="none">
          <source src={uploadedVideoLink} type="video/mp4" />
          <source src={uploadedVideoLink} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          id={'videoId.value'}
          name="ytwrapper"
          width={900}
          height={500}
          src={youtubeUrl}
          title={videoLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default VideoWrapper;

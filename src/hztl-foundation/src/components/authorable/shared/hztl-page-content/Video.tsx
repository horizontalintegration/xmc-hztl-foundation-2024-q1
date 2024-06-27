import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from '../../../../.generated/Feature.HztlFoundation.model';

export type VideoProps = ComponentProps & HztlPageContent.Video;

export const Default = (props: VideoProps): JSX.Element => {
  const id = props?.params?.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="py-spacing-spacing-7 px-spacing-spacing-4 md:px-spacing-spacing-2"></div>
    </div>
  );
};

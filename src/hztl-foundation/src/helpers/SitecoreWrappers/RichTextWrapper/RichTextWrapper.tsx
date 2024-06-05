// Global
import { RichText, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichTextProps } from '@sitecore-jss/sitecore-jss-nextjs/types/components/RichText';
import React, { useEffect, useState } from 'react';

//Local
import useIsEditing from 'lib/hooks/use-is-editing';
import { srOnlySpan, newTabIcon } from 'helpers/LinkWrapper/LinkWrapper';

const RichTextWrapper = ({ field, editable = true, ...props }: RichTextProps): JSX.Element => {
  const updatedField = useUpdatedRichTextField({ field, editable });
  const isEditing = useIsEditing() && editable;

  const hasValue = !!updatedField?.value;

  // We should only render if it has a value, or if we are editing
  const shouldRender = hasValue || isEditing;

  if (!shouldRender) {
    return <></>;
  }

  return (
    <RichText
      {...props}
      editable={editable}
      field={updatedField}
      className={`rte ${props?.className}`}
      data-component="helpers/richtextwrapper"
    />
  );
};

function useUpdatedRichTextField({ field, editable = true }: RichTextProps) {
  const isEditing = useIsEditing() && editable;

  const [content, setContent] = useState(field?.value);

  const updatedField: RichTextField = {
    value: content || '',
  };

  // Run this client-side because we don't have access to the document server-side
  useEffect(() => {
    const template = document.createElement('template');
    template.innerHTML = field?.value || '';

    // Find all links either either have target="_blank" or appear to be external due to starting with "http"
    const externalLinks = [...template.content.querySelectorAll('a')].filter(
      (a) =>
        a.attributes.getNamedItem('href')?.value.startsWith('http') ||
        a.attributes.getNamedItem('target')?.value === '_blank'
    );
    // Update each external link
    externalLinks.forEach((a) => {
      // Set to open in new tab
      a.setAttribute('target', '_blank');
      // Add Screen Reader text and new tab icon
      a.innerHTML = `${a.innerHTML}${srOnlySpan} ${newTabIcon}`;
    });

    // Update the content
    setContent(template.innerHTML);
  }, [field?.value]);

  return isEditing ? field : updatedField;
}

export default RichTextWrapper;

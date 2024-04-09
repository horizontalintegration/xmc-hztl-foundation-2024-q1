// Global
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichTextProps } from '@sitecore-jss/sitecore-jss-nextjs/types/components/RichText';
import React from 'react';

//Local
import useIsEditing from 'lib/use-is-editing';

const RichTextWrapper = ({ field, editable = true, ...props }: RichTextProps): JSX.Element => {
  /**
   * Hook for experience editor
   */
  const isEditing = useIsEditing();

  // If there's no text, the only render it if it is editable and we are editing.
  // Otherwise don't render anything
  if (!field?.value) {
    if (isEditing && editable) {
      return <RichText {...props} editable={editable} field={field} />;
    }
    return <></>;
  }

  // Just a pass through if it's EE.
  if (isEditing) {
    return (
      <div className="richtext-wrapper">
        <RichText {...props} editable={editable} field={field} />
      </div>
    );
  }
  /**
   * If not EE, use the updated field value
   */
  return (
    <div className="richtext-wrapper" data-component="helpers/a11y/richtextwrapper">
      <RichText {...props} editable={editable} field={field} />
    </div>
  );
};

export default RichTextWrapper;

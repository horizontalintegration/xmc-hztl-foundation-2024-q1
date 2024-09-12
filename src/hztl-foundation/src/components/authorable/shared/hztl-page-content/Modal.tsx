// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import ModalWrapper from 'helpers/GenericWrappers/ModalWrapper/ModalWrapper';
import useIsEditing from 'lib/hooks/use-is-editing';

export type ModalProps = ComponentProps & HztlPageContent.Modal;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['border', 'flex', 'flex-col', 'gap-5', 'p-5', 'rounded'],
  },
});

/*
 * RENDERING
 */

const Modal = (props: ModalProps): JSX.Element => {
  const { id, label, openOnLoad, size, title } = props?.fields || {};
  const { DynamicPlaceholderId } = props?.params || {};

  const isEditing = useIsEditing();

  const placeholderKey = `modal-${DynamicPlaceholderId}`;

  if (!props?.fields) return <></>;

  if (isEditing) {
    const { base } = TAILWIND_VARIANTS();

    return (
      <>
        <div className={base()}>
          <h2>{title?.value}</h2>
          <div>
            <Placeholder name={placeholderKey} rendering={props.rendering} />
          </div>
        </div>
        <p>URL Hash: {`#modal-${id?.value}`}</p>
      </>
    );
  }

  return (
    <ModalWrapper
      content={<Placeholder name={placeholderKey} rendering={props.rendering} />}
      id={id?.value}
      label={label?.value}
      openOnLoad={openOnLoad?.value}
      size={size?.fields?.value}
      title={title?.value}
    />
  );
};

export default Modal;

// Global
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import useIsEditing from 'lib/hooks/use-is-editing';
import { HztlPageContent } from 'src/.generated/Feature.HztlFoundation.model';

// Local
import ModalWrapper, { ModalSize } from 'helpers/GenericWrappers/ModalWrapper/ModalWrapper';
import PlainTextWrapper from 'helpers/SitecoreWrappers/PlainTextWrapper/PlainTextWrapper';

export type ModalProps = ComponentProps & HztlPageContent.Modal;

const TAILWIND_VARIANTS = tv({
  slots: {
    base: ['border', 'component', 'flex', 'flex-col', 'gap-5', 'p-5', 'rounded'],
    urlHash: ['my-2'],
  },
});

/*
 * RENDERING
 */

const Modal = (props: ModalProps): JSX.Element => {
  const { label, name, openOnLoad, size, title } = props?.fields || {};
  const { DynamicPlaceholderId } = props?.params || {};

  const isEditing = useIsEditing();

  const placeholderKey = `modal-${DynamicPlaceholderId}`;

  if (!props?.fields) return <></>;

  if (isEditing) {
    const { base, urlHash } = TAILWIND_VARIANTS();

    return (
      <>
        <div className={base()} data-component="authorable/shared/hztl-page-content/modal">
          <PlainTextWrapper editable field={title} tag="h2" />
          <div>
            <Placeholder name={placeholderKey} rendering={props.rendering} />
          </div>
        </div>
        <p className={urlHash()}>
          URL Hash: #modal-
          <PlainTextWrapper editable field={name} tag="span" />
        </p>
      </>
    );
  }

  return (
    <ModalWrapper
      content={<Placeholder name={placeholderKey} rendering={props.rendering} />}
      data-component="authorable/shared/hztl-page-content/modal"
      id={name?.value}
      label={label?.value}
      openOnLoad={openOnLoad?.value}
      size={size?.value as ModalSize}
      title={title?.value}
    />
  );
};

export default Modal;

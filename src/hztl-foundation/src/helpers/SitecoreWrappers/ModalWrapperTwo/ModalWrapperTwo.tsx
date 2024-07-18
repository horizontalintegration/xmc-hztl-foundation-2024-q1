// Global
import { sendGTMEvent } from '@next/third-parties/google';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { tv } from 'tailwind-variants';

// Lib
import { ComponentProps } from 'lib/component-props';
import { GtmEvent } from 'lib/utils/gtm-utils';

// Local
import { SvgIcon } from 'helpers/SvgIconWrapper';

type ModalSize = 'extra-large' | 'fluid' | 'large' | 'medium' | 'small' | undefined;

export type ModalWrapperTwoProps = ComponentProps & {
  contentChildren: ReactNode;
  fields: {
    title: {
      value: string;
    };
  };
  gtmEvent: GtmEvent;
  openOnLoad: boolean;
  size: ModalSize;
  triggerChildren: ReactNode;
};

// React Modal Defaults
Modal.defaultStyles = {
  overlay: {
    backgroundColor: 'rgba(47, 45, 46, 0.75)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
};

// Tailwind Variants
const modalWrapperStyles = tv({
  slots: {
    body: [],
    closeButton: ['h-6', 'w-6'],
    closeButtonIcon: [],
    modal: [
      'absolute',
      'bg-white',
      'border',
      'border-mild-gray',
      'flex',
      'flex-col',
      'gap-5',
      'left-2/4',
      'm-auto',
      'outline-none',
      'p-5',
      'rounded',
      'top-2/4',
      '-translate-x-2/4',
      '-translate-y-2/4',
    ],
    titleBar: ['flex', 'flex-row'],
    titleBarText: ['grow'],
    trigger: [],
  },
  variants: {
    size: {
      'extra-large': {
        modal: ['h-auto', 'max-h-[540px]', 'w-full', 'md:max-h-[680px]', 'md:w-[75vw]'],
      },
      fluid: {
        modal: ['h-auto', 'w-auto'],
      },
      large: {
        modal: ['h-auto', 'max-h-[540px]', 'w-full', 'md:max-h-[680px]', 'md:w-[50vw]'],
      },
      medium: {
        modal: ['h-auto', 'max-h-[540px]', 'w-full', 'md:max-h-[540px]', 'md:w-[33vw]'],
      },
      small: {
        modal: ['h-auto', 'max-h-[540px]', 'w-full', 'md:max-h-[432px]', 'md:w-[25vw]'],
      },
    },
  },
});

const ModalWrapperTwo = (props: ModalWrapperTwoProps): JSX.Element => {
  const { contentChildren, gtmEvent, openOnLoad = false, size, triggerChildren } = props || {};
  const { title } = props?.fields || {};
  const { DynamicPlaceholderId } = props?.params || {};

  const { body, closeButton, closeButtonIcon, modal, titleBar, titleBarText, trigger } =
    modalWrapperStyles({
      size: size,
    });

  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /*
   * State
   */

  const [isOpen, setIsOpen] = useState(false);

  /*
   * Event Handlers
   */

  const handleOnAfterClose = () => {
    return;
  };

  const handleOnAfterOpen = () => {
    const gtmEventInner = {
      ...gtmEvent,
      'gtm.element.dataset.gtmComponentName': 'helpers-sitecorewrappers-modalwrappertwo',
      'gtm.element.dataset.gtmDatasourceId': DynamicPlaceholderId,
    };

    sendGTMEvent(gtmEventInner);
  };

  const handleOnCloseModal = () => {
    setIsOpen(false);

    const gtmEventInner = {
      ...gtmEvent,
      'gtm.element.dataset.gtmComponentName': 'helpers-sitecorewrappers-modalwrappertwo',
      'gtm.element.dataset.gtmDatasourceId': DynamicPlaceholderId,
    };

    sendGTMEvent(gtmEventInner);
  };

  const handleOnOpenModal = () => {
    setIsOpen(true);
  };

  const handleOnRequestClose = () => {
    return;
  };

  /*
   * Lifecycle
   */

  useEffect(() => {
    openOnLoad && handleOnOpenModal();
  }, [openOnLoad]);

  /*
   * Rendering
   */

  return (
    <>
      <button
        aria-controls={`modal-${DynamicPlaceholderId}`}
        className={trigger()}
        id={`modal-${DynamicPlaceholderId}-button`}
        onClick={() => handleOnOpenModal()}
      >
        {triggerChildren}
      </button>
      <Modal
        ariaHideApp={false}
        className={modal()}
        closeTimeoutMS={0}
        contentLabel={title?.value}
        contentRef={contentRef.current}
        data-component="helpers-sitecorewrappers-modalwrappertwo"
        id={`modal-${DynamicPlaceholderId}`}
        isOpen={isOpen}
        onAfterClose={handleOnAfterClose}
        onAfterOpen={handleOnAfterOpen}
        onRequestClose={handleOnRequestClose}
        overlayRef={overlayRef.current}
        role="dialog"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        shouldReturnFocusAfterClose={true}
      >
        <div className={titleBar()}>
          <h2 className={titleBarText()}>{title?.value}</h2>
          <button
            aria-label="Close Modal Button"
            className={closeButton()}
            onClick={handleOnCloseModal}
            role="button"
          >
            <SvgIcon
              aria-hidden="true"
              aria-label="Close Modal Button Icon"
              className={closeButtonIcon()}
              icon="close"
              size="lg"
            />
          </button>
        </div>
        <div className={body()}>{contentChildren}</div>
      </Modal>
    </>
  );
};

export default ModalWrapperTwo;

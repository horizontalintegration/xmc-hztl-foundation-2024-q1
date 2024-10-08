// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Modal, { ModalProps } from 'components/authorable/shared/hztl-page-content/Modal';
import defaultData from './Modal.mock-data';
import ButtonWrapper from 'helpers/SitecoreWrappers/ButtonWrapper/ButtonWrapper';

const meta: Meta<ModalProps> = {
  argTypes: {
    'fields.id.value': {
      description: 'The unique identifier for the modal.',
      table: {
        category: 'fields',
      },
    },
    'fields.label.value': {
      description: 'The `aria-label` of the modal.',
      table: {
        category: 'fields',
      },
    },
    'fields.name.value': {
      description: 'A unique identifire for the modal.',
      table: {
        category: 'fields',
      },
    },
    'fields.openOnLoad.value': {
      control: 'boolean',
      defaultValue: false,
      description: 'A flag that determines if the modal should be opened on page load.',
      table: {
        category: 'fields',
      },
    },
    'fields.size.value': {
      control: 'select',
      defaultValue: 'large',
      description: 'The size variant of the modal.',
      options: ['extra-large', 'large', 'medium', 'small', 'fluid'],
      table: {
        category: 'fields',
      },
    },
    'fields.title.value': {
      control: 'select',
      description: 'A `ReactNode` representing the title of the modal.',
      mapping: {
        Title: 'Modal Title',
        'Title with Markup': (
          <>
            Modal Title with HTML Markup<sup>®</sup>
          </>
        ),
      },
      options: ['Title', 'Title with Markup'],
      table: {
        category: 'fields',
      },
    },
    'fields.trigger.value': {
      control: 'select',
      description: "A `ReactNode` representing the content of the modal's trigger.",
      mapping: {
        Anchor: <a>A text link that opens a modal.</a>,
        Button: (
          <ButtonWrapper
            ctaVariant="primary"
            id="modal-2845070A-AEBD-4B45-A59D-88269B081204-button"
            text="Modal Trigger"
            title="Modal Trigger"
            type="button"
          />
        ),
      },
      options: ['Anchor', 'Button'],
      table: {
        category: 'fields',
      },
    },
    'params.DynamicPlaceholderId': {
      table: {
        category: 'params',
      },
    },
    'rendering.componentName': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.dataSource': {
      table: {
        category: 'rendering',
      },
    },
    'rendering.placeholders.modal-1': {
      table: {
        category: 'rendering',
      },
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The modal component uses a JSS Placeholder to define its content, and listens for changes to the URL hash and a specific hash value to trigger the modal to open. In editing mode, the modal's content will be presented inline instead of within a modal.

## Usage
Use the Modal component when you need to present content in a way that grabs the user's focus and covers other page content. 

** NOTE: Due to Storybook's use of the iframe tag, Modal stories must be opened in a new tab to function correctly. **
`,
      },
    },
    controls: { sort: 'requiredFirst' },
  },
  title: 'Components/Authorable/Shared/hztl-page-content/Modal',
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return (
      <>
        <a href={`#modal-${defaultData?.fields?.name?.value}`}>Remote Trigger</a>
        <Modal {...(expandObj({ ...args }) as ModalProps)} />
      </>
    );
  },
};

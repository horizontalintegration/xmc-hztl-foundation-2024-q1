// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ButtonWrapper from 'helpers/SitecoreWrappers/ButtonWrapper/ButtonWrapper';
import VideoWrapper from 'helpers/SitecoreWrappers/VideoWrapper/VideoWrapper';

// Local
import ModalWrapperTwo, {
  ModalWrapperTwoProps,
} from 'helpers/SitecoreWrappers/ModalWrapperTwo/ModalWrapperTwo';
import defaultData, { embeddedVideoData, modalWithVideotData } from './ModalWrapperTwo.mock-data';

const meta: Meta<ModalWrapperTwoProps> = {
  argTypes: {
    contentChildren: {
      control: 'select',
      description: "A `ReactNode` representing the content of the modal's body.",
      mapping: {
        Text: (
          <>
            <h1>Eiusmod Tempor Incididunt</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </>
        ),
        Video: <VideoWrapper {...embeddedVideoData} />,
      },
      options: ['Text', 'Video'],
    },
    openOnLoad: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'select',
      defaultValue: 'large',
      description: 'The size variant of the modal.',
      options: ['extra-large', 'large', 'medium', 'small', 'fluid'],
    },
    triggerChildren: {
      control: 'select',
      description: "A `ReactNode` representing the content of the modal's trigger.",
      mapping: {
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
      options: ['Button'],
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } as any,
  parameters: { controls: { sort: 'requiredFirst' } },
  tags: ['autodocs'],
  title: 'Helpers/Sitecore Wrappers/Modal Wrapper Two',
};

export default meta;

type Story = StoryObj<ModalWrapperTwoProps>;

export const Default: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return <ModalWrapperTwo {...expandObj({ ...args })} />;
  },
};

export const WithVideo: Story = {
  args: {
    ...flattenObj(modalWithVideotData),
  },
  name: 'Modal with Video',
  render: (args) => {
    return <ModalWrapperTwo {...expandObj({ ...args })} />;
  },
};

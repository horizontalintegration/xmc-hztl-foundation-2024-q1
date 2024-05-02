// Global
import { Meta, StoryObj } from '@storybook/react';

// Local
import Button from 'helpers/Button/Button';
import defaultData, { buttonAsAnchorData } from './Button.mock-data';

const TARGETS = ['_blank', '_self', '_parent', '_top'];

const meta: Meta<typeof Button> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'A flag indicated the enabled/disabled state of the button.',
    },
    fitContent: {
      control: 'boolean',
      defaultValue: true,
      description: 'Determines if the button has a minimum width or sizes to fit its content.',
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
      description:
        'A flag indicating wether or not the button should take up 100% the width of its parent container.',
    },
    href: {
      description: 'A URL to be used as the destination when the button is used as an anchor tag.',
    },
    id: {
      description: 'The value of the "id" attribute to be added to the rendered element.',
    },
    label: {
      defaultValue: 'Button',
      description: "The button's label.",
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      description: 'A flag indicated the not loading/loading state of the button.',
    },
    onClick: {
      description: 'A function defining a click handler for the button.',
    },
    srOnlyText: {
      description: 'The value of the screen reader-only text to be applied to teh renered element.',
    },
    tag: {
      control: 'select',
      defaultValue: 'button',
      description: 'The HTML tag as which the button will be rendered.',
      options: ['a', 'button'],
    },
    target: {
      control: 'select',
      description: 'The target window for the "href" when the button is used as an anchor tag.',
      options: TARGETS,
    },
    title: {
      description: 'The value of the "title" attribute to be added to the rendered element.',
    },
  },
  component: Button,
  parameters: {
    docs: {
      controls: {
        sort: 'requiredFirst',
      },
    },
  },
  tags: ['autodocs', 'requiredFirst'],
  title: 'Helpers/General/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};

export const ButtonAsAnchor: Story = {
  args: {
    ...buttonAsAnchorData,
  },
};

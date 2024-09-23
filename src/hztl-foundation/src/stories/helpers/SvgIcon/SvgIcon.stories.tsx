// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SvgIcon, { SvgIconProps } from 'helpers/SvgIcon/SvgIcon';
import defaultData from './SvgIcon.mock-data';

const meta: Meta<SvgIconProps> = {
  argTypes: {
    className: {
      description: 'Arbitrary CSS classes to be applied to the SVG.',
    },
    fill: {
      control: 'radio',
      defaultValue: 'currentColor',
      description: 'The fill color to be applied to the SVG.',
      options: ['currentColor', 'none'],
    },
    icon: {
      control: 'select',
      defaultValue: 'arrow-left',
      description: 'The SVG asset to be presented to the user.',
      options: [
        'arrow-left',
        'arrow-right',
        'chevron-down',
        'chevron-up',
        'close',
        'download',
        'magnifier',
        'new-window',
        'pause',
        'play',
        'plus',
        'refine',
        'sorting',
      ],
    },
    size: {
      control: 'select',
      defaultValue: 'sm',
      description: 'The rendered size of the SVG.',
      options: ['xxs', 'xs', 'sm', 'md', 'em', 'lg'],
    },
  },
  component: SvgIcon,
  parameters: { controls: { sort: 'requiredFirst' } },
  tags: ['autodocs'],
  title: 'Helpers/SVG Icon Wrapper',
};

export default meta;

type Story = StoryObj<SvgIconProps>;

export const Default: Story = {
  args: {
    ...flattenObj(defaultData),
  },
  name: 'Default',
  render: (args) => {
    return <SvgIcon {...expandObj({ ...args })} />;
  },
};

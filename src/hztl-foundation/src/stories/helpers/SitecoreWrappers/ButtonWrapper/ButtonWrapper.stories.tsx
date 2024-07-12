// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ButtonWrapper, {
  ButtonWrapperProps,
} from 'helpers/SitecoreWrappers/ButtonWrapper/ButtonWrapper';
import defaultData, { secondaryData } from './ButtonWrapper.mock-data';

const meta: Meta<ButtonWrapperProps> = {
  title: 'Helpers/Sitecore Wrappers/Button Wrapper',
  component: ButtonWrapper,
  argTypes: {},
};

export default meta;

type Story = StoryObj<ButtonWrapperProps>;

export const Default: Story = {
  render: (args) => {
    return <ButtonWrapper {...expandObj({ ...args })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

export const Secondary: Story = {
  render: (args) => {
    return <ButtonWrapper {...expandObj({ ...args })} />;
  },
  args: {
    ...flattenObj(secondaryData),
  },
};

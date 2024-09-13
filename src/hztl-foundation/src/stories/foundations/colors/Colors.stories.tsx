// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import { default as ColorsComponent } from './Colors';

const meta: Meta<typeof ColorsComponent> = {
  title: 'Foundations/Colors',
  component: ColorsComponent,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorsComponent>;

export const Colors: Story = {
  render: (_, context) => {
    return <ColorsComponent theme={context.globals.theme} />;
  },
};

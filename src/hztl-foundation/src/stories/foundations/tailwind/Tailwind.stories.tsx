// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import { default as TailwindComponent } from './Tailwind';

const meta: Meta<typeof TailwindComponent> = {
  title: 'Foundations/Tailwind',
  component: TailwindComponent,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TailwindComponent>;

export const Tailwind: Story = {
  render: (_, context) => {
    return <TailwindComponent theme={context.globals.theme} />;
  },
};

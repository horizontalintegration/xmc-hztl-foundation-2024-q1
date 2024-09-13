// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import { default as ScreensComponent } from './Screens';

const meta: Meta<typeof ScreensComponent> = {
  title: 'Foundations/Screens',
  component: ScreensComponent,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScreensComponent>;

export const Screens: Story = {
  render: (_, context) => {
    return <ScreensComponent theme={context.globals.theme} />;
  },
};

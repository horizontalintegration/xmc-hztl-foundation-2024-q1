// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import { default as TypographyComponent } from './Typography';

const meta: Meta<typeof TypographyComponent> = {
  title: 'Foundations/Typography',
  component: TypographyComponent,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TypographyComponent>;

export const Typography: Story = {
  render: (_, context) => {
    return <TypographyComponent theme={context.globals.theme} />;
  },
};

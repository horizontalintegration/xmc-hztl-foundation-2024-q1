/* eslint-disable prettier/prettier */
// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import defaultData from './Header.mock-data';
import { Default } from 'components/authorable/shared/site-structure/Header/HeaderGraphql';
import { HeaderProps } from 'components/authorable/shared/site-structure/Header/headerInterface';

const meta: Meta<typeof Default> = {
  title: 'Components/Authorable/shared/site-structure/Header',
  component: Default,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Default>;

export const Header: Story = {
  render: (args) => {
    return <Default {...(expandObj({ ...args }) as HeaderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

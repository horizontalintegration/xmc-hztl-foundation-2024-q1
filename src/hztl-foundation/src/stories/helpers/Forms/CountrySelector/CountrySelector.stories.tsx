import { Meta, StoryObj } from '@storybook/react';
import CountrySelector from 'helpers/Forms/CountrySelector';
import { CountrySelectorInterface } from 'components/authorable/shared/site-structure/Header/headerInterface';
import { mockCountryData } from './CountrySelector.mock-data';

// Wrapper component to handle state
const CountrySelectorWithState = (args: CountrySelectorInterface) => {
  return (
    <div className="inline-flex border-x border-y shadow">
      <CountrySelector {...args} />
    </div>
  );
};

// Storybook meta configuration
const meta: Meta<typeof CountrySelector> = {
  title: 'Helpers/Forms/Country Selector',
  component: CountrySelector,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The Country Selector component allows users to select a country from a predefined list. It provides a convenient dropdown interface for displaying country names alongside their corresponding flags. When a country is selected, it updates the state accordingly and can trigger specific actions, such as updating the site's language or region-specific settings.
## Usage
The Country Selector is ideal for websites or applications that require users to specify their country or region, such as e-commerce platforms, travel booking systems, or multi-lingual sites. It can help customize the user experience by adapting content or services based on the selected country. The component is designed with accessibility in mind and provides a clear visual indication of the selected country, enhancing usability.`,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<CountrySelectorInterface> = {
  args: {
    countryData: mockCountryData,
  },
  render: (args) => <CountrySelectorWithState {...args} />,
};

export const Canada: StoryObj<CountrySelectorInterface> = {
  args: {
    countryData: mockCountryData,
  },
  render: (args) => <CountrySelectorWithState {...args} />,
};

export const Mexico: StoryObj<CountrySelectorInterface> = {
  args: {
    countryData: mockCountryData,
  },
  render: (args) => <CountrySelectorWithState {...args} />,
};

export const UAE: StoryObj<CountrySelectorInterface> = {
  args: {
    countryData: mockCountryData,
  },
  render: (args) => <CountrySelectorWithState {...args} />,
};

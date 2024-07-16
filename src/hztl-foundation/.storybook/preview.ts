import type { Preview } from '@storybook/react';
import './storybook-override.css';
import 'assets/app.css';
import { componentGlobalWrapper, i18nWrapper } from './decorators';

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ['autodocs'],
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: 'ignore',
      },
      highlighter: {
        showLineNumbers: true,
        wrapLines: false,
      },
    },
  },

  tags: ['autodocs'],
};

export const decorators = [componentGlobalWrapper, i18nWrapper];

export default preview;

import type { Preview } from '@storybook/react';
import './storybook-override.css'
import 'assets/app.css';

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

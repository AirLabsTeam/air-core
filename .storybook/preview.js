import { ThemeProvider } from 'styled-components';

import { theme } from '../packages/zephyr/src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

const ThemeWrapper = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [ThemeWrapper];

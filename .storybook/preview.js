import React from 'react';
import { ThemeProvider } from 'styled-components';

import '@reach/dialog/styles.css';

import { theme } from '../packages/zephyr/src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

const ThemeWrapper = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [ThemeWrapper];

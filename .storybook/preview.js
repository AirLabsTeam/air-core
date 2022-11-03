import { ThemeProvider } from 'styled-components';

import { theme } from '../packages/zephyr/src/theme';
import { TooltipProvider } from '../packages/zephyr/src/Tooltip';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

const ThemeWrapper = (Story) => (
  <TooltipProvider>
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  </TooltipProvider>
);

export const decorators = [ThemeWrapper];

import { RenderOptions, render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/theme';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, {
    wrapper: AllTheProviders as React.ComponentType,
    ...options,
  });

// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export { customRender as render };

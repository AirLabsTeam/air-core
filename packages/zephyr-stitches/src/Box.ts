import { ComponentProps } from 'react';

import { CSS, styled } from './stitches.config';

export type BoxProps = ComponentProps<typeof Box> & {
  as?: any;
  css?: CSS;
};

export const Box = styled('div', {
  margin: 0,
  boxSizing: 'border-box',
});

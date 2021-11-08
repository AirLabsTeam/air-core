import { ComponentProps } from 'react';
import { CSS, styled } from './stitches.config';
import { Button } from './Button';

export type RootProps = ComponentProps<typeof Root> & { css?: CSS };

export const Root = styled(Button, {
  width: 40,
  height: 40,

  variants: {
    size: {
      ['extra-small']: {
        width: 24,
        height: 24,
        paddingX: 0,
      },
      small: {
        width: 32,
        height: 32,
        paddingX: 0,
      },
      medium: {
        width: 40,
        height: 40,
        paddingX: 0,
      },
      large: {
        width: 48,
        height: 48,
        paddingX: 0,
      },
    },
  },
});

export const Icon = styled('div', {
  variants: {
    size: {
      ['extra-small']: {
        width: 16,
        height: 16,
      },
      small: {
        width: 16,
        height: 16,
      },
      medium: {
        width: 24,
        height: 24,
      },
      large: {
        width: 24,
        height: 24,
      },
    },
  },
});

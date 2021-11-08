import { ComponentProps } from 'react';
import { styled } from './stitches.config';

export type RootProps = ComponentProps<typeof Root>;

export const Root = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 100,
  fontFamily: '$copy',
  fontFeatureSettings: `'case' on`,
  fontWeight: '$medium',
  transition: 'background-color 0.2s ease',

  '&[data-clickable]': {
    cursor: 'pointer',
  },

  variants: {
    appearance: {
      filled: {
        backgroundColor: 'rgba(38, 38, 38, 0.1)', // pigeon800 @ 10%
        border: 'none',
        color: '$pigeon600',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: 'rgba(38, 38, 38, 0.15)', // pigeon800 @ 10%
          },
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px dashed $colors$pigeon100',
        color: '$pigeon500',

        '&[data-clickable]': {
          '&:hover': {
            borderColor: '$pigeon200',
          },
        },
      },
    },
    size: {
      small: {
        height: 24,
        paddingX: 8,
        fontSize: 12,
        letterSpacing: 'initial',
        lineHeight: 1.5,
      },
      medium: {
        height: 32,
        paddingX: 12,
        fontSize: 14,
        letterSpacing: '-0.006em',
        lineHeight: '20px',
      },
    },
  },

  defaultVariants: {
    appearance: 'filled',
    size: 'small',
  },
});

export const Adornment = styled('div', {});

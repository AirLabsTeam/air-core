import { ComponentProps } from 'react';
import { styled } from './stitches.config';

export type RootProps = ComponentProps<typeof Root>;

export const Root = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 4,
  fontFamily: '$copy',
  fontFeatureSettings: `'case' on`,
  fontWeight: '$medium',
  transition: 'background-color 0.2s ease',

  '&[data-clickable]': {
    cursor: 'pointer',
  },

  variants: {
    color: {
      grey: {
        backgroundColor: '$pigeon100',
        color: '$pigeon700',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$pigeon200',
          },
        },
      },
      teal: {
        backgroundColor: '$peacock100',
        color: '$jay900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$peacock200',
          },
        },
      },
      red: {
        backgroundColor: '$flamingo100',
        color: '$flamingo900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$flamingo200',
          },
        },
      },
      yellow: {
        backgroundColor: '$canary050',
        color: '$canary900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$canary100',
          },
        },
      },
      blue: {
        backgroundColor: '$macaw060',
        color: '$jay900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$macaw080',
          },
        },
      },
      purple: {
        backgroundColor: '$cuckoo200',
        color: '$jay900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$cuckoo300',
          },
        },
      },
      green: {
        backgroundColor: '$parrot025',
        color: '$peacock900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$parrot050',
          },
        },
      },
      orange: {
        backgroundColor: '#FFD7A4',
        color: '$canary900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '#FFC579',
          },
        },
      },
      pink: {
        backgroundColor: '$cockatoo025',
        color: '$flamingo900',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '#cockatoo050',
          },
        },
      },
      none: {
        backgroundColor: 'transparent',
        color: '$pigeon400',

        '&[data-clickable]': {
          '&:hover': {
            backgroundColor: '$pigeon050',
          },
        },
      },
    },
    size: {
      small: {
        height: 24,
        paddingX: 6,
        fontSize: 12,
        letterSpacing: 'initial',
        lineHeight: 1.5,
      },
      medium: {
        height: 32,
        paddingX: 8,
        fontSize: 14,
        letterSpacing: '-0.006em',
        lineHeight: '20px',
      },
      large: {
        height: 36,
        paddingX: 10,
        fontSize: 16,
        letterSpacing: '-0.011em',
        lineHeight: 1.5,
      },
    },
  },

  defaultVariants: {
    color: 'grey',
    size: 'small',
  },
});

export const Adornment = styled('div', {
  variants: {
    side: {
      left: {
        marginLeft: -4,
        marginRight: 4,
      },
      right: {
        marginLeft: 4,
        marginRight: -4,
      },
    },

    size: {
      small: {},
      medium: {},
      large: {},
    },
  },

  compoundVariants: [
    {
      side: 'left',
      size: 'small',
      css: {
        marginLeft: -2,
        marginRight: 2,
      },
    },
    {
      side: 'right',
      size: 'small',
      css: {
        marginLeft: 2,
        marginRight: -2,
      },
    },
  ],

  defaultVariants: {
    side: 'right',
    size: 'small',
  },
});

import { ComponentProps } from 'react';
import { CSS, darkTheme, keyframes, styled } from './stitches.config';

export type RootProps = ComponentProps<typeof Root> & { css?: CSS };

export const Root = styled('button', {
  appearance: 'none',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$button$test',
  border: 0,
  borderRadius: 4,
  margin: 0,
  boxSizing: 'border-box',
  fontFamily: '$copy',
  fontWeight: '$semibold',
  lineHeight: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease',

  '&:hover': {
    textDecoration: 'none',
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 2px $colors$focus',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&[data-loading]': {
    cursor: 'progress',
  },

  variants: {
    appearance: {
      filled: {
        '&:disabled:not([data-loading])': {
          backgroundColor: '$pigeon025',
          color: '$pigeon300',

          [`.${darkTheme} &`]: {
            backgroundColor: '$jay450',
            color: '$white',
          },
        },
      },
      ghost: {
        backgroundColor: 'transparent',

        '&:disabled:not([data-loading])': {
          backgroundColor: 'transparent',
          color: '$pigeon300',

          [`.${darkTheme} &`]: {
            backgroundColor: 'transparent',
            color: '$pigeon500',
          },
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid $colors$pigeon200',

        '&:disabled:not([data-loading])': {
          backgroundColor: 'transparent',
          border: '1px solid $colors$pigeon200',
          color: '$pigeon500',

          [`.${darkTheme} &`]: {
            backgroundColor: 'transparent',
            border: '1px solid $colors$pigeon600',
            color: '$pigeon500',
          },
        },
      },
    },

    color: {
      blue: {},
      grey: {},
      destructive: {},
    },

    size: {
      ['extra-small']: {
        height: 24,
        paddingX: 8,
        fontSize: 12,
      },
      small: {
        height: 32,
        paddingX: 10,
        fontSize: 14,
      },
      medium: {
        height: 40,
        paddingX: 12,
        fontSize: 16,
      },
      large: {
        height: 48,
        paddingX: 24,
        fontSize: 16,
      },
    },
  },

  compoundVariants: [
    {
      appearance: 'filled',
      color: 'blue',
      css: {
        backgroundColor: '$jay500',
        border: 0,
        color: '$white',

        [`.${darkTheme} &`]: {
          backgroundColor: '$jay350',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: '$jay700',

          [`.${darkTheme} &`]: {
            backgroundColor: '$jay400',
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: '$jay700',

          [`.${darkTheme} &`]: {
            backgroundColor: '$jay450',
          },
        },
      },
    },
    {
      appearance: 'filled',
      color: 'grey',
      css: {
        backgroundColor: '$pigeon050',
        color: '$pigeon600',

        [`.${darkTheme} &`]: {
          backgroundColor: 'rgba(220, 220, 220, 0.15)', // pigeon100 @ 15%
        },

        '&:hover:not([data-loading])': {
          backgroundColor: '$pigeon100',

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(220, 220, 220, 0.25)', // pigeon100 @ 25%
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: '$pigeon200',
          color: '$pigeon700',

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(220, 220, 220, 0.25)', // pigeon100 @ 25%
          },
        },
      },
    },
    {
      appearance: 'filled',
      color: 'destructive',
      css: {
        backgroundColor: '$flamingo600',
        color: '$white',

        [`.${darkTheme} &`]: {
          backgroundColor: '$flamingo500',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: '$flamingo700',

          [`.${darkTheme} &`]: {
            backgroundColor: '$flamingo600',
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: '$flamingo800',

          [`.${darkTheme} &`]: {
            backgroundColor: '$flamingo700',
          },
        },
      },
    },
    {
      appearance: 'ghost',
      color: 'blue',
      css: {
        color: '$jay600',

        [`.${darkTheme} &`]: {
          color: '$jay200',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: 'rgba(46, 119, 255, 0.15)', // jay300 @ 15%
          color: '$jay600',

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(111, 162, 255, 0.15)', // jay200 @ 15%
            color: '$jay150',
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: 'rgba(46, 119, 255, 0.3', // jay300 @ 30%
          color: '$jay600',

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(111, 162, 255, 0.25)', // jay200 @ 25%
            color: '$jay150',
          },
        },
      },
    },
    {
      appearance: 'ghost',
      color: 'grey',
      css: {
        color: '$pigeon600',
        [`.${darkTheme} &`]: {
          color: '$pigeon100',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: 'rgba(38, 38, 38, 0.1)', // pigeon800 @ 10%

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(220, 220, 220, 0.15)', // pigeon100 @ 15%
            color: '$pigeon050',
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: 'rgba(38, 38, 38, 0.15)', // pigeon800 @ 15%

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(220, 220, 220, 0.25)', // pigeon100 @ 25%
            color: '$pigeon050',
          },
        },
      },
    },
    {
      appearance: 'ghost',
      color: 'destructive',
      css: {
        color: '$flamingo700',

        [`.${darkTheme} &`]: {
          color: '$flamingo300',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: 'rgba(255, 105, 105, 0.15)', // flamingo300 @ 15%
        },

        '&:active:not([data-loading])': {
          backgroundColor: 'rgba(255, 105, 105, 0.25)', // flamingo300 @ 15%
        },
      },
    },
    {
      appearance: 'outline',
      color: 'blue',
      css: {
        borderColor: '$jay600',
        color: '$jay600',

        [`.${darkTheme} &`]: {
          borderColor: '$jay200',
          color: '$jay200',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: 'rgba(46, 119, 255, 0.15)', // jay300 @ 15%

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(111, 162, 255, 0.15)', // jay200 @ 15%
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: 'rgba(46, 119, 255, 0.3)', // jay300 @ 30%

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(111, 162, 255, 0.25)', // jay200 @ 25%
          },
        },
      },
    },
    {
      appearance: 'outline',
      color: 'grey',
      css: {
        borderColor: '$pigeon500',
        color: '$pigeon600',

        [`.${darkTheme} &`]: {
          borderColor: '$pigeon200',
          color: '$pigeon100',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: 'rgba(38, 38, 38, 0.1)', // pigeon050 @ 10%

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(220, 220, 220, 0.15)', // pigeon100 @ 15%
          },
        },

        '&:active:not([data-loading])': {
          backgroundColor: 'rgba(38, 38, 38, 0.15)', // pigeon050 @ 15%

          [`.${darkTheme} &`]: {
            backgroundColor: 'rgba(220, 220, 220, 0.25)', // pigeon100 @ 25%
          },
        },
      },
    },
    {
      appearance: 'outline',
      color: 'destructive',
      css: {
        borderColor: '$flamingo700',
        color: '$flamingo700',

        [`.${darkTheme} &`]: {
          borderColor: '$flamingo300',
          color: '$flamingo300',
        },

        '&:hover:not([data-loading])': {
          backgroundColor: 'rgba(255, 105, 105, 0.15)', // flamingo300 @ 15%
        },

        '&:active:not([data-loading])': {
          backgroundColor: 'rgba(255, 105, 105, 0.25)', // flamingo300 @ 25%
        },
      },
    },
  ],

  defaultVariants: {
    appearance: 'filled',
    color: 'blue',
    size: 'medium',
  },
});

export const Adornment = styled('div', {
  variants: {
    side: {
      left: {
        marginRight: 4,
        marginLeft: -4,
      },
      right: {
        marginRight: -4,
        marginLeft: 4,
      },
    },
    size: {
      ['extra-small']: {},
      small: {},
      medium: {},
      large: {},
    },
  },

  compoundVariants: [
    {
      side: 'left',
      size: 'extra-small',
      css: {
        marginLeft: -2,
      },
    },
    {
      side: 'right',
      size: 'extra-small',
      css: {
        marginRight: -2,
      },
    },
  ],
});

const bounceKeyframe = keyframes({
  '0%': { transform: 'translate(0, -1.5px)' },
  '50%': { transform: 'translate(0, 1.5px)' },
  '100%': { transform: 'translate(0, -1.5px)' },
});

export const LoaderDot = styled('div', {
  backgroundColor: 'currentColor',
  width: 4,
  height: 4,
  borderRadius: 4,
  animation: `${bounceKeyframe} 980ms ease-in-out`,
});

export const Loader = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  transform: 'translate(-50%, -50%)',

  [`& ${LoaderDot}`]: {
    animation: `${bounceKeyframe} 980ms ease-in-out 0s both infinite`,

    '&:nth-of-type(1)': {
      animationDelay: '0s',
    },

    '&:nth-of-type(2)': {
      marginX: 4,
      animationDelay: '0.14s',
    },

    '&:nth-of-type(3)': {
      animationDelay: '0.28s',
    },

    '@reducedMotion': {
      animationName: 'none',
    },
  },
});

import { TXProp } from '..';

export type ButtonLinkVariantName = 'button-link-blue' | 'button-link-grey';

const _buttonLink: { [key in ButtonLinkVariantName]: TXProp } = {
  'button-link-blue': {
    color: 'jay600',

    '&:hover': {
      color: 'jay700',
    },

    '&:active': {
      color: 'jay800',
    },

    '&:disabled, &.disabled': {
      color: 'jay200',
    },
  },
  'button-link-grey': {
    color: 'pigeon500',

    '&:active': {
      color: 'pigeon600',
    },

    '&:hover': {
      color: 'pigeon500',
    },

    '&:disabled, &.disabled': {
      color: 'pigeon300',
    },
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const buttonLink = _buttonLink as any;

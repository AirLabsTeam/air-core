import { TXProp } from '..';

export type ButtonLinkVariantName = 'button-link-blue' | 'button-link-grey';

const _buttonLink: { [key in ButtonLinkVariantName]: TXProp } = {
  'button-link-blue': {
    color: 'jay500',

    '&:hover': {
      color: 'jay500',
    },

    '&:active': {
      color: 'jay600',
    },

    '&:disabled': {
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

    '&:disabled': {
      color: 'pigeon300',
    },
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const buttonLink = _buttonLink as any;

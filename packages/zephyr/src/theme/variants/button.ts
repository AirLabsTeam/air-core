import { rgba } from 'polished';
import { TXProp } from '..';
import { colors } from '../colors';

export type ButtonVariantName =
  | 'button-filled-blue'
  | 'button-filled-destructive'
  | 'button-filled-grey'
  | 'button-ghost-blue'
  | 'button-ghost-destructive'
  | 'button-ghost-grey'
  | 'button-outline-blue'
  | 'button-outline-grey'
  | 'button-unstyled';

// isLoading state should keep base styles on button-filled variants
const _button: { [key in ButtonVariantName]: TXProp } = {
  'button-filled-blue': {
    backgroundColor: 'jay500',
    border: 'none',
    color: 'white',
    '&:hover:not(.is-loading)': {
      backgroundColor: 'jay600',
    },
    '&:active:not(.is-loading)': {
      backgroundColor: 'jay700',
    },
    '&:disabled:not(.is-loading)': {
      backgroundColor: 'pigeon050',
      color: 'pigeon400',
    },
  },
  'button-filled-destructive': {
    backgroundColor: 'flamingo600',
    border: 'none',
    color: 'white',
    '&:hover:not(.is-loading)': {
      backgroundColor: 'flamingo700',
    },
    '&:active:not(.is-loading)': {
      backgroundColor: 'flamingo800',
    },
    '&:disabled:not(.is-loading)': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'button-filled-grey': {
    backgroundColor: 'pigeon050',
    border: 'none',
    color: 'pigeon600',
    '&:hover:not(.is-loading)': {
      backgroundColor: 'pigeon100',
      color: 'pigeon700',
    },
    '&:active:not(.is-loading)': {
      backgroundColor: 'pigeon200',
      color: 'pigeon700',
    },
    '&:disabled:not(.is-loading)': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'button-ghost-blue': {
    color: 'jay600',
    '&:hover:not(:disabled)': {
      backgroundColor: rgba(colors.jay300, 0.15),
      color: 'jay600',
    },
    '&:active': {
      backgroundColor: rgba(colors.jay300, 0.3),
      color: 'jay600',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'button-ghost-destructive': {
    color: 'flamingo700',
    '&:hover': {
      backgroundColor: 'flamingo050',
    },
    '&:active': {
      color: 'flamingo800',
      backgroundColor: 'flamingo050',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'button-ghost-grey': {
    color: 'pigeon600',
    '&:hover': {
      backgroundColor: 'pigeon050',
      color: 'pigeon700',
    },
    '&:active': {
      backgroundColor: 'pigeon100',
      color: 'pigeon700',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'button-outline-blue': {
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: 'jay200',
    color: 'jay600',
    '&:hover:not(:disabled)': {
      backgroundColor: rgba(colors.jay300, 0.15),
      borderColor: 'transparent',
      color: 'jay600',
    },
    '&:active:not(.is-loading)': {
      backgroundColor: rgba(colors.jay300, 0.3),
      borderColor: 'transparent',
      color: 'jay600',
    },
    '&:disabled:not(.is-loading)': {
      color: 'pigeon300',
      borderColor: 'pigeon100',
    },
  },
  'button-outline-grey': {
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: 'pigeon200',
    color: 'pigeon600',
    '&:hover:not(.is-loading)': {
      backgroundColor: 'pigeon050',
      borderColor: 'transparent',
      color: 'pigeon700',
    },
    '&:active:not(.is-loading)': {
      backgroundColor: 'pigeon100',
      borderColor: 'transparent',
      color: 'pigeon700',
    },
    '&:disabled:not(.is-loading)': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
      borderColor: 'pigeon100',
    },
  },
  'button-unstyled': {
    border: 'none',
    padding: '0',
    height: 'unset',
    '&:hover': {
      backgroundColor: 'pigeon050',
      borderColor: 'transparent',
      color: 'pigeon700',
    },
    '&:active': {
      backgroundColor: 'pigeon100',
      borderColor: 'transparent',
      color: 'pigeon700',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
      borderColor: 'pigeon100',
    },
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const button = _button as any;

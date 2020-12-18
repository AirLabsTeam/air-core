import { TXProp } from '..';

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
    color: 'jay500',
    '&:hover:not(:disabled)': {
      backgroundColor: 'jay050',
      color: 'jay700',
    },
    '&:active': {
      backgroundColor: 'jay100',
      color: 'jay900',
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
    border: '1px solid',
    borderColor: 'jay200',
    color: 'jay500',
    '&:hover:not(:disabled)': {
      backgroundColor: 'jay100',
      borderColor: 'transparent',
      color: 'jay600',
    },
    '&:active:not(.is-loading)': {
      backgroundColor: 'jay200',
      borderColor: 'transparent',
      color: 'jay700',
    },
    '&:disabled:not(.is-loading)': {
      color: 'pigeon300',
      borderColor: 'pigeon100',
    },
  },
  'button-outline-grey': {
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

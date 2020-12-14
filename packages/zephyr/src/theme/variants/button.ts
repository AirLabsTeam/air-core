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

const isLoading = true;

const _button: { [key in ButtonVariantName]: TXProp } = {
  'button-filled-blue': {
    backgroundColor: 'jay500',
    color: 'white',
    '&:hover': {
      backgroundColor: 'jay600',
    },
    '&:active': {
      backgroundColor: 'jay700',
    },
    '&:disabled': !isLoading
      ? {
          backgroundColor: 'pigeon050',
          color: 'pigeon400',
        }
      : {},
  },
  'button-filled-destructive': {
    backgroundColor: 'flamingo600',
    color: 'white',
    '&:hover': {
      backgroundColor: 'flamingo700',
    },
    '&:active': {
      backgroundColor: 'flamingo800',
    },
    '&:disabled': !isLoading
      ? {
          backgroundColor: 'transparent',
          color: 'pigeon300',
        }
      : {},
  },
  'button-filled-grey': {
    backgroundColor: 'pigeon050',
    color: 'pigeon600',
    '&:hover': {
      backgroundColor: 'pigeon100',
      color: 'pigeon700',
    },
    '&:active': {
      backgroundColor: 'pigeon200',
      color: 'pigeon700',
    },
    '&:disabled': !isLoading
      ? {
          backgroundColor: 'transparent',
          color: 'pigeon300',
        }
      : {},
  },
  'button-ghost-blue': {
    color: 'jay500',
    '&:hover': {
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
    '&:hover': {
      backgroundColor: 'jay100',
      borderColor: 'transparent',
      color: 'jay600',
    },
    '&:active': {
      backgroundColor: 'jay200',
      borderColor: 'transparent',
      color: 'jay700',
    },
    '&:disabled': {
      color: 'pigeon300',
      borderColor: 'pigeon100',
    },
  },
  'button-outline-grey': {
    border: '1px solid',
    borderColor: 'pigeon200',
    color: 'pigeon600',
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

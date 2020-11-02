export type ButtonVariantName =
  | 'filled-blue'
  | 'filled-destructive'
  | 'filled-grey'
  | 'ghost-blue'
  | 'ghost-destructive'
  | 'ghost-grey'
  | 'outline-blue'
  | 'outline-grey';

export const button: { [key in ButtonVariantName]: {} } = {
  'filled-blue': {
    backgroundColor: 'jay500',
    color: 'white',
    '&:hover': {
      backgroundColor: 'jay600',
    },
    '&:active': {
      backgroundColor: 'jay700',
    },
    '&:disabled': {
      backgroundColor: 'pigeon0',
      color: 'pigeon400',
    },
  },
  'filled-destructive': {
    backgroundColor: 'flamingo600',
    color: 'white',
    '&:hover': {
      backgroundColor: 'flamingo700',
    },
    '&:active': {
      backgroundColor: 'flamingo800',
    },
  },
  'filled-grey': {
    backgroundColor: 'pigeon0',
    color: 'pigeon600',
    '&:hover': {
      backgroundColor: 'pigeon100',
      color: 'pigeon700',
    },
    '&:active': {
      backgroundColor: 'pigeon200',
      color: 'pigeon700',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'ghost-blue': {
    color: 'jay500',
    '&:hover': {
      backgroundColor: 'jay0',
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
  'ghost-destructive': {
    color: 'flamingo700',
    '&:hover': {
      backgroundColor: 'flamingo0',
    },
    '&:active': {
      color: 'flamingo800',
      backgroundColor: 'flamingo0',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'ghost-grey': {
    color: 'pigeon600',
    '&:hover': {
      backgroundColor: 'pigeon0',
      color: 'pigeon700',
    },
    '&:active': {
      backgroundColor: 'pigeon1',
      color: 'pigeon700',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon300',
    },
  },
  'outline-blue': {
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
  'outline-grey': {
    border: '1px solid',
    borderColor: 'pigeon200',
    color: 'pigeon600',
    '&:hover': {
      backgroundColor: 'pigeon0',
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

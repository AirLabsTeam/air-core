export type VariantName =
  | 'filled-blue'
  | 'filled-destructive'
  | 'filled-grey'
  | 'ghost-blue'
  | 'ghost-destructive'
  | 'ghost-grey'
  | 'outline-blue'
  | 'outline-grey';

export const button: { [key in VariantName]: {} } = {
  'filled-blue': {
    backgroundColor: 'jay5',
    color: 'white',
    '&:hover': {
      backgroundColor: 'jay6',
    },
    '&:active': {
      backgroundColor: 'jay7',
    },
    '&:disabled': {
      backgroundColor: 'pigeon0',
      color: 'pigeon4',
    },
  },
  'filled-destructive': {
    backgroundColor: 'flamingo6',
    color: 'white',
    '&:hover': {
      backgroundColor: 'flamingo7',
    },
    '&:active': {
      backgroundColor: 'flamingo8',
    },
  },
  'filled-grey': {
    backgroundColor: 'pigeon0',
    color: 'pigeon6',
    '&:hover': {
      backgroundColor: 'pigeon1',
      color: 'pigeon7',
    },
    '&:active': {
      backgroundColor: 'pigeon2',
      color: 'pigeon7',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon3',
    },
  },
  'ghost-blue': {
    color: 'jay5',
    '&:hover': {
      backgroundColor: 'jay0',
      color: 'jay7',
    },
    '&:active': {
      backgroundColor: 'jay1',
      color: 'jay9',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon3',
    },
  },
  'ghost-destructive': {
    color: 'flamingo7',
    '&:hover': {
      backgroundColor: 'flamingo0',
    },
    '&:active': {
      color: 'flamingo8',
      backgroundColor: 'flamingo0',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon3',
    },
  },
  'ghost-grey': {
    color: 'pigeon6',
    '&:hover': {
      backgroundColor: 'pigeon0',
      color: 'pigeon7',
    },
    '&:active': {
      backgroundColor: 'pigeon1',
      color: 'pigeon7',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon3',
    },
  },
  'outline-blue': {
    border: '1px solid',
    borderColor: 'jay2',
    color: 'jay5',
    '&:hover': {
      backgroundColor: 'jay1',
      borderColor: 'transparent',
      color: 'jay6',
    },
    '&:active': {
      backgroundColor: 'jay2',
      borderColor: 'transparent',
      color: 'jay7',
    },
    '&:disabled': {
      color: 'pigeon3',
      borderColor: 'pigeon1',
    },
  },
  'outline-grey': {
    border: '1px solid',
    borderColor: 'pigeon2',
    color: 'pigeon6',
    '&:hover': {
      backgroundColor: 'pigeon0',
      borderColor: 'transparent',
      color: 'pigeon7',
    },
    '&:active': {
      backgroundColor: 'pigeon1',
      borderColor: 'transparent',
      color: 'pigeon7',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: 'pigeon3',
      borderColor: 'pigeon1',
    },
  },
};

export type VariantName =
  | 'auxiliary'
  | 'ghost'
  | 'ghost-blue'
  | 'outline'
  | 'outline-blue'
  | 'primary'
  | 'secondary';

export const button: { [key in VariantName]: {} } = {
  auxiliary: {
    backgroundColor: 'flamingo6',
    color: 'white',
    '&:hover': {
      backgroundColor: 'flamingo7',
    },
    '&:active': {
      backgroundColor: 'flamingo8',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
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
  'ghost-blue': {
    backgroundColor: 'transparent',
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
  outline: {
    backgroundColor: 'transparent',
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
  'outline-blue': {
    backgroundColor: 'transparent',
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
  primary: {
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
  secondary: {
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
};

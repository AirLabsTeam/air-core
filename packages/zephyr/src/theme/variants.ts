export type VariantName = 'button';

export const variants: { [key in VariantName]: {} } = {
  button: {
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
    ghost: {},
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
  },
};

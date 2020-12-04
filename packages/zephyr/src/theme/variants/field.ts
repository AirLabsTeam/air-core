import { TXProp } from '..';

export type FieldVariantName = 'field-input';

// Share the field "box" appearance for input, textarea, select, etc.
const commonStyles: TXProp = {
  fontFamily: 'copy',
  fontSize: 14,
  letterSpacing: '-0.015em',
  lineHeight: 1.5,
  border: '1px solid',
  borderColor: 'pigeon200',
  borderRadius: 4,
  width: '100%',
  color: 'pigeon700',
  py: 10,
  px: 12,
  outline: 'none',
  '&:disabled': {
    opacity: 0.75,
  },

  // hover states
  '&:hover:not(:disabled):not(:focus):not([aria-invalid="true"])': {
    borderColor: 'pigeon400',
  },
  '&[aria-invalid="true"], &[aria-invalid="true"]:hover': {
    borderColor: 'flamingo600',
  },
  '&:disabled:hover': {
    cursor: 'not-allowed',
  },

  // focus states
  '&:focus:not(:disabled), &:focus:not([aria-invalid="true"])': {
    borderColor: 'macaw200',
    boxShadow: (theme: any) => `${theme.colors.macaw200} 0 0 0 1px`,
  },
  '&[aria-invalid="true"]:focus': {
    borderColor: 'flamingo600',
    boxShadow: (theme: any) => `${theme.colors.flamingo600} 0 0 0 1px`,
  },
};

const _field: { [key in FieldVariantName]: TXProp } = {
  'field-input': {
    ...commonStyles,
    height: '40px',
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const field = _field as any;

import { TXProp } from '..';

export type FieldVariantName = 'field-input-smol' | 'field-input-chonky';

// Share the field "box" appearance for input, textarea, select, etc.
export const commonFieldStyles: TXProp = {
  fontFamily: 'copy',
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

export const variantStyles = {
  chonky: {
    fontSize: 16,
    height: 48,
  },
  smol: {
    fontSize: 14,
    height: 40,
  },
};

const _field: { [key in FieldVariantName]: TXProp } = {
  'field-input-smol': {
    ...commonFieldStyles,
    ...variantStyles.smol,
  },
  'field-input-chonky': {
    ...commonFieldStyles,
    ...variantStyles.chonky,
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const field = _field as any;

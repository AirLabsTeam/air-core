import { transitions } from 'polished';
import React, { MouseEvent as ReactMouseEvent, forwardRef } from 'react';
import { variant as styledSystemVariant } from 'styled-system';
import { DefaultTheme } from 'styled-components';

import { Box, BoxProps } from './Box';

export type ButtonSize = 'large' | 'medium' | 'small';

export type ButtonVariantName = 'auxiliary' | 'ghost' | 'primary' | 'secondary';

export interface ButtonProps
  extends Omit<BoxProps<HTMLButtonElement>, 'onClick' | 'size' | '__baseStyles'> {
  disabled?: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: ButtonSize;
  variant?: ButtonVariantName;
  theme?: DefaultTheme;
}

export const Button = forwardRef(
  (
    {
      disabled = false,
      size = 'medium',
      theme,
      type = 'button',
      variant = 'primary',
      ...restOfProps
    }: ButtonProps,
    ref,
  ) => {
    return (
      <Box
        __themeKey="variants.button"
        as="button"
        {...restOfProps}
        disabled={disabled}
        type={type}
        ref={ref}
        variant={variant}
        __baseStyles={{
          outline: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 0,
          borderRadius: 4,
          fontFamily: 'copy',
          fontSize: 16,
          fontWeight: 'semibold',
          textDecoration: 'none',
          cursor: 'pointer',
          ...transitions(['background-color', 'color'], '0.2s ease'),
          ...styledSystemVariant({
            prop: 'size',
            variants: {
              large: {
                height: 48,
                px: 24,
                fontSize: 16,
              },
              medium: {
                height: 40,
                px: 16,
                fontSize: 14,
              },
              small: {
                height: 32,
                px: 16,
                fontSize: 12,
              },
            },
          })({ theme, size, ...restOfProps }),
          '&:hover': {
            textDecoration: 'none',
          },
          '&:focus': {
            boxShadow: '0 0 0 2px #5B9CFB',
          },
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
      />
    );
  },
);

Button.displayName = 'Button';

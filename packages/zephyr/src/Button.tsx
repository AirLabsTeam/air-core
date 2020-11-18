import React from 'react';
import { transitions } from 'polished';
import { variant as styledSystemVariant } from 'styled-system';
import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { useTheme } from 'styled-components';
import { Box, BoxStylingProps } from './Box';
import { ButtonVariantName } from './theme/variants/button';

export type ButtonSize = 'large' | 'medium' | 'small';

/** These represent props not readily available on a plain, HTML button */
export type NonSemanticButtonProps = Pick<BoxStylingProps, 'tx'> & {
  size?: ButtonSize;
  variant?: ButtonVariantName;
};

export interface ButtonProps extends PropsWithAs<'button', NonSemanticButtonProps> {}

const Button = forwardRefWithAs<NonSemanticButtonProps, 'button'>(
  (
    {
      as = 'button',
      disabled = false,
      size = 'medium',
      type = 'button',
      variant = 'button-filled-blue',
      ...restOfProps
    }: ButtonProps,
    ref,
  ) => {
    const theme = useTheme();

    return (
      <Box
        as={as}
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
          lineHeight: 1,
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
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${theme.colors.focus}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
        {...restOfProps}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };

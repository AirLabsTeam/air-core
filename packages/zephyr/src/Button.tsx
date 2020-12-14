import React from 'react';
import { transitions } from 'polished';
import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { variant as styledSystemVariant } from 'styled-system';
import styled, { keyframes, useTheme } from 'styled-components';
import { Box, BoxStylingProps } from './Box';
import { ButtonVariantName } from './theme/variants/button';

export type ButtonSize = 'large' | 'medium' | 'small';

/**
 * These represent props that are not already available via React.HTMLAttributes
 */
export type NonSemanticButtonProps = Pick<BoxStylingProps, 'tx'> & {
  size?: ButtonSize;
  variant?: ButtonVariantName;
  /**
   * isLoading is only assignable to `button-filled` variants
   */
  isLoading?: boolean;
};

export interface ButtonProps extends PropsWithAs<'button', NonSemanticButtonProps> {}

/**
 * Diameter and space between Loader Dots are the same number of pixels
 */
const sizeMap: { [key in ButtonSize]: 4 | 5 } = {
  small: 4,
  medium: 4,
  large: 5,
};

const Dot = ({ size }: { size: ButtonSize }) => (
  <Box
    tx={{
      display: 'inline-block',
      backgroundColor: 'currentColor', //get base color, not disabled
      borderRadius: '100%',
      height: sizeMap[size],
      width: sizeMap[size],
      animationFillMode: 'both',
    }}
  ></Box>
);

const wave = keyframes`
  0% {transform: translate(0,0)}
  50% {transform: translate(0,3px)}
  100% {transform: translate(0,0)}
`;

const Loader = styled(Box)<{ isLoading: boolean; size: ButtonSize }>`
  visibility: ${({ isLoading }) => (isLoading ? `visible` : `hidden`)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  div:nth-child(1) {
    animation: ${wave} 0.98s 0s ease-in-out infinite;
    margin-right: ${({ size }) => sizeMap[size]}px;
  }
  div:nth-child(2) {
    animation: ${wave} 0.98s 0.14s ease-in-out infinite;
    margin-right: ${({ size }) => sizeMap[size]}px;
  }
  div:nth-child(3) {
    animation: ${wave} 0.98s 0.28s ease-in-out infinite;
  }
`;

export const Button = forwardRefWithAs<NonSemanticButtonProps, 'button'>(
  (
    {
      as = 'button',
      disabled = false,
      size = 'medium',
      type = 'button',
      variant = 'button-filled-blue',
      isLoading = false,
      ref: _ref, // eslint-disable-line @typescript-eslint/no-unused-vars
      children,
      className = '',
      ...restOfProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();

    const isValidLoading = variant.includes('button-filled-') ? isLoading : false;

    return (
      <Box
        as={as}
        disabled={disabled || isValidLoading}
        type={type}
        variant={variant}
        className={isLoading ? `${className} isLoading` : `${className}`}
        __baseStyles={{
          appearance: 'none',
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
        ref={ref}
      >
        <Box role={isValidLoading ? 'status' : undefined} tx={{ position: 'relative' }}>
          <Loader isLoading={isValidLoading} size={size}>
            <Dot size={size} />
            <Dot size={size} />
            <Dot size={size} />
          </Loader>
          <Box
            tx={{
              opacity: isValidLoading ? 0 : 1,
              visibility: isValidLoading ? 'hidden' : 'visible',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    );
  },
);

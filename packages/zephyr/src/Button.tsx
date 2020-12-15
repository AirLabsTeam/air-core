import React from 'react';
import { transitions } from 'polished';
import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { variant as styledSystemVariant } from 'styled-system';
import invariant from 'tiny-invariant';
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
   * `isLoading` can only be true for buttons with filled variants.
   */
  isLoading?: boolean;
};

export interface ButtonProps extends PropsWithAs<'button', NonSemanticButtonProps> {}

const Dot = () => (
  <Box
    tx={{
      display: 'inline-block',
      backgroundColor: 'currentColor',
      borderRadius: 999,
      height: 4,
      width: 4,
      animationFillMode: 'both',
    }}
  />
);

const wave = keyframes`
  0% {transform: translate(0,0);}
  50% {transform: translate(0,3px);}
  100% {transform: translate(0,0);}
`;

const Loader = styled(Box)<{ isLoading: boolean }>`
  visibility: ${({ isLoading }) => (isLoading ? `visible` : `hidden`)};
  position: absolute;
  left: 50%;
  top: calc(50% - 1.5px);
  transform: translate(-50%, -50%);
  display: flex;

  div:nth-child(1) {
    animation: ${wave} 0.98s 0s ease-in-out infinite;
    margin-right: 4px;
  }

  div:nth-child(2) {
    animation: ${wave} 0.98s 0.14s ease-in-out infinite;
    margin-right: 4px;
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
    invariant(
      (isLoading &&
        (variant === 'button-filled-blue' ||
          variant === 'button-filled-grey' ||
          variant === 'button-filled-destructive')) ||
        !isLoading,
      'Button can only have loading state if it is a filled variant',
    );

    const theme = useTheme();

    return (
      <Box
        as={as}
        disabled={disabled || isLoading}
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
        <Box role={isLoading ? 'status' : undefined} tx={{ position: 'relative' }}>
          <Loader isLoading={isLoading}>
            <Dot />
            <Dot />
            <Dot />
          </Loader>
          <Box
            tx={{
              opacity: isLoading ? 0 : 1,
              visibility: isLoading ? 'hidden' : 'visible',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    );
  },
);

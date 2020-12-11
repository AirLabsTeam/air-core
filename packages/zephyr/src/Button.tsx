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
  isLoading?: boolean;
};

export interface ButtonProps extends PropsWithAs<'button', NonSemanticButtonProps> {}

const Dot = () => (
  <Box
    tx={{
      display: 'inline-block',
      backgroundColor: 'currentColor',
      borderRadius: '100%',
      height: 4, // refactor size & margin to match size variant
      width: 4,
      animationFillMode: 'both',
    }}
  ></Box>
);

const wave = keyframes`
  0% {transform: translate(0,0)}
  50% {transform: translate(0,4px)}
  100% {transform: translate(0,0)}
`;

const Loader = styled.div<{ isLoading: boolean }>`
  visibility: ${({ isLoading }) => (isLoading ? `visible` : `hidden`)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  div:nth-child(1) {
    animation: ${wave} 0.6s 0.3s linear infinite;
    margin-right: 4px;
  }
  div:nth-child(2) {
    animation: ${wave} 0.6s 0.2s linear infinite;
    margin-right: 4px;
  }
  div:nth-child(3) {
    animation: ${wave} 0.6s 0.1s linear infinite;
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
      ...restOfProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();

    return (
      <Box
        as={as}
        disabled={disabled}
        type={type}
        variant={variant}
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
          '&:isLoading': {
            cursor: 'not-allowed',
          },
        }}
        {...restOfProps}
        ref={ref}
      >
        <Box role={isLoading ? 'status' : undefined} tx={{ position: 'relative' }}>
          {/* <Box
            tx={{
              visibility: isLoading ? `visible` : `hidden`,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
            }}
          > */}
          <Loader isLoading={isLoading}>
            <Dot />
            <Dot />
            <Dot />
          </Loader>
          {/* </Box> */}
          <Box tx={{ opacity: isLoading ? 0 : 1, visibility: isLoading ? 'hidden' : 'visible' }}>
            {children}
          </Box>
        </Box>
      </Box>
    );
  },
);

import { transitions } from 'polished';
import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { variant as styledSystemVariant } from 'styled-system';
import { useReducedMotion } from 'framer-motion';
import classNames from 'classnames';
import { Ref } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { Box, BoxStylingProps } from './Box';
import { ButtonVariantName } from './theme/variants/button';
import { VisuallyHidden } from './VisuallyHidden';
import { LeftRight, SVGComponent } from './shared';

export type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large';

/**
 * These represent props that are not already available via React.HTMLAttributes
 */
export type NonSemanticButtonProps = Pick<BoxStylingProps, 'tx'> & {
  size?: ButtonSize | ButtonSize[];
  variant?: ButtonVariantName | ButtonVariantName[];
  isLoading?: boolean;
  adornmentLeft?: SVGComponent;
  adornmentRight?: SVGComponent;
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
    }}
  />
);

const wave = keyframes`
  0% { transform: translate(0, -1.5px); }
  50% { transform: translate(0, 1.5px); }
  100% { transform: translate(0, -1.5px); }
`;

const Loader = styled(Box)<{ shouldReduceMotion: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  div {
    animation-name: ${({ shouldReduceMotion }) => (shouldReduceMotion ? 'none' : wave)};
    animation-duration: 0.98s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }

  div:nth-child(2) {
    animation-delay: 0.14s;
    margin: 0 4px;
  }

  div:nth-child(3) {
    animation-delay: 0.28s;
  }
`;

export type AdornmentVariation = 'leftOnly' | 'rightOnly' | 'both' | 'none';

const getAdornmentVariant = (hasLeft: boolean, hasRight: boolean): AdornmentVariation => {
  if (hasLeft && hasRight) return 'both';
  if (hasLeft && !hasRight) return 'leftOnly';
  if (!hasLeft && hasRight) return 'rightOnly';
  return 'none';
};

export type ButtonCompoundVariant = `${ButtonSize}_adorned-${AdornmentVariation}`;

const getCompoundVariant = (
  size: ButtonSize | ButtonSize[],
  adornmentVariant: AdornmentVariation,
) => {
  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
  return Array.isArray(size)
    ? size.map((s) => `${s}_adorned-${adornmentVariant}` as ButtonCompoundVariant)
    : (`${size}_adorned-${adornmentVariant}` as ButtonCompoundVariant);
  /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */
};

interface ButtonAdornmentProps extends Required<Pick<NonSemanticButtonProps, 'size'>> {
  component: SVGComponent;
  side: LeftRight;
}

const ButtonAdornment = ({ component, side, size }: ButtonAdornmentProps) => {
  const theme = useTheme();

  return (
    <Box
      as={component}
      tx={{
        ...styledSystemVariant({
          prop: 'side',
          variants: {
            left: {
              mr: 6,
            },
            right: {
              ml: 6,
            },
          },
        })({ theme, side }),
        ...styledSystemVariant({
          prop: 'size',
          variants: {
            large: {
              width: 24,
              height: 24,
            },
            medium: {
              width: 16,
              height: 16,
            },
            small: {
              width: 16,
              height: 16,
            },
            ['extra-small']: {
              width: 16,
              height: 16,
            },
          },
        })({ theme, size }),
      }}
    />
  );
};

const compoundVariantMap: { [key in ButtonCompoundVariant]: NonNullable<BoxStylingProps['tx']> } = {
  'extra-small_adorned-none': {
    height: 24,
    px: 12,
    fontSize: 12,
  },
  'extra-small_adorned-leftOnly': {
    height: 24,
    pl: 4,
    pr: 8,
    fontSize: 12,
  },
  'extra-small_adorned-rightOnly': {
    height: 24,
    pl: 8,
    pr: 4,
    fontSize: 12,
  },
  'extra-small_adorned-both': {
    height: 24,
    px: 6,
    fontSize: 12,
  },
  'small_adorned-none': {
    height: 32,
    px: 16,
    fontSize: 12,
  },
  'small_adorned-leftOnly': {
    height: 32,
    pl: 6,
    pr: 10,
    fontSize: 12,
  },
  'small_adorned-rightOnly': {
    height: 32,
    pl: 10,
    pr: 6,
    fontSize: 12,
  },
  'small_adorned-both': {
    height: 32,
    px: 8,
    fontSize: 12,
  },
  'medium_adorned-none': {
    height: 40,
    px: 16,
    fontSize: 14,
  },
  'medium_adorned-leftOnly': {
    height: 40,
    pl: 12,
    pr: 16,
    fontSize: 14,
  },
  'medium_adorned-rightOnly': {
    height: 40,
    pl: 16,
    pr: 12,
    fontSize: 14,
  },
  'medium_adorned-both': {
    height: 40,
    px: 12,
    fontSize: 14,
  },
  'large_adorned-none': {
    height: 48,
    px: 24,
    fontSize: 16,
  },
  'large_adorned-leftOnly': {
    height: 48,
    pl: 12,
    pr: 20,
    fontSize: 16,
  },
  'large_adorned-rightOnly': {
    height: 48,
    pl: 20,
    pr: 12,
    fontSize: 16,
  },
  'large_adorned-both': {
    height: 48,
    px: 16,
    fontSize: 16,
  },
};

export const Button = forwardRefWithAs<NonSemanticButtonProps, 'button'>(
  (
    {
      adornmentLeft,
      adornmentRight,
      as = 'button',
      disabled = false,
      size = 'medium',
      type = 'button',
      variant = 'button-filled-blue',
      isLoading = false,
      ref: _ref, // eslint-disable-line @typescript-eslint/no-unused-vars
      children,
      className,
      ...restOfProps
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();
    const shouldReduceMotion = useReducedMotion();

    const adornmentVariant = getAdornmentVariant(!!adornmentLeft, !!adornmentRight);
    const compoundVariant = getCompoundVariant(size, adornmentVariant);

    const content =
      adornmentVariant === 'none' ? (
        <>{children}</>
      ) : (
        <Box tx={{ display: 'inline-flex', alignItems: 'center' }}>
          {adornmentLeft && <ButtonAdornment side="left" component={adornmentLeft} size={size} />}
          {children}
          {adornmentRight && (
            <ButtonAdornment side="right" component={adornmentRight} size={size} />
          )}
        </Box>
      );

    return (
      <Box
        as={as}
        disabled={disabled || isLoading}
        type={type}
        variant={variant}
        className={classNames({ 'is-loading': isLoading }, className)}
        // @ts-ignore - Allowing it here
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
            prop: 'compoundVariant',
            variants: compoundVariantMap,
          })({ theme, compoundVariant, ...restOfProps }),
          '&:hover': {
            textDecoration: 'none',
          },
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${theme.colors.focus}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'none',
          },
          '&.is-loading': {
            cursor: 'progress',
          },
        }}
        {...restOfProps}
        ref={ref}
      >
        {isLoading ? (
          <Box role="status" tx={{ position: 'relative' }}>
            <VisuallyHidden>Loading...</VisuallyHidden>
            <Loader aria-hidden="true" shouldReduceMotion={shouldReduceMotion!}>
              <Dot />
              <Dot />
              <Dot />
            </Loader>

            <Box
              aria-hidden="true"
              tx={{
                opacity: isLoading ? 0 : 1,
                visibility: isLoading ? 'hidden' : 'visible',
              }}
            >
              {content}
            </Box>
          </Box>
        ) : (
          content
        )}
      </Box>
    );
  },
);

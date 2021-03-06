import React from 'react';
import { forwardRefWithAs } from '@reach/utils';
import VisuallyHidden from '@reach/visually-hidden';
import { variant as styledSystemVariant } from 'styled-system';
import { useTheme } from 'styled-components';
import { Box } from './Box';
import { Button, ButtonProps, NonSemanticButtonProps } from './Button';
import { SVGComponent } from './shared';

export interface NonSemanticIconButtonProps
  extends Omit<NonSemanticButtonProps, 'children' | 'adornmentLeft' | 'adornmentRight'> {
  icon: SVGComponent;
  hasTooltip: boolean;
  hiddenLabel: string;
}

export interface IconButtonProps
  extends Omit<ButtonProps, 'children' | keyof NonSemanticButtonProps>,
    NonSemanticIconButtonProps {}

export const IconButton = forwardRefWithAs<NonSemanticIconButtonProps, 'button'>(
  (
    {
      as = 'button',
      className,
      disabled = false,
      hasTooltip,
      hiddenLabel,
      icon,
      isLoading = false,
      size = 'medium',
      tx,
      type = 'button',
      variant = 'button-filled-blue',
      ...restOfProps
    }: IconButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();

    return (
      <Button
        {...restOfProps}
        as={as}
        className={className}
        disabled={disabled}
        isLoading={isLoading}
        ref={ref}
        size={size}
        tx={{
          ...tx,
          ...styledSystemVariant({
            prop: 'size',
            variants: {
              large: {
                p: 12,
                maxWidth: 48,
              },
              medium: {
                p: 8,
                maxWidth: 40,
              },
              small: {
                p: 8,
                maxWidth: 32,
              },
              ['extra-small']: {
                p: 4,
                maxWidth: 24,
              },
            },
          })({ theme, size, ...restOfProps }),
        }}
        type={type}
        variant={variant}
      >
        {/* If button is wrapped with tooltip, it doesn't require assistive text. It's already provided on focus via the tooltip. */}
        {!hasTooltip && <VisuallyHidden>{hiddenLabel}</VisuallyHidden>}
        <Box
          as={icon}
          tx={{
            '& path': {
              strokeWidth: 2,
            },
            ...styledSystemVariant({
              prop: 'size',
              variants: {
                large: {
                  width: 24,
                },
                medium: {
                  width: 24,
                },
                small: {
                  width: 16,
                },
                ['extra-small']: {
                  width: 16,
                },
              },
            })({ theme, size, ...restOfProps }),
          }}
        />
      </Button>
    );
  },
);

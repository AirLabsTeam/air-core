import { Ref } from 'react';
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

  /**
   * Unlike usual, this prop only accepts a string. It is also never visible. It represents an accessible label when the
   * button is not wrapped by a Tooltip. You may ask: "Why not name this prop better, and not use 'children'"?. Many
   * a11y-first libraries we consume like @reach-ui and @radix-ui have adopted this pattern of expecting required
   * accessibility text as a 'children' prop. When we use the polymorphic 'as' prop for things like MenuButton, 'children'
   * would be required.
   */
  children: string;
}

export interface IconButtonProps
  extends Omit<ButtonProps, 'children' | keyof NonSemanticButtonProps>,
    NonSemanticIconButtonProps {}

export const IconButton = forwardRefWithAs<NonSemanticIconButtonProps, 'button'>(
  (
    {
      as = 'button',
      children,
      className,
      disabled = false,
      hasTooltip,
      icon,
      isLoading = false,
      size = 'medium',
      tx,
      type = 'button',
      variant = 'button-filled-blue',
      ...restOfProps
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>,
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          padding: 0,

          ...styledSystemVariant({
            prop: 'size',
            variants: {
              large: {
                width: 48,
                height: 48,
              },
              medium: {
                width: 40,
                height: 40,
              },
              small: {
                width: 32,
                height: 32,
              },
              ['extra-small']: {
                width: 24,
                height: 24,
              },
            },
          })({ theme, size, ...restOfProps }),

          ...tx,
        }}
        type={type}
        variant={variant}
      >
        {/* If button is wrapped with tooltip, it doesn't require assistive text. It's already provided on focus via the tooltip. */}
        {!hasTooltip && <VisuallyHidden>{children}</VisuallyHidden>}
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

import { ReactNode, ElementRef, forwardRef } from 'react';
import { Box } from './Box';
import * as StyledButton from './Button.styles';
import { VisuallyHidden } from './VisuallyHidden';

export type ButtonProps = Pick<
  StyledButton.RootProps,
  | 'appearance'
  | 'children'
  | 'className'
  | 'color'
  | 'css'
  | 'disabled'
  | 'onClick'
  | 'onMouseDown'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseUp'
  | 'size'
  | 'type'
> & {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
  'data-testid'?: string;
  isLoading?: boolean;
};

export const Button = forwardRef<ElementRef<typeof StyledButton.Root>, ButtonProps>(
  (
    {
      adornmentLeft,
      adornmentRight,
      appearance = 'filled',
      children,
      className,
      color = 'blue',
      css,
      ['data-testid']: testId,
      disabled = false,
      isLoading = false,
      size = 'medium',
      type = 'button',
      ...restOfProps
    }: ButtonProps,
    forwardedRef,
  ) => {
    const content = (
      <>
        {adornmentLeft && (
          <StyledButton.Adornment side="left" size={size}>
            {adornmentLeft}
          </StyledButton.Adornment>
        )}
        {children}
        {adornmentRight && (
          <StyledButton.Adornment side="right" size={size}>
            {adornmentRight}
          </StyledButton.Adornment>
        )}
      </>
    );
    return (
      <StyledButton.Root
        appearance={appearance}
        className={className}
        color={color}
        css={css}
        data-testid={testId}
        disabled={disabled}
        data-loading={isLoading ? '' : undefined}
        ref={forwardedRef}
        size={size}
        type={type}
        {...restOfProps}
      >
        {isLoading ? (
          <Box css={{ position: 'relative' }} role="status">
            <VisuallyHidden>Loading...</VisuallyHidden>
            <StyledButton.Loader aria-hidden="true">
              <StyledButton.LoaderDot />
              <StyledButton.LoaderDot />
              <StyledButton.LoaderDot />
            </StyledButton.Loader>

            <Box aria-hidden="true" css={{ opacity: 0, visibility: 'hidden' }}>
              {content}
            </Box>
          </Box>
        ) : (
          content
        )}
      </StyledButton.Root>
    );
  },
);

Button.displayName = 'Button';

Button.toString = () => StyledButton.Root.className;

export const ButtonLoader = StyledButton.Loader;
export const ButtonLoaderDot = StyledButton.LoaderDot;
export const ButtonRoot = StyledButton.Root;

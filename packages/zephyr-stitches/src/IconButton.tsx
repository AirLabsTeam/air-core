import { ComponentType, ReactNode, ElementRef, forwardRef } from 'react';
import * as StyledIconButton from './IconButton.styles';
import { Tooltip, TooltipProps } from './Tooltip';
import { VisuallyHidden } from './VisuallyHidden';

export type IconButtonProps = Omit<StyledIconButton.RootProps, 'children'> & {
  ['data-testid']?: string;
} & ({ children: ReactNode } | { icon: ComponentType }) &
  ({ tooltip: Omit<TooltipProps, 'children'> } | { label: string });

export const IconButton = forwardRef<ElementRef<typeof StyledIconButton.Root>, IconButtonProps>(
  (
    {
      appearance = 'filled',
      className,
      color = 'blue',
      css,
      ['data-testid']: testId,
      disabled,
      size = 'medium',
      type = 'button',
      ...restOfProps
    }: IconButtonProps,
    forwardedRef,
  ) => {
    const element = (
      <StyledIconButton.Root
        appearance={appearance}
        className={className}
        color={color}
        css={css}
        data-testid={testId}
        disabled={disabled}
        ref={forwardedRef}
        size={size}
        type={type}
        {...restOfProps}
      >
        {'icon' in restOfProps ? (
          <StyledIconButton.Icon as={restOfProps.icon} size={size} />
        ) : (
          restOfProps.children
        )}

        {'label' in restOfProps && <VisuallyHidden>{restOfProps.label}</VisuallyHidden>}
      </StyledIconButton.Root>
    );

    return 'tooltip' in restOfProps ? (
      <Tooltip {...restOfProps.tooltip}>{element}</Tooltip>
    ) : (
      element
    );
  },
);

IconButton.displayName = 'IconButton';

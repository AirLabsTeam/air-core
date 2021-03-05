import React from 'react';
import { Close } from '@air/icons';
import { X_BUTTON } from './testIDs';
import { IconButton, IconButtonProps, NonSemanticIconButtonProps } from './IconButton';

export interface XButtonProps
  extends Optional<NonSemanticIconButtonProps, 'hiddenLabel' | 'icon'>,
    Pick<IconButtonProps, 'onClick' | 'ref' | 'size' | 'variant' | 'tx'> {}

/**
 * Used as the dismiss button in popovers, alerts, and modals.
 */
export const XButton = React.forwardRef<HTMLButtonElement, XButtonProps>(
  (
    {
      hiddenLabel = 'Close Modal',
      icon = Close,
      onClick,
      size = 'medium',
      tx,
      variant = 'button-unstyled',
    }: XButtonProps,
    ref,
  ) => (
    <IconButton
      data-testid={X_BUTTON}
      hiddenLabel={hiddenLabel}
      icon={icon}
      onClick={onClick}
      ref={ref}
      size={size}
      tx={{ position: 'absolute', color: 'pigeon400', top: 8, right: 8, ...tx }}
      variant={variant}
    />
  ),
);

XButton.displayName = 'XButton';

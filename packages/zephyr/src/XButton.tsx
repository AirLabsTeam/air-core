import React, { forwardRef } from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { Close } from '@air/icons';
import { Box } from './Box';
import { Button } from './Button';
import { X_BUTTON } from './testIDs';

export interface XButtonProps {
  /** Control hidden button label for users with assistive technology. */
  hiddenButtonLabel?: 'Close Modal' | 'Close Popover' | 'Close Alert';
  onClick: NonNullable<React.HTMLAttributes<HTMLButtonElement>['onClick']>;
}

/**
 * Used as the dismiss button in popovers, alerts, and modals.
 */
export const XButton = forwardRef<HTMLButtonElement, XButtonProps>(
  ({ onClick, hiddenButtonLabel = 'Close Modal' }: XButtonProps, ref) => (
    <Button
      tx={{ position: 'absolute', top: '1.25rem', right: '1.5rem' }}
      variant="button-unstyled"
      data-testid={X_BUTTON}
      onClick={onClick}
      ref={ref}
    >
      <VisuallyHidden>{hiddenButtonLabel}</VisuallyHidden>
      <Box as={Close as any} width="32" tx={{ color: 'pigeon400' }} />
    </Button>
  ),
);

XButton.displayName = 'XButton';

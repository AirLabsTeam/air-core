import React, { useRef } from 'react';
import { useId } from '@reach/auto-id';
import { DialogOverlay, DialogContent, DialogProps } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogLabel,
  AlertDialogOverlay,
  AlertDialogProps,
} from '@reach/alert-dialog';
import invariant from 'tiny-invariant';
import { rgba } from 'polished';
// @ts-ignore - Sharing dependencies in a monorepo isn't going well 🙃
import { Close } from '@air/icons';
import { useTheme } from 'styled-components';
import { MODAL_OVERLAY, ALERT_MODAL_OVERLAY } from '../testIDs';
import { Box, BoxStylingProps } from '../Box';
import { Button } from '../Button';

export type ModalProps = Pick<
  DialogProps,
  'allowPinchZoom' | 'initialFocusRef' | 'isOpen' | 'onDismiss'
> &
  Pick<AlertDialogProps, 'leastDestructiveRef'> &
  BoxStylingProps & {
    /**
     * This should act as the title of the modal. Required for the sake of accessibility. If you want the
     * label invisible, please render the node within [@reach/visually-hidden](https://reach.tech/visually-hidden).
     *
     * -Example: `<VisuallyHidden>Delete Asset</VisuallyHidden>`
     *
     * -Example: `<h2>Delete Asset</h2>`
     */
    modalLabel: React.ReactNode;

    /**
     * This will be used to go into further detail regarding the modal. Optional, but required if leveraging a
     * trap modal. If you want the description invisible, please render the node within
     * [@reach/visually-hidden](https://reach.tech/visually-hidden).
     *
     * - Example: `<VisuallyHidden>This action is permanent, are you sure?</VisuallyHidden>`
     *
     * - Example: `<p>This action is permanent, are you sure</p>`
     */
    modalDescription?: React.ReactNode;

    /**
     * When true, this modal will leverage the "alertdialog" role, making the description required. This
     * prop could have a default value, but it's worth truly understanding when to use which because the experience for
     * ALL users differs. Please read MDN and Reach documentation on the differences between the two modals to understand
     * what yours should be.
     *
     * Note: When true, `leastDestructiveRef` and `modalDescription` become required props.
     *
     * Links:
     *
     * - [@reach/alert-dialog](https://reach.tech/alert-dialog)
     *
     * - [role="alertdialog"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)
     */
    isAlertModal: boolean;

    /**
     * Accepts any renderable content.
     *
     * Documentation:
     *
     * [When isTrapModal=false](https://reach.tech/dialog#dialogcontent-children)
     *
     * [When isTrapModal=true](https://reach.tech/alert-dialog/#alertdialogcontent-element-props)
     */
    children?: React.ReactNode;

    /**
     * Note that these styles get applied to the modal container itself as opposed to the overlay which is the true
     * top-level element in this component. See `props.overlayStyle` to apply inline styles there.
     */
    className?: string;

    /**
     * If provided, this destroys the default stylings for the modal's overlay.
     */
    overlayStylesOverride?: BoxStylingProps['tx'];

    /**
     * Determines whether or not an "X" close button renders in the upper-right corner of the modal.
     */
    withCloseButton?: boolean;
  };

export const Modal = ({
  children,
  className,
  isAlertModal,
  isOpen = false,
  leastDestructiveRef,
  modalDescription,
  modalLabel,
  onDismiss,
  overlayStylesOverride,
  tx,
  withCloseButton = false,
  ...rest
}: ModalProps) => {
  const theme = useTheme();
  const labelId = useId('modal-label');
  const descriptionId = useId('modal-description');
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasDismissHandler = !!onDismiss;

  /**
   * Basically, the only time we can pass a noop or undefined to `onDismiss` is if it's an AlertModal where a decision is
   * required. For example, when merging two records and a survivor must be chosen.
   */
  invariant(
    !withCloseButton || (withCloseButton && hasDismissHandler),
    'If "withCloseButton" is true, an "onDismiss" callback must also be passed. It should not be a no-op.',
  );

  const CloseButton = () => (
    <Button
      type="button"
      ref={closeButtonRef}
      onClick={onDismiss!}
      variant="button-unstyled"
      tx={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
    >
      <VisuallyHidden>Close Modal</VisuallyHidden>
      <Close tx={{ width: 32, color: 'pigeon400' }} />
    </Button>
  );

  const overlayStyles: BoxStylingProps['tx'] = !overlayStylesOverride
    ? {
        backgroundColor: rgba(theme.colors.pigeon0, 0.92),
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'auto',
        zIndex: 1,
        // The actual modal
        '& > div': {
          // Ensures <CloseButton /> is rendered inside the modal itself
          position: 'relative',
        },
      }
    : overlayStylesOverride;

  if (isAlertModal) {
    const hasNecessaryRef =
      (!withCloseButton && !!leastDestructiveRef) || (withCloseButton && !leastDestructiveRef);

    invariant(
      hasNecessaryRef,
      'On an AlertModal, "leastDestructiveRef" is required, unless "withCloseButton" is true. In that case, you must not pass a ref to "leastDestructiveRef".',
    );

    const hasDescription = !!modalDescription;
    invariant(hasDescription, 'AlertModal requires a "modalDescription"');

    return (
      <Box
        as={AlertDialogOverlay}
        data-testid={ALERT_MODAL_OVERLAY}
        isOpen={isOpen}
        leastDestructiveRef={withCloseButton ? closeButtonRef : leastDestructiveRef}
        __baseStyles={overlayStyles}
        {...rest}
      >
        <Box as={AlertDialogContent} tx={tx} className={className}>
          {withCloseButton && <CloseButton />}

          <AlertDialogLabel>{modalLabel}</AlertDialogLabel>

          <AlertDialogDescription>{modalDescription}</AlertDialogDescription>

          {children}
        </Box>
      </Box>
    );
  }

  /**
   * We can only force users to making a decision in an AlertModal. In regular modals, they should always have the ability
   * to close the modal with the escape key.
   */
  invariant(hasDismissHandler, 'Modals (not AlertModals) require the "onDismiss" prop.');

  return (
    <Box
      as={DialogOverlay}
      data-testid={MODAL_OVERLAY}
      isOpen={isOpen}
      onDismiss={onDismiss}
      __baseStyles={overlayStyles}
      {...rest}
    >
      <Box
        as={DialogContent}
        tx={tx}
        className={className}
        aria-labelledby={labelId}
        aria-describedby={!modalDescription ? undefined : descriptionId}
      >
        {withCloseButton && <CloseButton />}

        <span id={labelId}>{modalLabel}</span>

        <span id={descriptionId}>{modalDescription}</span>

        {children}
      </Box>
    </Box>
  );
};

import React from 'react';
import { useId } from '@reach/auto-id';
import { DialogOverlay, DialogContent, DialogProps } from '@reach/dialog';
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogLabel,
  AlertDialogOverlay,
  AlertDialogProps,
} from '@reach/alert-dialog';
import invariant from 'tiny-invariant';
// import { rgba } from 'polished';
import { MODAL_OVERLAY, ALERT_MODAL_OVERLAY } from '../testIDs';
import { Box, BoxStylingProps } from '../Box';

export type BaseModalProps = Pick<
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
     * When true, this modal will leverage the "alertdialog" role, making the description required. A trap
     * modal is valid when a modal demands the user's attention, such as when confirming or denying an action. This
     * prop could have a default value, but it's worth truly understanding when to use which because the experience for
     * ALL users differs. For example, more attention is demanded from users leveraging screen readers and visually
     * unimpaired users wont be able to use the escape key or click the modal's overlay to leave the modal.
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

    overlayStyle?: BoxStylingProps['tx'];

    zIndex?: number;
  };

export const BaseModal = ({
  children,
  className,
  isAlertModal,
  isOpen = false,
  leastDestructiveRef,
  modalDescription,
  modalLabel,
  onDismiss,
  overlayStyle = {} as BoxStylingProps['tx'],
  tx,
  zIndex = 10,
  ...rest
}: BaseModalProps) => {
  const labelId = useId('modal-label');
  const descriptionId = useId('modal-description');
  const overlayStyles: BoxStylingProps['tx'] = {
    // TODO: Flesh out final default
    // backgroundColor: (theme) => rgba(theme.colors.pigeon0, 0.92),
    zIndex,
    ...overlayStyle,
  };

  if (isAlertModal) {
    const hasDescription = !!modalDescription;

    invariant(isAlertModal && hasDescription, 'Alert Modal require the "modalDescription" prop');

    return (
      <Box
        as={AlertDialogOverlay}
        data-testid={ALERT_MODAL_OVERLAY}
        isOpen={isOpen}
        leastDestructiveRef={leastDestructiveRef}
        __baseStyles={overlayStyles}
        // __baseStyles={{
        //   '&:hover': {
        //     backgroundColor: (theme) => theme.colors.pigeon0,
        //   },
        // }}
        {...rest}
      >
        <Box as={AlertDialogContent} tx={tx} className={className}>
          <AlertDialogLabel>{modalLabel}</AlertDialogLabel>

          <AlertDialogDescription>{modalDescription}</AlertDialogDescription>

          {children}
        </Box>
      </Box>
    );
  }

  invariant(!isAlertModal && !!onDismiss, 'Non-Alert Modals require the "onDismiss" prop');

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
        <span id={labelId}>{modalLabel}</span>

        <span id={descriptionId}>{modalDescription}</span>

        {children}
      </Box>
    </Box>
  );
};

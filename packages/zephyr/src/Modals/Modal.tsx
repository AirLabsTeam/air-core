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
import { isString } from 'lodash';
import { useTheme } from 'styled-components';
import { MODAL_OVERLAY, ALERT_MODAL_OVERLAY } from '../testIDs';
import { Box, BoxStylingProps, Button, Text } from '..';

export type ModalProps = Pick<
  DialogProps,
  'allowPinchZoom' | 'initialFocusRef' | 'isOpen' | 'onDismiss'
> &
  Pick<AlertDialogProps, 'leastDestructiveRef'> &
  BoxStylingProps & {
    /**
     * This should act as the title of the modal. Required for the sake of accessibility. If passed as a string, it will
     * render within:
     *
     * `<Text variant="text-ui-24" tx={{ color: 'pigeon700', fontWeight: 500 }}>`
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
     * what yours should be, but here's a quick summary:
     *
     * The "alertdialog" role should only used when an alert, error, or warning occurs. In other words, when a modal's
     * information and controls require the user's immediate attention, this prop should be true. It is up to the
     * developer to make this distinction though.
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
  const isModalLabelString = isString(modalLabel);

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
        backgroundColor: rgba(theme.colors.pigeon700, 0.75),
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'auto',
        zIndex: 1,
        // TODO: Should I do regular CSS animations or will conditional rendering require a JS animation library?
      }
    : overlayStylesOverride;

  const cardStyles: BoxStylingProps['tx'] = {
    position: 'relative', // Ensures <CloseButton /> is rendered inside the modal itself
    backgroundColor: 'white',
    borderRadius: '6px',
    px: 32,
    pt: 32,
    pb: 28,
    mx: 'auto',
    mt: [32, '8vw'],
    mb: [128, 16], // 8rem needed to account for bottom areas on iOS browsers.
    width: '496px', // TODO: Add modal variants for the 3 different widths
    minHeight: '100px',
    maxWidth: '100vw',
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    },
  };

  const modalLabelLayoutStyles: BoxStylingProps['tx'] = {
    maxWidth: '90%', // to keep header out of the way of the closing "X" button.
    marginBottom: 16,
  };

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
        <Box as={AlertDialogContent} __baseStyles={cardStyles} tx={tx} className={className}>
          {withCloseButton && <CloseButton />}

          <Box as={AlertDialogLabel} tx={modalLabelLayoutStyles}>
            {isModalLabelString ? (
              <Text variant="text-ui-24" tx={{ color: 'pigeon700', fontWeight: 500 }}>
                {modalLabel}
              </Text>
            ) : (
              modalLabel
            )}
          </Box>

          <Box as={AlertDialogDescription}>{modalDescription}</Box>

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
        __baseStyles={cardStyles}
        aria-labelledby={labelId}
        aria-describedby={!modalDescription ? undefined : descriptionId}
      >
        {withCloseButton && <CloseButton />}

        <Box id={labelId} tx={modalLabelLayoutStyles}>
          {isModalLabelString ? (
            <Text variant="text-ui-24" tx={{ color: 'pigeon700', fontWeight: 500 }}>
              {modalLabel}
            </Text>
          ) : (
            modalLabel
          )}
        </Box>

        <Box id={descriptionId}>{modalDescription}</Box>

        {children}
      </Box>
    </Box>
  );
};

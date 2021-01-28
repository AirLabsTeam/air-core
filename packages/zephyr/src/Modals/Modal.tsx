import React, { useRef } from 'react';
import { useId } from '@reach/auto-id';
import { DialogProps } from '@reach/dialog';
import { AlertDialogDescription, AlertDialogLabel, AlertDialogProps } from '@reach/alert-dialog';
import invariant from 'tiny-invariant';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { isString } from 'lodash';
import { Box, BoxStylingProps } from '../Box';
import { Text } from '../Text';
import { ModalVariantName } from '../theme/variants/modal';
import { XButton } from '../XButton';
import { ModalContent } from './ModalContent';
import { ModalOverlay } from './ModalOverlay';

export interface ModalProps
  extends Pick<DialogProps, 'allowPinchZoom' | 'initialFocusRef' | 'isOpen'>,
    Pick<AlertDialogProps, 'leastDestructiveRef'>,
    Pick<BoxStylingProps, 'tx'> {
  /**
   * This should act as the title of the modal. Required for the sake of accessibility.
   *
   * If passed as a string, it will render within:
   *
   * `<Text variant="text-ui-24">`
   */
  modalLabel: React.ReactNode;

  /**
   * This will be used to go into further detail regarding the modal. Optional, but required if leveraging an
   * alert modal. If you want the description invisible, please render the node within
   * [@reach/visually-hidden](https://reach.tech/visually-hidden).
   *
   * - Example: `<VisuallyHidden>This action is permanent, are you sure?</VisuallyHidden>`
   *
   * - Example: `<p>This action is permanent, are you sure</p>`
   *
   * If passed as a string, it will render within:
   *
   * `<Text variant="text-ui-16">`
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
   * This function is called whenever the user hits "Escape" or clicks outside the dialog. _It's important to close the
   * dialog onDismiss_.
   *
   * The only time you shouldn't close the dialog on dismiss is when the dialog requires a choice and none of them are
   * "cancel". For example, perhaps two records need to be merged and the user needs to pick the surviving record.
   * Neither choice is less destructive than the other, so in these cases you may want to alert the user they need to a
   * make a choice on dismiss instead of closing the dialog. In this case, "isAlertModal" should also be true. As an
   * extreme last resort, you can pass a noop.
   *
   * [See more: https://reach.tech/dialog#dialog-ondismiss](https://reach.tech/dialog#dialog-ondismiss)
   */
  onDismiss: (event?: React.SyntheticEvent) => void;

  /**
   * Accepts any renderable content.
   *
   * Documentation:
   *
   * [When isAlertModal=false](https://reach.tech/dialog#dialogcontent-children)
   *
   * [When isAlertModal=true](https://reach.tech/alert-dialog/#alertdialogcontent-element-props)
   */
  children?: React.ReactNode;

  /**
   * Note that these styles get applied to the modal container itself as opposed to the overlay which is the true
   * top-level element in this component.
   */
  className?: string;

  /**
   * Determines whether or not an "X" close button renders in the upper-right corner of the modal.
   */
  withCloseButton?: boolean;

  /**
   * There are 3 modal sizes in Zephyr.
   *
   * Small [400px width] - For confirming a destructive action, showing error states, and
   * notifying the user of an action (such as being logged out after an amount of inactivity).
   *
   * Medium [498px width] - Primarily for multi-step actions (such as rendering a form or encouraging the user to
   * copy a share link after defining the link's permissions).
   *
   * Large [600px width] - Often used on marketing pages. Also used when working with a prolonged action (like uploading
   * an asset or approving a new version of an asset). Can also be used to cue a fork in the road for multi-step forms.
   */
  variant?: ModalVariantName;

  ['data-testid']?: string;
}

export const Modal = ({
  children,
  className,
  isAlertModal,
  isOpen = false,
  leastDestructiveRef,
  modalDescription,
  modalLabel,
  onDismiss,
  tx,
  variant = 'modal-medium',
  withCloseButton = true,
  'data-testid': testID,
  ...rest
}: ModalProps) => {
  const labelID = useId('modal-label')!;
  const descriptionID = useId('modal-description')!;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = !!useReducedMotion();
  const isModalLabelString = isString(modalLabel);
  const isModalDescriptionString = isString(modalDescription);
  const hasDescription = !!modalDescription;

  const modalLabelLayoutStyles: BoxStylingProps['tx'] = {
    maxWidth: '90%', // to keep header out of the way of the closing "X" button.
    marginBottom: 16,
  };

  if (isAlertModal) {
    const hasNecessaryRef =
      (!withCloseButton && !!leastDestructiveRef) || (!!withCloseButton && !leastDestructiveRef);
    invariant(
      isAlertModal && hasNecessaryRef,
      'AlertModal requires "leastDestructiveRef", unless "withCloseButton" is true. In that case, you must leave "leastDestructiveRef" undefined.',
    );
    invariant(isAlertModal && hasDescription, 'AlertModal requires a "modalDescription"');

    return (
      <AnimatePresence>
        {isOpen && (
          <ModalOverlay
            isAlertModal={true}
            onDismiss={onDismiss}
            leastDestructiveRef={withCloseButton ? closeButtonRef : leastDestructiveRef}
            shouldReduceMotion={shouldReduceMotion}
            {...rest}
          >
            <ModalContent
              isAlertModal={true}
              className={className}
              data-testid={testID}
              tx={tx}
              variant={variant}
              shouldReduceMotion={shouldReduceMotion}
              labelID={labelID}
              descriptionID={descriptionID}
            >
              {withCloseButton && <XButton onClick={onDismiss} ref={closeButtonRef} />}

              {isModalLabelString ? (
                <Box as={AlertDialogLabel} tx={modalLabelLayoutStyles}>
                  <Text variant="text-ui-24" tx={{ fontWeight: 'semibold' }}>
                    {modalLabel}
                  </Text>
                </Box>
              ) : (
                <Box as={AlertDialogLabel}>{modalLabel}</Box>
              )}

              {isModalDescriptionString ? (
                <Box as={AlertDialogDescription}>
                  <Text variant="text-ui-16">{modalDescription}</Text>
                </Box>
              ) : (
                <Box as={AlertDialogDescription}>{modalDescription}</Box>
              )}

              <Text variant="text-ui-16">{children}</Text>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          isAlertModal={false}
          leastDestructiveRef={withCloseButton ? closeButtonRef : leastDestructiveRef}
          onDismiss={onDismiss}
          shouldReduceMotion={shouldReduceMotion}
          {...rest}
        >
          <ModalContent
            isAlertModal={false}
            className={className}
            data-testid={testID}
            tx={tx}
            variant={variant}
            shouldReduceMotion={shouldReduceMotion}
            labelID={labelID}
            descriptionID={descriptionID}
          >
            {withCloseButton && <XButton onClick={onDismiss} ref={closeButtonRef} />}

            {isModalLabelString ? (
              <Box id={labelID} tx={modalLabelLayoutStyles}>
                <Text variant="text-ui-24" tx={{ fontWeight: 'semibold' }}>
                  {modalLabel}
                </Text>
              </Box>
            ) : (
              <Box id={labelID}>{modalLabel}</Box>
            )}

            {hasDescription && (
              <Box id={descriptionID}>
                {isModalDescriptionString ? (
                  <Text variant="text-ui-16">{modalDescription}</Text>
                ) : (
                  modalDescription
                )}
              </Box>
            )}

            <Text variant="text-ui-16">{children}</Text>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { ModalVariantName } from '../theme';
import { Modal, ModalProps } from './Modal';

export interface CTAModalProps
  extends Omit<RequireProps<ModalProps, 'modalDescription'>, 'isAlertModal' | 'variant'>,
    Optional<ModalProps, 'isAlertModal'> {
  // TODO: Add NonNullable<React.ReactNode> as an option for each CTAElement
  primaryCTAElement: Pick<ButtonProps, 'children' | 'onClick' | 'type' | 'variant'>;
  secondaryCTAElement?: Pick<ButtonProps, 'children' | 'onClick' | 'type' | 'variant'>;
  tertiaryCTAElement?: Pick<ButtonProps, 'children' | 'onClick' | 'type' | 'variant'>;
  variant: 'modal-transaction-cta' | 'modal-announcement-cta';
  size: ModalVariantName;
}

export const CTAModal = ({
  children,
  isAlertModal = false,
  isOpen = false,
  leastDestructiveRef,
  modalDescription,
  modalLabel,
  onDismiss,
  primaryCTAElement,
  secondaryCTAElement,
  tertiaryCTAElement,
  size,
  variant,
  withCloseButton = true,
}: CTAModalProps) => {
  console.log('variant', variant);
  console.log('tertiaryCTAElement', tertiaryCTAElement);
  return (
    <Modal
      isAlertModal={isAlertModal}
      isOpen={isOpen}
      leastDestructiveRef={leastDestructiveRef}
      withCloseButton={withCloseButton}
      onDismiss={onDismiss}
      modalLabel={modalLabel}
      modalDescription={modalDescription}
      variant={size}
    >
      {children}

      <Box tx={{ display: 'flex', justifyContent: 'flex-between', mt: 32 }}>
        {!!tertiaryCTAElement && <Button {...tertiaryCTAElement} />}

        <Box tx={{ display: 'flex' }}>
          {!!secondaryCTAElement && <Button {...secondaryCTAElement} tx={{ mr: 12 }} />}

          <Button {...primaryCTAElement} />
        </Box>
      </Box>
    </Modal>
  );
};

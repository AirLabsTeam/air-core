import React, { useCallback } from 'react';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Modal, ModalProps } from './Modal';

export type TransactionModalButton = Pick<ButtonProps, 'children' | 'onClick' | 'type' | 'variant'>;

export interface TransactionModalProps
  extends Omit<ModalProps, 'leastDestructiveRef' | 'withCloseButton' | 'isAlertModal'>,
    Optional<ModalProps, 'isAlertModal'> {
  /**
   * We can render 1 to 3 call-to-actions (CTAs) in a transaction modal. This one is required and will appear in the
   * bottom-right corner. It renders a button ("button-filled-blue" variant) by default, but can be overridden. If you
   * need to render an entirely different element - or the available control is not satisfactory - you can pass any JSX.
   * If this CTA uses the object syntax and has a variant of "button-filled-destructive", the modal will be rendered as an
   * alert modal.
   */
  primaryCTA: TransactionModalButton | JSX.Element;

  /**
   * This call-to-action (CTA) is optional and will appear in the bottom-right corner, slightly left of the primary CTA.
   * It renders a button ("button-ghost-grey" variant) by default, but can be overridden. If you need to render an
   * entirely different element - or the available control is not satisfactory - you can pass any JSX.
   */
  secondaryCTA?: TransactionModalButton | JSX.Element;

  /**
   * This call-to-action (CTA) is optional and will appear in the bottom-left corner. It renders a button
   * ("button-ghost-destructive" variant) by default, but can be overridden. If you need to render an entirely different
   * element - or the available control is not satisfactory - you can pass any JSX.
   */
  tertiaryCTA?: TransactionModalButton | JSX.Element;
}

export const TransactionModal = ({
  children,
  className,
  isAlertModal = false,
  isOpen = false,
  modalDescription,
  modalLabel,
  onDismiss,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
  variant,
}: TransactionModalProps) => {
  const isUsingButtonSchema = useCallback(
    (item: any): item is TransactionModalButton => 'onClick' in item,
    [],
  );

  const primaryCTAElement = isUsingButtonSchema(primaryCTA) ? (
    <Button variant="button-filled-blue" {...primaryCTA} />
  ) : (
    primaryCTA
  );

  const secondaryCTAElement = !secondaryCTA ? null : isUsingButtonSchema(secondaryCTA) ? (
    <Button variant="button-ghost-grey" {...secondaryCTA} />
  ) : (
    secondaryCTA
  );

  const tertiaryCTAElement = !tertiaryCTA ? null : isUsingButtonSchema(tertiaryCTA) ? (
    <Button variant="button-ghost-destructive" {...tertiaryCTA} />
  ) : (
    tertiaryCTA
  );

  const isPrimaryCTADestructive =
    isUsingButtonSchema(primaryCTA) && primaryCTA.variant === 'button-filled-destructive';

  return (
    <Modal
      isAlertModal={isAlertModal ? true : isPrimaryCTADestructive}
      className={className}
      isOpen={isOpen}
      modalDescription={modalDescription}
      modalLabel={modalLabel}
      onDismiss={onDismiss}
      variant={variant}
      withCloseButton
    >
      {children}

      <Box
        tx={{
          display: 'flex',
          justifyContent: !tertiaryCTAElement ? 'flex-end' : 'space-between',
          mt: 32,
        }}
      >
        {tertiaryCTAElement}

        <Box tx={{ display: 'flex', '& > *:first-child': { mr: 12 } }}>
          {secondaryCTAElement}

          {primaryCTAElement}
        </Box>
      </Box>
    </Modal>
  );
};

import React, { useCallback } from 'react';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Modal, ModalProps } from './Modal';

export const TRANSACTION_MODAL_PRIMARY_CTA = 'TRANSACTION_MODAL_PRIMARY_CTA';
export const TRANSACTION_MODAL_SECONDARY_CTA = 'TRANSACTION_MODAL_SECONDARY_CTA';
export const TRANSACTION_MODAL_TERTIARY_CTA = 'TRANSACTION_MODAL_TERTIARY_CTA';

export type TransactionModalButton = Omit<ButtonProps, 'ref'>;

export interface TransactionModalProps
  extends Omit<ModalProps, 'leastDestructiveRef' | 'withCloseButton' | 'isAlertModal'> {
  /**
   * This call-to-action (CTA) is required and will appear in the bottom-right corner. It renders a button
   * ("button-filled-blue" variant) by default, but can be overridden. If you need to render an entirely different
   * element, deal with the CTA's ref, or the available control is not satisfactory - you can pass any JSX. If this CTA
   * uses the object syntax and has a variant of "button-filled-destructive", the modal will be rendered as an alert
   * modal.
   */
  primaryCTA: TransactionModalButton | JSX.Element;

  /**
   * This call-to-action (CTA) is optional and will appear in the bottom-right corner, slightly left of the primary CTA.
   * It renders a button ("button-ghost-grey" variant) by default, but can be overridden. If you need to render an
   * entirely different element, deal with the CTA's ref, or the available control is not satisfactory - you can pass any
   * JSX.
   */
  secondaryCTA?: TransactionModalButton | JSX.Element;

  /**
   * This is an optional JSX element that can be passed in, typically this will be a button. And the element will be placed in
   * the bottom left corner of the modal.
   */
  tertiaryAction?: TransactionModalButton | JSX.Element;

  ['data-testid']?: string;
}

export const TransactionModal = ({
  children,
  className,
  modalDescription,
  modalLabel,
  onDismiss,
  primaryCTA,
  secondaryCTA,
  tertiaryAction,
  variant,
  ...rest
}: TransactionModalProps) => {
  const isUsingButtonSchema = useCallback(
    (item: any): item is TransactionModalButton => 'children' in item,
    [],
  );

  const primaryCTAElement = isUsingButtonSchema(primaryCTA) ? (
    <Button
      variant="button-filled-blue"
      data-testid={TRANSACTION_MODAL_PRIMARY_CTA}
      {...primaryCTA}
    />
  ) : (
    primaryCTA
  );

  const secondaryCTAElement = !secondaryCTA ? null : isUsingButtonSchema(secondaryCTA) ? (
    <Button
      variant="button-ghost-grey"
      data-testid={TRANSACTION_MODAL_SECONDARY_CTA}
      {...secondaryCTA}
    />
  ) : (
    secondaryCTA
  );

  return (
    <Modal
      className={className}
      isAlertModal={false}
      modalDescription={modalDescription}
      modalLabel={modalLabel}
      onDismiss={onDismiss}
      variant={variant}
      withCloseButton
      {...rest}
    >
      {children}

      <Box
        tx={{
          display: 'flex',
          justifyContent: tertiaryAction ? 'space-between' : 'flex-end',
          mt: 32,
        }}
      >
        {tertiaryAction && (
          <Box
            tx={{
              display: 'flex',
              height: 40,
              marginInlineEnd: 'auto',
              alignItems: 'center',
            }}
          >
            {tertiaryAction}
          </Box>
        )}
        <Box tx={{ '& > *:first-child': { mr: 12 } }}>
          {secondaryCTAElement}

          {primaryCTAElement}
        </Box>
      </Box>
    </Modal>
  );
};

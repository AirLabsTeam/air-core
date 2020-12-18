import React, { useRef } from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { isString } from 'lodash';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Text } from '../Text';
import { Modal, ModalProps } from './Modal';

export const ANNOUNCEMENT_MODAL_CTA = 'ANNOUNCEMENT_MODAL_CTA';

/** A callback that requires the usage of onDismiss and ref to keep things accessible! */
export type AnnouncementModalCTARenderProp = ({
  onDismiss,
  ref,
}: Pick<AnnouncementModalProps, 'onDismiss'> & {
  ref: React.MutableRefObject<any>;
}) => JSX.Element;

export interface AnnouncementModalProps
  extends Omit<
    ModalProps,
    'isAlertModal' | 'children' | 'modalDescription' | 'modalLabel' | 'leastDestructiveRef'
  > {
  cta: string | React.ForwardRefRenderFunction<any, { [key: string]: any }>;
  imageSource?: string;
  modalDescription: string;
  modalLabel: string;
  ['data-testid']?: string;
}

export const AnnouncementModal = ({
  className,
  cta,
  imageSource,
  isOpen = false,
  modalDescription,
  modalLabel,
  onDismiss,
  variant = 'modal-medium',
  withCloseButton = true,
  ...rest
}: AnnouncementModalProps) => {
  const ctaRef = useRef<any>(null);

  /* eslint-disable react/display-name */
  const CTAElement = isString(cta)
    ? React.forwardRef((props: { ref: ButtonProps['ref'] }, ref: ButtonProps['ref']) => (
        <Button {...props} onClick={onDismiss} data-testid={ANNOUNCEMENT_MODAL_CTA} ref={ref}>
          {cta}
        </Button>
      ))
    : React.forwardRef(cta);
  /* eslint-enable react/display-name */

  CTAElement.displayName = 'AnnouncementModalCTA';

  return (
    <Modal
      className={className}
      isAlertModal={withCloseButton ? false : true}
      isOpen={isOpen}
      leastDestructiveRef={withCloseButton ? undefined : ctaRef}
      modalDescription={<VisuallyHidden>{modalDescription}</VisuallyHidden>}
      modalLabel={<VisuallyHidden>{modalLabel}</VisuallyHidden>}
      onDismiss={onDismiss}
      variant={variant}
      withCloseButton={withCloseButton}
      {...rest}
    >
      {/**
       * Since the modal label and descripton must render first, they're visually hidden while the visible label and
       * description are hidden from screen reader users via aria-hidden="true".
       */}
      <Box aria-hidden="true" tx={{ mt: 32, mx: 16, mb: 4 }}>
        <Box tx={{ display: 'flex', justifyContent: 'center', mb: 16 }}>
          <img
            src={imageSource}
            height="120"
            alt="" // the image doesn't convey meaning, and the container is hidden from screen readers anyways.
          />
        </Box>

        <Text
          variant="text-ui-24"
          tx={{ fontWeight: 'semibold', color: 'jay500', textAlign: 'center', mb: 8 }}
        >
          {modalLabel}
        </Text>

        <Text variant="text-ui-16" tx={{ color: 'pigeon600', textAlign: 'center', mb: 40 }}>
          {modalDescription}
        </Text>

        <Box tx={{ display: 'flex', justifyContent: 'center' }}>
          <CTAElement ref={ctaRef} />
        </Box>
      </Box>
    </Modal>
  );
};

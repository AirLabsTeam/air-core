import React, { forwardRef, useRef } from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { isString } from 'lodash';
import { Box, BoxProps } from '../Box';
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

interface LinkCTA extends BoxProps<'a'> {}
interface ButtonCTA extends ButtonProps {}

export interface AnnouncementModalProps
  extends Omit<
    ModalProps,
    'isAlertModal' | 'children' | 'modalDescription' | 'modalLabel' | 'leastDestructiveRef'
  > {
  /**
   * Can either be a string or an object filled with props relevant to either a button component or a box component
   * rendered as an anchor element.
   */
  cta: string | LinkCTA | ButtonCTA;
  imageSource?: string;
  modalDescription: string;
  modalLabel: string;
  ['data-testid']?: string;
}

const CTAButton = forwardRef(
  (
    { children, onDismiss }: Pick<AnnouncementModalProps, 'onDismiss'> & { children: string },
    ref: ButtonProps['ref'],
  ) => (
    <Button onClick={onDismiss} data-testid={ANNOUNCEMENT_MODAL_CTA} ref={ref}>
      {children}
    </Button>
  ),
);

CTAButton.displayName = 'CTAButton';

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
  const ctaRef = useRef<any>(null); // probably a button, but could also be an anchor

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
       * The base Modal component renders the label and descripton beforre children (this content). For this abstraction,
       * we pass visually-hidden elements for the base Modal's label and description keeping the modal announced properly,
       * but we visibly render the correct content while masking it for users with assistive technology via aria-hidden.
       *
       * In other words, assistive technology users hear the correct thing while seeing-eye users see the correct thing.
       */}
      <Box tx={{ mt: 32, mx: 16, mb: 4 }}>
        <Box aria-hidden="true">
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
        </Box>

        <Box tx={{ display: 'flex', justifyContent: 'center' }}>
          {isString(cta) ? (
            <CTAButton onDismiss={onDismiss} ref={ctaRef}>
              {cta}
            </CTAButton>
          ) : (
            // @ts-ignore
            <Button as={cta?.href ? 'a' : 'button'} {...cta} ref={ctaRef} />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

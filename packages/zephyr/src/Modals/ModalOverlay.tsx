import React, { forwardRef } from 'react';
import { AlertDialogOverlay, AlertDialogProps } from '@reach/alert-dialog';
import { DialogOverlay, DialogProps } from '@reach/dialog';
import { motion, MotionProps } from 'framer-motion';
import { rgba } from 'polished';
import { useTheme } from 'styled-components';
import { Box } from '../Box';
import { ALERT_MODAL_OVERLAY, MODAL_OVERLAY } from '../testIDs';
import { ModalProps } from './Modal';

interface ModalOverlayProps
  extends Pick<ModalProps, 'onDismiss'>,
    Pick<DialogProps, 'allowPinchZoom' | 'initialFocusRef' | 'isOpen'>,
    Pick<AlertDialogProps, 'leastDestructiveRef'> {
  children: JSX.Element;
  isAlertModal: boolean;
  leastDestructiveRef?: React.RefObject<HTMLElement>;
  shouldReduceMotion: boolean;
}

export const ModalOverlay = forwardRef<HTMLElement, ModalOverlayProps>(
  (
    {
      children,
      isAlertModal,
      leastDestructiveRef,
      onDismiss,
      shouldReduceMotion,
      isOpen,
      initialFocusRef,
      allowPinchZoom,
    }: ModalOverlayProps,
    ref,
  ) => {
    const theme = useTheme();
    const testID = isAlertModal ? ALERT_MODAL_OVERLAY : MODAL_OVERLAY;

    const motionStyles: MotionProps = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        type: 'tween',
      },
    };

    return (
      <Box
        as={motion.custom(isAlertModal ? AlertDialogOverlay : DialogOverlay)}
        {...(motionStyles as any)}
        __baseStyles={{
          backgroundColor: rgba(theme.colors.pigeon700, 0.75),
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'auto',
        }}
        data-testid={testID}
        key={testID}
        onDismiss={isAlertModal ? undefined : onDismiss}
        leastDestructiveRef={leastDestructiveRef}
        isOpen={isOpen}
        initialFocusRef={initialFocusRef}
        allowPinchZoom={allowPinchZoom}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

ModalOverlay.displayName = 'ModalOverlay';

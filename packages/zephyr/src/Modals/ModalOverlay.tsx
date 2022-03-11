import { forwardRef, RefObject } from 'react';
import { AlertDialogOverlay, AlertDialogProps } from '@reach/alert-dialog';
import { DialogOverlay, DialogProps } from '@reach/dialog';
import { motion, MotionProps } from 'framer-motion';
import { rgba } from 'polished';
import { useTheme } from 'styled-components';
import { Box, BoxProps } from '../Box';
import { ALERT_MODAL_OVERLAY, MODAL_OVERLAY } from '../testIDs';
import { ModalProps } from './Modal';

interface ModalOverlayProps
  extends Pick<ModalProps, 'onDismiss'>,
    Pick<DialogProps, 'allowPinchZoom' | 'initialFocusRef' | 'isOpen'>,
    Pick<AlertDialogProps, 'leastDestructiveRef'> {
  children: JSX.Element;
  isAlertModal: boolean;
  leastDestructiveRef?: RefObject<HTMLElement>;
  shouldReduceMotion: boolean;
  /**
   * You should avoid using this. However if you need to use a Radix menu in a modal, this may become necessary since the ModalOverlay used (that is from Radix) "swallows" the onClick that happens with the trigger.
   */
  dangerouslyBypassFocusLock?: boolean;
}

const MotionAlertDialogOverlay = motion.custom(AlertDialogOverlay);
const MotionDialogOverlay = motion.custom(DialogOverlay);

export const ModalOverlay = forwardRef<HTMLElement, ModalOverlayProps>(
  (
    {
      children,
      isAlertModal,
      leastDestructiveRef,
      onDismiss,
      shouldReduceMotion,
      initialFocusRef,
      allowPinchZoom,
    }: ModalOverlayProps,
    ref,
  ) => {
    const theme = useTheme();
    const testID = isAlertModal ? ALERT_MODAL_OVERLAY : MODAL_OVERLAY;

    const motionStyles: Pick<MotionProps, 'initial' | 'animate' | 'exit' | 'transition'> = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        duration: shouldReduceMotion ? 0 : 0.15,
        type: 'tween',
      },
    };

    const baseStyles: BoxProps['tx'] = {
      backgroundColor: rgba(theme.colors.pigeon700, 0.75),
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'auto',
    };

    return isAlertModal ? (
      <Box
        as={MotionAlertDialogOverlay}
        {...motionStyles}
        transition={motionStyles.transition}
        tx={baseStyles}
        data-testid={testID}
        key={testID}
        leastDestructiveRef={leastDestructiveRef}
        initialFocusRef={initialFocusRef}
        allowPinchZoom={allowPinchZoom}
        ref={ref}
      >
        {children}
      </Box>
    ) : (
      <Box
        as={MotionDialogOverlay}
        {...motionStyles}
        tx={baseStyles}
        data-testid={testID}
        key={testID}
        onDismiss={onDismiss}
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

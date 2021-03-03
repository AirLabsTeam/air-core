import React from 'react';
import { AlertDialogContent } from '@reach/alert-dialog';
import { DialogContent } from '@reach/dialog';
import { motion, MotionProps } from 'framer-motion';
import { Box, BoxProps } from '../Box';
import { ALERT_MODAL_DIALOG_CONTENT, MODAL_DIALOG_CONTENT } from '../testIDs';
import { ModalProps } from './Modal';

interface ModalContentProps
  extends Pick<ModalProps, 'children' | 'className' | 'data-testid' | 'tx' | 'variant'> {
  isAlertModal: boolean;
  labelID: string;
  descriptionID: string;
  shouldReduceMotion: boolean;
}

const MotionAlertDialogContent = motion.custom(AlertDialogContent);
const MotionDialogContent = motion.custom(DialogContent);

export const ModalContent = ({
  children,
  className,
  'data-testid': testID,
  isAlertModal,
  tx,
  shouldReduceMotion,
  variant,
  labelID,
  descriptionID,
}: ModalContentProps) => {
  const motionStyles: Pick<MotionProps, 'initial' | 'animate' | 'exit'> = {
    initial: {
      opacity: 0,
      translateY: '50px',
    },
    animate: {
      opacity: 1,
      translateY: '0px',
      transition: {
        delay: 0.2,
        duration: shouldReduceMotion ? 0 : 0.2,
        type: 'tween',
      },
    },
    exit: { opacity: 0, translateY: '50px' },
  };

  const baseStyles: BoxProps['tx'] = {
    position: 'relative', // Ensures <CloseButton /> is rendered inside the modal itself
    backgroundColor: 'white',
    borderRadius: '6px',
    px: 32,
    pt: 32,
    pb: 28,
    mx: 'auto',
    mt: [32, '10vw'],
    minHeight: '100px',
    maxWidth: '100vw',
    color: 'pigeon700',
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    },
  };

  return isAlertModal ? (
    <Box
      as={MotionAlertDialogContent}
      {...motionStyles}
      __baseStyles={baseStyles}
      className={className}
      data-testid={testID}
      key={testID ?? isAlertModal ? ALERT_MODAL_DIALOG_CONTENT : MODAL_DIALOG_CONTENT}
      tx={tx}
      variant={variant}
      aria-labelledby={labelID}
      aria-describedby={descriptionID}
    >
      {children}
    </Box>
  ) : (
    <Box
      as={MotionDialogContent}
      {...motionStyles}
      __baseStyles={baseStyles}
      className={className}
      data-testid={testID}
      key={testID ?? isAlertModal ? ALERT_MODAL_DIALOG_CONTENT : MODAL_DIALOG_CONTENT}
      tx={tx}
      variant={variant}
    >
      {children}
    </Box>
  );
};

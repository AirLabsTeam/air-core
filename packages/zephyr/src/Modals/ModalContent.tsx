import React from 'react';
import { AlertDialogContent } from '@reach/alert-dialog';
import { DialogContent } from '@reach/dialog';
import { motion, MotionProps } from 'framer-motion';
import { Box } from '../Box';
import { ALERT_MODAL_DIALOG_CONTENT, MODAL_DIALOG_CONTENT } from '../testIDs';
import { ModalProps } from './Modal';

interface ModalContentProps
  extends Pick<ModalProps, 'children' | 'className' | 'data-testid' | 'tx' | 'variant'> {
  isAlertModal: boolean;
  labelID: string;
  descriptionID: string;
  shouldReduceMotion: boolean;
}

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
  const motionStyles: MotionProps = {
    initial: { opacity: 0, translateY: '50px' },
    animate: { opacity: 1, translateY: '0px' },
    exit: { opacity: 0, translateY: '50px' },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.3,
      type: 'tween',
    },
  };

  // We don't want to define these attributes for alert modals. Passing undefined to the props explicitly yields warnings.
  // Those are auto-magically handled by <AlertDialogLabel /> and <AlertDialogDescription />
  const dialogAriaAttributes = isAlertModal
    ? undefined
    : {
        'aria-labelledby': labelID,
        'aria-describedby': descriptionID,
      };

  return (
    <Box
      as={motion.custom(isAlertModal ? AlertDialogContent : DialogContent)}
      {...(motionStyles as any)}
      __baseStyles={{
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
      }}
      className={className}
      data-testid={testID}
      key={testID ?? isAlertModal ? ALERT_MODAL_DIALOG_CONTENT : MODAL_DIALOG_CONTENT}
      tx={tx}
      variant={variant}
      {...dialogAriaAttributes}
    >
      {children}
    </Box>
  );
};

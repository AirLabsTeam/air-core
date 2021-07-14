import { DialogOverlay, DialogOverlayProps } from '@reach/dialog';
import { motion, Variant } from 'framer-motion';
import { rgba } from 'polished';
import { useTheme } from 'styled-components';

import { Box } from '../../Box';

export interface ActionSheetOverlayProps extends Pick<DialogOverlayProps, 'children'> {
  onClose: DialogOverlayProps['onDismiss'];
}
const MotionDialogOverlay = motion.custom(DialogOverlay);

export const ActionSheetOverlay = ({ children, onClose }: ActionSheetOverlayProps) => {
  const theme = useTheme();

  const animation: { animate: Variant; exit: Variant; initial: Variant } = {
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 },
  };

  return (
    <Box
      animate="animate"
      as={MotionDialogOverlay}
      exit="exit"
      initial="initial"
      onDismiss={onClose}
      tx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: rgba(theme.colors.pigeon700, 0.75),
      }}
      transition={{
        type: 'tween',
        duration: 0.2,
      }}
      variants={animation}
    >
      {children}
    </Box>
  );
};

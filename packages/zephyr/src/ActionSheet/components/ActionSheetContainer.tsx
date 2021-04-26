import { motion, PanInfo, useReducedMotion } from 'framer-motion';
import { noop } from 'lodash';
import React from 'react';

import { Box, BoxProps } from '../../Box';

export interface ActionSheetContainerProps extends Pick<BoxProps, 'children'> {
  onClose: () => void;
}

export const ActionSheetContainer = ({ children, onClose = noop }: ActionSheetContainerProps) => {
  const shouldReduceMotion = useReducedMotion();

  const animation = {
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 300,
    },
    initial: {
      // opacity: 0,
      y: shouldReduceMotion ? 0 : 300,
    },
  };

  return (
    <Box
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'spring', damping: 20, stiffness: 140 }}
      variants={animation}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        /**
         * When `drag` ends and the action sheet has an offset greater
         * than `40px`, the action sheet will close.
         */
        if (info.offset.y > 40) {
          onClose();
        }
      }}
      tx={{
        zIndex: 999,
        position: 'fixed',
        top: 'auto',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 4,

        /**
         * This is a CSS hack to prevent the actionsheet from showing the
         * content below it when dragged upwards.
         */
        bottom: '-100vh',
        pb: '100vh',

        '[data-reach-dialog-content]': {
          backgroundColor: 'transparent',
          width: '100%',
          margin: 0,
          p: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};

import { motion, useReducedMotion, Variant } from 'framer-motion';
import { isNull } from 'lodash';
import { rgba } from 'polished';

import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../../Box';

export type MenuSize = 'small' | 'large';

export interface MenuProps extends Pick<BoxProps, 'children' | 'tx'> {
  /**
   * The `animation` prop allows you to define the animation for each of the 4 animation states.
   */
  animation?: {
    animate: Variant;
    exit: Variant;
    initial: Variant;
  } | null;
  /**
   * The `size` prop determines the padding and default width of the menu.
   */
  size?: MenuSize;
}

export const Menu = ({ animation, children, tx, size = 'small', ...restOfProps }: MenuProps) => {
  const shouldReduceMotion = useReducedMotion();
  const theme = useTheme();
  const isSmallSize = size === 'small';

  const defaultMenuAnimation: MenuProps['animation'] = {
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
    },
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
    },
  };

  return (
    <Box
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      variants={isNull(animation) ? undefined : defaultMenuAnimation}
      tx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        backgroundColor: 'white',
        width: isSmallSize ? 216 : 240,
        p: isSmallSize ? 6 : 8,
        outline: 'none',
        borderRadius: 4,
        boxShadow: `
          0px 2px 8px ${rgba(theme.colors.black, 0.2)}, 
          0px 1px 3px ${rgba(theme.colors.black, 0.15)}, 
          0px 0px 2px ${rgba(theme.colors.black, 0.25)}
        `,
        ...tx,
      }}
      {...restOfProps}
    >
      {children}
    </Box>
  );
};

import { motion, useReducedMotion, Variant } from 'framer-motion';
import { rgba } from 'polished';
import React from 'react';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../../Box';

export type MenuSize = 'small' | 'large';

export interface MenuProps extends Pick<BoxProps, 'children' | 'tx'> {
  /**
   * The `animation` prop allows you to define the animation for each of the 4 animation states.
   */
  animation?: {
    hidden: Variant;
    visible: Variant;
    reducedHidden: Variant;
    reducedVisible: Variant;
  };
  /**
   * The `size` prop determines the padding and default width of the menu.
   */
  size?: MenuSize;
}

export const defaultMenuAnimation: MenuProps['animation'] = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  reducedHidden: {
    opacity: 0,
  },
  reducedVisible: {
    opacity: 1,
  },
};

export const Menu = ({
  animation = defaultMenuAnimation,
  children,
  tx,
  size = 'small',
  ...restOfProps
}: MenuProps) => {
  const shouldReduceMotion = useReducedMotion();
  const theme = useTheme();
  const isSmallSize = size === 'small';

  return (
    <Box
      as={motion.div}
      initial={shouldReduceMotion ? 'reducedHidden' : 'hidden'}
      animate={shouldReduceMotion ? 'reducedVisible' : 'visible'}
      exit={shouldReduceMotion ? 'reducedHidden' : 'hidden'}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      variants={animation}
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

import { motion, useReducedMotion } from 'framer-motion';
import { rgba } from 'polished';
import React from 'react';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../../Box';

export type MenuSize = 'small' | 'large';

export interface MenuProps extends Pick<BoxProps, 'children' | 'tx'> {
  /**
   * The `size` prop determines the padding and default width of the menu.
   */
  size?: MenuSize;
}

export const Menu = ({ children, tx, size = 'small', ...restOfProps }: MenuProps) => {
  const shouldReduceMotion = useReducedMotion();
  const theme = useTheme();
  const isSmallSize = size === 'small';

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
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

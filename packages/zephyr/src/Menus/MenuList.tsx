import { MenuList as ReachMenuList, MenuListProps as ReachMenuListProps } from '@reach/menu-button';
import { rgba } from 'polished';
import React from 'react';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../Box';

export interface MenuListProps extends ReachMenuListProps, Pick<BoxProps, 'tx'> {}

export const MenuList = ({ children, tx }: MenuListProps) => {
  const theme = useTheme();

  return (
    <Box as={ReachMenuList} tx={{ outline: 'none' }}>
      <Box
        tx={{
          display: 'block',
          backgroundColor: 'white',
          width: 216,
          p: 8,
          outline: 'none',
          borderRadius: 4,
          boxShadow: `
            0px 2px 8px ${rgba(theme.colors.black, 0.2)}, 
            0px 1px 3px ${rgba(theme.colors.black, 0.15)}, 
            0px 0px 2px ${rgba(theme.colors.black, 0.25)}
          `,
          ...tx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

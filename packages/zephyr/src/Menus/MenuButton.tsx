import {
  MenuButton as ReachMenuButton,
  MenuButtonProps as ReachMenuButtonProps,
} from '@reach/menu-button';
import React, { FunctionComponent } from 'react';

import { Box, BoxProps } from '../Box';

export interface MenuButtonProps extends Omit<ReachMenuButtonProps, 'as'>, Pick<BoxProps, 'tx'> {}

export const MenuButton = ({ children, ...restOfProps }: MenuButtonProps) => {
  return (
    <Box
      as={ReachMenuButton as FunctionComponent<Omit<ReachMenuButtonProps, 'as'>>}
      {...restOfProps}
    >
      {children}
    </Box>
  );
};

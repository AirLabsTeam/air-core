import React from 'react';

import { Box, BoxProps } from '../../Box';

export interface MenuDividerProps extends BoxProps {}

export const MenuDivider = ({ tx, ...restOfProps }: MenuDividerProps) => {
  return (
    <Box
      as="hr"
      tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, my: 8, ...tx }}
      {...restOfProps}
    />
  );
};

import React, { FC, ComponentProps, memo } from 'react';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';

import { Box } from '../../Box';

export interface MenuDividerProps {
  isTop?: boolean;
}

export const MenuItemDivider = memo(({ isTop }: MenuDividerProps) => {
  return (
    <Box
      as={
        DropdownMenuSeparator as FC<
          Omit<ComponentProps<typeof DropdownMenuSeparator>, 'as' | 'ref'>
        >
      }
      tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, mt: isTop ? 0 : 8, mb: 8 }}
    />
  );
});

MenuItemDivider.displayName = 'MenuItemDivider';

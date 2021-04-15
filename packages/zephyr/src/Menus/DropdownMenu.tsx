import {
  Menu as ReachMenu,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  MenuItemProps as ReachMenuItemProps,
  MenuPopover as ReachMenuPopover,
  MenuItems as ReachMenuItems,
  MenuItemsProps as ReachMenuItemsProps,
} from '@reach/menu-button';
import { AnimatePresence } from 'framer-motion';
import React, { cloneElement, FC, ReactElement, ReactNode } from 'react';

import { Box, BoxProps } from '../Box';
import { MenuItem, MenuItemProps, MenuItemRenderProps, MenuList } from './Menu';

export interface DropdownMenuProps extends Pick<BoxProps, 'tx'> {
  options: (Pick<
    MenuItemProps,
    'divider' | 'leftAdornment' | 'rightAdornment' | 'shortcut' | 'tx'
  > &
    MenuItemRenderProps &
    Omit<ReachMenuItemProps, 'children'>)[];
  size?: 'small' | 'large';
  trigger: ReactNode;
}

export const DropdownMenu = ({ options, size = 'small', trigger, tx }: DropdownMenuProps) => {
  return (
    <ReachMenu>
      {({ isExpanded }) => (
        <>
          {trigger &&
            cloneElement(trigger as ReactElement<any>, {
              as: ReachMenuButton,
            })}
          <Box
            as={ReachMenuPopover}
            tx={{ zIndex: 9999, display: 'block', pointerEvents: isExpanded ? 'auto' : 'none' }}
          >
            <AnimatePresence>
              {isExpanded && (
                <MenuList size={size} tx={tx}>
                  <Box as={ReachMenuItems as FC<ReachMenuItemsProps>} tx={{ outline: 'none' }}>
                    {options.map((option, index) => {
                      return (
                        <MenuItem
                          // @ts-ignore
                          as={ReachMenuItem as FC<ReachMenuItemProps>}
                          key={index}
                          size={size}
                          {...option}
                        />
                      );
                    })}
                  </Box>
                </MenuList>
              )}
            </AnimatePresence>
          </Box>
        </>
      )}
    </ReachMenu>
  );
};

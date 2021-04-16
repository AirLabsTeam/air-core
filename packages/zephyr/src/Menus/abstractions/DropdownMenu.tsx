import {
  Menu as ReachMenu,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  MenuItemProps as ReachMenuItemProps,
  MenuPopover as ReachMenuPopover,
  MenuItems as ReachMenuItems,
  MenuItemsProps as ReachMenuItemsProps,
} from '@reach/menu-button';
import { PRect } from '@reach/rect';
import { AnimatePresence } from 'framer-motion';
import React, { cloneElement, FC, ReactElement, ReactNode } from 'react';

import { Box, BoxProps } from '../../Box';
import { Menu } from '../components/Menu';
import { MenuItem, MenuItemRenderProps, MenuItemProps } from '../components/MenuItem';
import { getPosition } from '../utils/getPosition';

export type DropdownMenuOption = Pick<
  MenuItemProps,
  'divider' | 'leftAdornment' | 'rightAdornment' | 'shortcut' | 'tx'
> &
  MenuItemRenderProps &
  Omit<ReachMenuItemProps, 'children'>;

export interface DropdownMenuProps extends Pick<BoxProps, 'tx'> {
  offset?: number;
  options: DropdownMenuOption[];
  size?: 'small' | 'large';
  trigger: ReactNode;
}

export const DropdownMenu = ({
  offset = 4,
  options,
  size = 'small',
  trigger,
  tx,
}: DropdownMenuProps) => {
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
            position={(targetRect?: PRect | null, popoverRect?: PRect | null) =>
              getPosition(targetRect, popoverRect, offset)
            }
            tx={{ zIndex: 9999, display: 'block', pointerEvents: isExpanded ? 'auto' : 'none' }}
          >
            <AnimatePresence>
              {isExpanded && (
                <Menu size={size} tx={tx}>
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
                </Menu>
              )}
            </AnimatePresence>
          </Box>
        </>
      )}
    </ReachMenu>
  );
};

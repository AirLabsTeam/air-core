import {
  Menu as ReachMenu,
  MenuProps as ReachMenuProps,
  MenuButton as ReachMenuButton,
  MenuButtonProps as ReachMenuButtonProps,
  MenuList as ReachMenuList,
} from '@reach/menu-button';
import { rgba } from 'polished';
import React, { FC, ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../Box';
import { MenuDivider } from './MenuDivider';
import { MenuItem, MenuItemProps } from './MenuItem';

export type MenuProps = ReachMenuProps &
  Pick<BoxProps, 'tx'> & {
    children: ReactNode;
    options?: (Pick<MenuItemProps, 'icon' | 'onSelect' | 'shortcut'> & {
      divider?: boolean;
      label: string;
    })[];
    trigger: ReactNode;
  };

export const Menu = ({ children, options, trigger, tx }: MenuProps) => {
  const theme = useTheme();

  return (
    <Box as={ReachMenu}>
      <Box as={ReachMenuButton as FC<Omit<ReachMenuButtonProps, 'as'>>}>{trigger}</Box>
      <Box
        as={ReachMenuList}
        tx={{
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
        {options
          ? options.map((option, index) => {
              return (
                <>
                  <MenuItem
                    icon={option.icon}
                    onSelect={option.onSelect}
                    key={index}
                    shortcut={option.shortcut}
                  >
                    {option.label}
                  </MenuItem>
                  {option.divider && <MenuDivider />}
                </>
              );
            })
          : children}
      </Box>
    </Box>
  );
};

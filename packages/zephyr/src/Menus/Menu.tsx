import { Menu as ReachMenu, MenuProps as ReachMenuProps } from '@reach/menu-button';
import React, { ReactNode } from 'react';

import { Box, BoxProps } from '../Box';
import { MenuDivider } from './MenuDivider';
import { MenuItem, MenuItemProps, MenuItemVariant } from './MenuItem';
import { MenuList } from './MenuList';

export type MenuProps = ReachMenuProps &
  Pick<BoxProps, 'tx'> & {
    children?: ReactNode;
    /**
     * The options that are rendered in the menu list.
     */
    options?: (Pick<MenuItemProps, 'description' | 'icon' | 'label' | 'onSelect' | 'shortcut'> & {
      /**
       * Renders a divider below the menu item.
       */
      divider?: boolean;
    })[];
    /**
     * The trigger that toggles the opening and closing of the `Menu`. The component that is
     * passed to this prop requires the usage of `MenuButton` exported by Zephyr.
     *
     * For example, if you were to use a Zephyr button, you will need to pass `MenuButton` to
     * the as prop. `<Button as={MenuButton} />`.
     */
    trigger: ReactNode;

    /**
     * The size variant for the menu item.
     */
    variant?: MenuItemVariant;
  };

export const Menu = ({ children, options, trigger, tx, variant = 'small' }: MenuProps) => {
  return (
    <Box as={ReachMenu}>
      {trigger}
      <MenuList tx={tx}>
        {options
          ? options.map((option, index) => {
              return (
                <>
                  <MenuItem
                    description={option.description}
                    icon={option.icon}
                    label={option.label}
                    onSelect={option.onSelect}
                    key={index}
                    shortcut={option.shortcut}
                    variant={variant}
                  />
                  {option.divider && <MenuDivider />}
                </>
              );
            })
          : children}
      </MenuList>
    </Box>
  );
};

import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import { MenuList, MenuListProps } from '../../../src/Menus';

export default {
  title: 'Zephyr/Menus/Components/MenuList',
  component: MenuList,
} as Meta<MenuListProps>;

export const Default: Story<MenuListProps> = (args) => {
  return (
    <MenuList key="menu-list" {...args}>
      <Box tx={{ height: 200 }} />
    </MenuList>
  );
};

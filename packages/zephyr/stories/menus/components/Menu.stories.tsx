import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import { Menu, MenuProps } from '../../../src/Menus/components/Menu';

export default {
  title: 'Zephyr/Menus/Components/Menu',
  component: Menu,
} as Meta<MenuProps>;

export const Default: Story<MenuProps> = (args) => {
  return (
    <Menu key="menu" {...args}>
      <Box tx={{ height: 200 }} />
    </Menu>
  );
};

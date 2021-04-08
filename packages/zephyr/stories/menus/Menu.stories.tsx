import {
  Download as DownloadIcon,
  Gear as GearIcon,
  Link as LinkIcon,
  LogOut as LogOutIcon,
  Delete as DeleteIcon,
} from '@air/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../src/Box';
import { Menu, MenuProps } from '../../src/Menus';
import { MenuDivider } from '../../src/Menus/MenuDivider';
import { MenuItem } from '../../src/Menus/MenuItem';
import { Text } from '../../src/Text';

const meta: Meta<MenuProps> = {
  title: 'Zephyr/Menus/Menu',
  component: Menu,
};

export default meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      icon: DownloadIcon,
      label: 'Download',
      onSelect: () => {},
      shortcut: ['CMD', 'S'],
    },
    {
      divider: true,
      label: 'Share a link',
      icon: LinkIcon,
      onSelect: () => {},
      shortcut: ['CMD', 'C'],
    },
    {
      icon: DeleteIcon,
      label: 'Delete',
      onSelect: () => {},
      shortcut: ['Del'],
    },
  ],
  trigger: 'Button',
};

export const MenuWithCustomChildren = Template.bind({});

MenuWithCustomChildren.args = {
  children: (
    <>
      <Box tx={{ backgroundColor: 'jay050', borderRadius: 4, px: 8, py: 12, mb: 8 }}>
        <Text tx={{ color: 'jay800', fontWeight: 'semibold' }} variant="text-ui-12">
          Word of the day: New
        </Text>
        <Text tx={{ color: 'jay600' }} variant="text-ui-12">
          Not existing before; made, introduced, or discovered recently or now for the first time.
        </Text>
      </Box>
      <MenuDivider />
      <MenuItem icon={GearIcon} onSelect={() => {}}>
        Workspace settings
      </MenuItem>
      <MenuItem icon={LogOutIcon} onSelect={() => {}}>
        Log out
      </MenuItem>
    </>
  ),
  trigger: 'Button',
  tx: {
    width: 320,
  },
};

import { Check as CheckIcon, Download as DownloadIcon } from '@air/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import { MenuItem, MenuItemProps } from '../../../src/Menus/components/MenuItem';
import { Text } from '../../../src/Text';

export default {
  title: 'Zephyr/Menus/Components/MenuItem',
  component: MenuItem,
} as Meta<MenuItemProps>;

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Menu item',
  tx: {
    width: 200,
  },
};

export const withDescription = Template.bind({});

withDescription.args = {
  description:
    'Pastry cheesecake oat cake dragée. Carrot cake tiramisu cake jelly-o lemon drops icing marshmallow gingerbread. Cake toffee donut.',
  label: 'Menu item',
  leftAdornment: <Box as={DownloadIcon} tx={{ display: 'block', width: 16 }} />,
  tx: {
    width: 320,
  },
};

withDescription.parameters = {
  docs: {
    description: {
      story:
        'When a description is provided, the styling of the menu item changes. The menu item container will go from a fixed height of either `32px` or `36px` to `auto` and alignemnt from `center` to `flex-start`.',
    },
  },
};

export const withLeftAdornment = Template.bind({});

withLeftAdornment.args = {
  label: 'Menu item',
  leftAdornment: <Box as={DownloadIcon} tx={{ display: 'block', width: 16 }} />,
  tx: {
    width: 200,
  },
};

withLeftAdornment.parameters = {
  docs: {
    description: {
      story: 'The left adornment is often used to display an icon that represents the menu item.',
    },
  },
};

export const withRightAdornment = Template.bind({});

withRightAdornment.args = {
  label: 'Menu item',
  rightAdornment: <Box as={CheckIcon} tx={{ display: 'block', width: 12 }} />,
  tx: {
    width: 200,
  },
};

withRightAdornment.parameters = {
  docs: {
    description: {
      story:
        'The right adornment is often used to display an icon that represents the state of the menu item (checked/unchecked).',
    },
  },
};

export const withShortcut = Template.bind({});

withShortcut.args = {
  label: 'Menu item',
  shortcut: ['del', 's'],
  tx: {
    width: 200,
  },
};

withShortcut.parameters = {
  docs: {
    description: {
      story: 'The `divider` prop will append a divider to the bottom of the menu item.',
    },
  },
};

export const withDivider = Template.bind({});

withDivider.args = {
  divider: true,
  label: 'Menu item',
  shortcut: ['del', 's'],
  tx: {},
};

withDivider.parameters = {
  docs: {
    description: {
      story:
        'We recommend against passing a custom child to the menu item unless it’s absolutely necessary to do so. ',
    },
  },
};

export const withCustomChildren = Template.bind({});

withCustomChildren.args = {
  children: (
    <>
      <Text
        tx={{
          display: 'inline-block',
          backgroundColor: 'flamingo100',
          px: 8,
          mr: 4,
          borderRadius: 4,
          fontWeight: 'medium',
        }}
        variant="text-ui-12-uppercase"
      >
        Custom
      </Text>
      <Text
        tx={{
          display: 'inline-block',
          backgroundColor: 'jay100',
          px: 8,
          borderRadius: 4,
          fontWeight: 'medium',
        }}
        variant="text-ui-12-uppercase"
      >
        Children
      </Text>
    </>
  ),
  shortcut: ['del', 's'],
  tx: {},
};

withCustomChildren.parameters = {
  docs: {
    description: {
      story:
        'We recommend against passing a custom child to the menu item unless it’s absolutely necessary to do so. ',
    },
  },
};

import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import { Menu, MenuProps } from '../../../src/Menus/components/Menu';

export default {
  title: 'Zephyr/Menus/Components/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          'The `Menu` component is a `div` that contains the styles and behaviors for our menus. This component has `motion.div` passed to the polymorphic `as` prop and has default animations applied to it. In order to have these animations mount and unmount properly, you will need to wrap this component in the `AnimatePresence` component and add a `key` prop.',
      },
    },
  },
} as Meta<MenuProps>;

const Template: Story<MenuProps> = (args) => {
  return (
    <Menu key="menu" {...args}>
      <Box tx={{ height: 200 }} />
    </Menu>
  );
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {};

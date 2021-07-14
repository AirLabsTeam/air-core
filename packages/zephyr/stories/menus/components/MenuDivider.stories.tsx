import { Meta, Story } from '@storybook/react';
import React from 'react';

import { MenuDivider, MenuDividerProps } from '../../../src/Menus/components/MenuDivider';

export default {
  title: 'Zephyr/Menus/Components/MenuDivider',
  component: MenuDivider,
  parameters: {
    docs: {
      description: {
        component:
          'The `MenuDivider` component is a `hr` that is used in the `Menu` component as a seperator between items.',
      },
    },
  },
} as Meta<MenuDividerProps>;

const Template: Story<MenuDividerProps> = (args) => {
  return <MenuDivider {...args} />;
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {};

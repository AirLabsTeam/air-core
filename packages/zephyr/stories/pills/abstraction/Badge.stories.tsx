import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Badge, BadgeProps } from '../../../src/Pills/abstractions/Badge';

export default {
  title: 'Zephyr/Pill/Abstraction/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta<BadgeProps>;

const Template: Story<BadgeProps> = (args) => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Badge',
};

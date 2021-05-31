import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Pill, PillProps } from '../../../src/Pills/components/Pill';

export default {
  title: 'Zephyr/Pill/Components/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta<PillProps>;

const Template: Story<PillProps> = (args) => {
  return <Pill {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Pill',
};

Default.parameters = {};

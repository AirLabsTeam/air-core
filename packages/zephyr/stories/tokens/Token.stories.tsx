import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Token, TokenProps } from '../../src/Tokens/Token';

export default {
  title: 'Zephyr/Token/Token',
  component: Token,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta<TokenProps>;

const Template: Story<TokenProps> = (args) => {
  return <Token {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Token',
};

Default.parameters = {};

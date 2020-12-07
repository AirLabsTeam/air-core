import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button',
  component: Button,
};

export default meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} data-testid={meta.title} />;

Default.args = {
  children: 'Button',
};

Default.parameters = {
  docs: {
    description: {
      story:
        'Grey ghost buttons are a more subtle, repeatable versions of their blue counterparts. Pairs nicely with filled buttons as well',
    },
  },
};

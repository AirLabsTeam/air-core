import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  size: 'medium',
  variant: 'filled-blue',
};

Default.parameters = {
  docs: {
    description: {
      story:
        'Grey ghost buttons are a more subtle, repeatable versions of their blue counterparts. Pairs nicely with filled buttons as well',
    },
  },
};

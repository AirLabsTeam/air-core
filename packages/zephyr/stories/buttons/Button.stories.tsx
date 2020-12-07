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

export const ButtonAs: Story<ButtonProps> = () => (
  <Button as="a" href="https://google.com" target="_blank">
    This story acts as an integration test asserting that we can render the item as another semantic
    element.
  </Button>
);

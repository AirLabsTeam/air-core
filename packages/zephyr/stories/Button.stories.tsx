import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} data-testid={meta.title} />;

export const Simple = Template.bind({}) as typeof Template;

Simple.args = {
  children: 'Button',
};

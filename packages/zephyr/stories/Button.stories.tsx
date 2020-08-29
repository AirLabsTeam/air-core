import React from 'react';
import { Button, ButtonProps } from '../src/Button';

const meta = {
  title: 'Zephyr/Button',
  component: Button,
};

export default meta;

const Template = (args: Omit<ButtonProps, 'ref'>) => <Button {...args} data-testid={meta.title} />;

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  children: 'Button',
};

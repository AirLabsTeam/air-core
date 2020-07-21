import React from 'react';
import { Button, ButtonProps } from '../src/Button';

const meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template = (args: ButtonProps) => <Button {...args} data-testid={meta.title} />;

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  children: 'Button',
};

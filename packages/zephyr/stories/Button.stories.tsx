import React from 'react';
// import { actions } from '@storybook/addon-actions';
import { Button, ButtonProps } from '../src';

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

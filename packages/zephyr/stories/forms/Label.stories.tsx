import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from '../../src/Forms/Label';

const meta: Meta<LabelProps> = {
  title: 'Zephyr/🚧 Under Construction/Forms/Label',
  component: Label,
};

export default meta;

const Template: Story<LabelProps> = (args) => <Label {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Label',
  for: 'some-field-element-id',
};

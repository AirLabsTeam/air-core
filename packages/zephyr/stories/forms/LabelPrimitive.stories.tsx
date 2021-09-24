import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LabelPrimitive, LabelPrimitiveProps } from '../../src/Forms/LabelPrimitive';

const meta: Meta<LabelPrimitiveProps> = {
  title: 'Zephyr/Forms/LabelPrimitive',
  component: LabelPrimitive,
};

export default meta;

const Template: Story<LabelPrimitiveProps> = (args) => (
  <LabelPrimitive {...args} data-testid={meta.title} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Label Primitive',
  for: 'some-field-element-id',
};

export const Required: Story<LabelPrimitiveProps> = (args) => {
  return <LabelPrimitive {...args} />;
};

Required.args = {
  children: 'Label Primitive',
  for: 'some-field-element-id',
  isFieldRequired: true,
};

export const RequiredWithCustomAsteriskStyles: Story<LabelPrimitiveProps> = (args) => {
  return <LabelPrimitive {...args} />;
};

RequiredWithCustomAsteriskStyles.args = {
  children: 'Label Primitive',
  for: 'some-field-element-id',
  isFieldRequired: true,
  tx: {
    Asterisk: {
      color: 'red',
    },
  },
};

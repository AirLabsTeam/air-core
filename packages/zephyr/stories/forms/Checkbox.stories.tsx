import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from '../../src/Forms/Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Zephyr/Forms/Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  label: 'New?',
  id: 'some-field-element-id',
};

export const WithDefaultState = Template.bind({});

WithDefaultState.args = {
  label: 'New?',
  id: 'some-field-element-id',
  checked: true,
};

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Toggle, ToggleProps } from '../../../src/Forms/Toggle/Toggle';

const meta: Meta<ToggleProps> = {
  title: 'Zephyr/Forms/Toggle/Toggle',
  component: Toggle,
};

export default meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  label: 'this is a toggle',
  id: 'some-field-element-id',
};

export const WithDefaultState = Template.bind({});

WithDefaultState.args = {
  label: 'this is a toggle',
  id: 'some-field-element-id',
  inputProps: {
    checked: true,
  },
};

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik } from 'formik';
import { noop } from 'lodash';

import { Toggle, ToggleProps } from '../../src/Forms/Toggle';

const meta: Meta<ToggleProps> = {
  title: 'Zephyr/Forms/Toggle',
  component: Toggle,
};

export default meta;

const Template: Story<ToggleProps> = (args) => (
  <Formik initialValues={{ toggle: false }} onSubmit={noop}>
    <Toggle {...args} data-testid={meta.title} name="toggle" />
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  label: 'this is a toggle',
  id: 'some-field-element-id',
};

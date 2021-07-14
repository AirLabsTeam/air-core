import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik } from 'formik';
import { noop } from 'lodash';

import { FormikToggle, FormikToggleProps } from '../../../src/Forms/Toggle/FormikToggle';

const meta: Meta<FormikToggleProps> = {
  title: 'Zephyr/Forms/Toggle/FormikToggle',
  component: FormikToggle,
};

export default meta;

const Template: Story<FormikToggleProps> = (args) => (
  <Formik initialValues={{ toggle: false }} onSubmit={noop}>
    <FormikToggle {...args} data-testid={meta.title} name="toggle" />
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  label: 'this is a toggle',
  id: 'some-field-element-id',
};

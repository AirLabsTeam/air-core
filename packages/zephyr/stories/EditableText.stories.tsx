import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Text } from '../src/Text';
import { EditableText, EditableTextProps } from '../src/EditableText';

export default {
  title: 'Zephyr/EditableText',
  component: EditableText,
  parameters: {
    docs: {
      description: {
        component:
          'The `EditableText` component extends the `Text` component and contains both a `button` and `textarea` that gets conditionally rendered based on the `isEditing` state. Under the hood, it uses [formik](https://formik.org/) to manage the form state.',
      },
    },
  },
} as Meta<EditableTextProps>;

const Template: Story<EditableTextProps> = (args) => {
  const [formValue, setFormValue] = useState(args?.value ?? '');

  return (
    <>
      <EditableText
        placeholder="Click to add a description"
        {...args}
        onSubmit={(value) => setFormValue(value['editable-text-value'])}
        value={formValue}
      />
      {formValue && (
        <Text tx={{ mt: 24 }} variant={args.variant ?? 'text-ui-12'}>
          {formValue}
        </Text>
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {};

export const ControlledState = Template.bind({});

ControlledState.args = {
  isEditing: true,
};

export const TextVariants = Template.bind({});

TextVariants.args = {
  variant: 'text-ui-24',
};

export const DefaultValue = Template.bind({});

DefaultValue.args = {
  value: 'Title',
};

export const CustomStyles = Template.bind({});

CustomStyles.args = {
  tx: {
    display: 'flex',
    width: '100%',
    minHeight: 200,
    fontWeight: 'medium',
  },
};

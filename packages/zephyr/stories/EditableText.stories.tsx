import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Formik } from 'formik';
import { Text } from '../src/Text';
import { EditableText, EditableTextProps } from '../src/EditableText';

export default {
  title: 'Zephyr/EditableText',
  component: EditableText,
  parameters: {
    docs: {
      description: {
        component:
          'The `ActionSheet` component is modal that that is styled to look like an ActionSheet on mobile. Under the hood, it uses [@reach/dialog](https://reach.tech/dialog) and [framer-motion](https://www.framer.com/api/motion/gestures) to handle gestures.',
      },
    },
  },
} as Meta<EditableTextProps>;

const Template: Story<EditableTextProps> = (args) => {
  return (
    <>
      <Text variant="text-ui-12">Text</Text>
      <Formik initialValues={{ value: '' }} onSubmit={() => {}} {...args}>
        <EditableText name="value" placeholder="Click to add a description" />
      </Formik>
      <Text variant="text-ui-12">Text</Text>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { Search, EyeClosed } from '@air/icons';
import { noop } from 'lodash';
import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { Input, InputProps } from '../../src/Forms/Input';

// NOTE: If this changes, please change the hard-coded code sample in the Default story's doc source code parameter.
const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
  const validationSchema = object({
    required: string().required('Required').default(''),
    nonRequired: string().default(''),
    disabled: string().required('Required').default('Nobody'),
  });
  const initialValues = validationSchema.cast({})!;

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            alignItems: 'flex-end',
            pb: 12, // only here so that input error messages don't look crammed
          }}
        >
          <Story />

          <Button type="submit" variant="button-filled-blue" tx={{ ml: 8 }}>
            Validate
          </Button>
        </Box>
      )}
    </Formik>
  );
};

const meta: Meta<InputProps> = {
  title: 'Zephyr/🚧 Under Construction/Forms/Input',
  component: Input,
  decorators: [FormikDecorator],
};

export default meta;

export const Default: Story<InputProps> = (args) => <Input {...args} name="required" />;

Default.args = {
  autoComplete: 'off',
  disabled: false,
  id: 'Default',
  isLabelHidden: false,
  label: 'Test',
  required: true,
  type: 'text',
};

Default.parameters = {
  docs: {
    description: {
      component: `This component requires Formik context and any initial value to be defined via a validation schema.
      \nSee source code below for example.`,
    },
    source: {
      code: `
() => {
  const validationSchema = object({
    required: string().required('Required').default(''),
    nonRequired: string().default(''),
    disabled: string().default('Nobody'),
  });

  const initialValues = validationSchema.cast({})!;

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            alignItems: 'flex-end',
            pb: 12, // only here so that input error messages don't look crammed
          }}
        >
          {(args) => <Input {...args} name="required" />}

          <Button type="submit" variant="button-filled-blue" tx={{ ml: 8 }}>
            Validate
          </Button>
        </Box>
      )}
    </Formik>
  );
}
      `,
    },
  },
};

export const WithLeftAdornment: Story<InputProps> = () => (
  <Input
    label="Search"
    required={false}
    name="nonRequired"
    id="WithLeftAdornment"
    adornment={{
      location: 'left',
      component: <Search />,
    }}
  />
);

WithLeftAdornment.parameters = {
  docs: {
    description: {
      story: 'Often used to build a search input as rendered below:',
    },
  },
};

export const WithRightAdornment: Story<InputProps> = () => (
  <Input
    label="Password"
    type="password"
    required={true}
    name="required"
    id="WithRightAdornment"
    adornment={{
      location: 'right',
      component: <EyeClosed />,
    }}
  />
);

WithRightAdornment.parameters = {
  docs: {
    description: {
      story: 'Often used to build a password input as rendered below:',
    },
  },
};

export const Disabled: Story<InputProps> = () => (
  <Input
    label="Who is cooler than Kyle?"
    disabled={true}
    name="disabled"
    id="Disabled"
    required={true}
  />
);

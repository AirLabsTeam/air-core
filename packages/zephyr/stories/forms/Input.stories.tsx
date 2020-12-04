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

const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
  const validationSchema = object({
    required: string().required('Required').default(''),
    nonRequired: string().default(''),
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

export const Default: Story<InputProps> = (args) => (
  <Input {...args} data-testid={meta.title} name="required" />
);

Default.args = {
  label: 'Test',
  autoComplete: 'off',
  disabled: false,
  isLabelHidden: false,
  required: true,
  type: 'text',
  id: 'Default',
};

Default.parameters = {
  docs: {
    source: {
      code: 'This specific example does not have copy-pasteable code.',
    },
  },
};

export const WithLeftAdornment: Story<InputProps> = () => (
  <Input
    name="nonRequired"
    label="Search"
    id="WithLeftAdornment"
    adornment={{
      location: 'left',
      component: <Search />,
    }}
  />
);

export const WithRightAdornment: Story<InputProps> = () => (
  <Input
    name="required"
    label="Password"
    type="password"
    id="WithRightAdornment"
    adornment={{
      location: 'right',
      component: <EyeClosed />,
    }}
  />
);

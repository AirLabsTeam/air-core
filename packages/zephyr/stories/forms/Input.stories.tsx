import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { Input, InputProps } from '../../src/Forms/Input';

const fieldName = 'test';

const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
  const validationSchema = object({ [fieldName]: string().required('Required').default('') });
  const initialValues = validationSchema.cast({})!;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={() => window.location.reload()}
    >
      {() => (
        <Form>
          <Box tx={{ width: '256px' }}>
            <Story />
          </Box>

          <br />

          <Button type="submit" variant="button-filled-blue">
            Submit (Will Reload Canvas)
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const meta: Meta<InputProps> = {
  title: 'Zephyr/🚧 Under Construction/Forms/Input',
  component: Input,
  decorators: [FormikDecorator],

  /**
   * It appears that source code generation won't work for any form primitives, unless we hand-write them...
   * @see https://github.com/storybookjs/storybook/issues/12022#issuecomment-737093581
   */
  parameters: {
    docs: {
      source: {
        type: 'off', // not an actual handled value, but kills source code generation
      },
    },
  },
};

export default meta;

const Template: Story<InputProps> = (args) => (
  <Input {...args} label="Some Input" name={fieldName} data-testid={meta.title} />
);

export const Default = Template.bind({});

Default.args = {
  autoComplete: 'off',
  disabled: false,
  isLabelHidden: false,
  required: false,
  type: 'text',
};

Default.parameters = {
  docs: {
    description: {
      story: 'An input!',
    },
  },
};

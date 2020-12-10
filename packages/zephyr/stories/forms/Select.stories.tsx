import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { noop } from 'lodash';
import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { Select, SelectOption, SelectProps } from '../../src/Forms/Select';

const options: SelectOption[] = [
  { label: 'Red Fish', value: 'rf' },
  { label: 'Blue Fish', value: 'bf' },
  { label: 'Green Fish', value: 'gf' },
];

// NOTE: If this changes, please change the hard-coded code sample in the Default story's doc source code parameter.
const FormikDecorator = (Story: () => StoryFnReactReturnType, withValidationButton?: boolean) => {
  // This validation schema supplies every input in this story page.
  const validationSchema = object({
    nonRequired: string().default(undefined),
    required: string().required('Required').default(undefined),
    initialValue: string().default(options[0].value),
    async: string().default(undefined),
    disabled: string().default(undefined),
    readOnly: string().default(options[0].value),
  });

  const initialValues = validationSchema.cast()!;

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            alignItems: 'flex-end',
            mb: 124, // so that eveything can fit inside the canvas
          }}
          autoComplete="off"
          noValidate // hides HTML5 default validations on submit
        >
          <Story />

          <Button
            type="submit"
            variant="button-ghost-blue"
            tx={{ ml: 12, display: withValidationButton ? 'block' : 'none' }}
          >
            Validate
          </Button>
        </Box>
      )}
    </Formik>
  );
};

const meta: Meta<SelectProps> = {
  title: 'Zephyr/Forms/Select',
  component: Select,
};

export default meta;

export const Default: Story<SelectProps> = (args) => (
  <Select {...args} name={args.required ? 'required' : 'nonRequired'} />
);

Default.decorators = [(story) => FormikDecorator(story, true)];

Default.args = {
  disabled: false,
  id: 'Default',
  isLabelHidden: false,
  label: 'Test',
  required: true,
  options,
};

Default.parameters = {
  docs: {
    description: {
      component: `This component requires Formik context and any initial value to be defined via a validation schema.
      This is important to understand when viewing source code examples below the "args table" in this story, as "value"
      isn't passed to the JSX.
      \n Under the hood, this component leverages a library called [react-select](https://react-select.com/). We have
      [an open ticket (unviewable to non-Air employees)](https://www.notion.so/airinc/OSS-Make-a-PR-in-react-select-to-convert-type-comments-to-actual-JSDoc-type-comments-3ee05796936443ad871648a846490c18) to resolve their lack of JSDocs to pair with their typings, but if any of the types in the table
      below are not clear, please seek out their documentation for an explanation.
      \nSee source code below for example. Entire implementation is provided.`,
    },
    source: {
      code: `
() => {
  // This validation schema supplies every input in this story page.
  const validationSchema = object({
    nonRequired: string().default(undefined),
    required: string().required('Required').default(undefined),
    initialValue: string().default(options[0].value),
    async: string().default(undefined),
    disabled: string().default(undefined),
    readOnly: string().default(options[0].value),
  });

  const initialValues = validationSchema.cast()!;

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            alignItems: 'flex-end',
            mb: 124, // so that eveything can fit inside the canvas
          }}
          autoComplete="off"
          noValidate // hides HTML5 default validations on submit
        >
          {(args) => <Select {...args} name={args.required ? 'required' : 'nonRequired'} />}

          <Button
            type="submit"
            variant="button-ghost-blue"
            tx={{ ml: 12, display: withValidationButton ? 'block' : 'none' }}
          >
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

export const Disabled: Story<SelectProps> = () => (
  <Select
    label="Disabled"
    disabled
    name="disabled"
    id="Disabled"
    required={false}
    options={options}
  />
);

Disabled.decorators = [(story) => FormikDecorator(story, true)];

export const ReadOnly: Story<SelectProps> = () => (
  <Select label="Read Only" readOnly name="readOnly" required={false} options={options} />
);

ReadOnly.decorators = [(story) => FormikDecorator(story, true)];

/** Visual Regression Diff Tests Below */

export const WithOpenMenuAndEmptyValueSelected: Story<SelectProps> = () => (
  <Select
    label="With Open Menu And No Value"
    required={false}
    name="nonRequired"
    id="WithOpenMenuAndEmptyValueSelected"
    options={options}
    menuIsOpen={true}
  />
);

WithOpenMenuAndEmptyValueSelected.decorators = [(story) => FormikDecorator(story, false)];

WithOpenMenuAndEmptyValueSelected.parameters = {
  docs: {
    description: {
      story:
        'This story only exists to provide a visual regression diff test for the open menu appearance.',
    },
  },
};

export const WithOpenMenuAndRealValueSelected: Story<SelectProps> = () => (
  <Select
    label="With Open Menu And Value"
    required={false}
    name="initialValue"
    id="WithOpenMenuAndRealValueSelected"
    options={options}
    menuIsOpen={true}
  />
);

WithOpenMenuAndRealValueSelected.decorators = [(story) => FormikDecorator(story, false)];

WithOpenMenuAndRealValueSelected.parameters = {
  docs: {
    description: {
      story:
        'This story only exists to provide a visual regression diff test for the open menu appearance.',
    },
  },
};

export const WithOpenMenuAndAsynchronousOptionsLoading: Story<SelectProps> = () => (
  <Select
    label="With Open Menu And Async"
    required={false}
    name="async"
    id="WithOpenMenuAndAsynchronousOptionsLoading"
    loadingState={{ isLoading: true, optionsListLoadingText: 'Loading...' }}
    options={undefined} // this would be resolved into a correct type asynchronously
    menuIsOpen={true}
  />
);

WithOpenMenuAndAsynchronousOptionsLoading.decorators = [(story) => FormikDecorator(story, false)];

WithOpenMenuAndAsynchronousOptionsLoading.parameters = {
  docs: {
    description: {
      story:
        'This story only exists to provide a visual regression diff test for the open menu appearance.',
    },
  },
};

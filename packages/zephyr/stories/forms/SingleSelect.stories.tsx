import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { noop } from 'lodash';
import { Twitter } from '@air/icons';
import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { SingleSelect, SelectOption, SingleSelectProps } from '../../src/Forms/SingleSelect';

const options: SelectOption[] = [
  { label: 'Red Fish', value: 'rf' },
  { label: 'Blue Fish', value: 'bf' },
  { label: 'Green Fish', value: 'gf' },
];

// NOTE: If this changes, please change the hard-coded code sample in the Default story's doc source code parameter.
const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
  // This validation schema supplies every input in this story page.
  const validationSchema = object({
    nonRequired: string().default(undefined),
    required: string().required('Required').default(undefined),
    fancyOptions: string().default(undefined),
    creatable: string().default(undefined),
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
        </Box>
      )}
    </Formik>
  );
};

const meta: Meta<SingleSelectProps> = {
  title: 'Zephyr/Forms/Select',
  component: SingleSelect,
  decorators: [FormikDecorator],
};

export default meta;

export const Default: Story<SingleSelectProps> = (args) => (
  <>
    <SingleSelect {...args} name={args.required ? 'required' : 'nonRequired'} />

    <Button type="submit" variant="button-ghost-blue" tx={{ ml: 12 }}>
      Validate
    </Button>
  </>
);

Default.args = {
  disabled: false,
  id: 'Default',
  isLabelHidden: false,
  label: 'Test',
  // name: 'default', purposefully not defined here (see story JSX)
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
      code: `/**
 * Unfortunately, we can't render source code correctly on the initial story.
 * Please see https://github.com/storybookjs/storybook/issues/12022
 */`,
    },
  },
};

export const Creatable: Story<SingleSelectProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [creatableStoryOptions, setOptions] = useState<typeof options>(options);

  const onCreateOption = (inputValue: string) => {
    setIsLoading(true);

    // mimicking async nature
    setTimeout(() => {
      const newOption = { label: inputValue, value: inputValue.toLowerCase().replace(/\W/g, '') };
      setOptions([...creatableStoryOptions, newOption]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <SingleSelect
      label="Creatable"
      name="creatable"
      id="Creatable"
      required={false}
      loadingState={{ isLoading, optionsListLoadingText: 'Working...' }}
      options={creatableStoryOptions}
      creatableConfig={{ onCreateOption }}
    />
  );
};

export const Disabled: Story<SingleSelectProps> = () => (
  <SingleSelect
    label="Disabled"
    disabled
    name="disabled"
    id="Disabled"
    required={false}
    options={options}
  />
);

export const ReadOnly: Story<SingleSelectProps> = () => (
  <SingleSelect label="Read Only" readOnly name="readOnly" required={false} options={options} />
);

/** Visual Regression Diff Tests Below */

export const WithOpenMenuAndFancyOptions: Story<SingleSelectProps> = () => (
  <SingleSelect
    label="With Open Menu And Fancy Options"
    name="fancyOptions"
    id="WithOpenMenuAndFancyOptions"
    tx={{ mb: 128 }}
    menuIsOpen={true}
    required={false}
    options={[
      { label: 'Label + Adornment', value: 'la', leftAdornment: Twitter },
      {
        label: 'Label + Adornment + Description',
        value: 'lad',
        leftAdornment: Twitter,
        description: 'Small description here.',
      },
      {
        label: 'Long Label + Long Description - Blah Blah Blah Filler.',
        value: 'llld',
        description:
          'This description is long, but does not automatically ellipse. If you want an ellipse for a long description, you will have to manipulate the options per implementation.',
      },
    ]}
  />
);

WithOpenMenuAndFancyOptions.parameters = {
  docs: {
    description: {
      story:
        'An option is required to have a string `label` and `value`; however, it can optionally have a `description` or a `leftAdornment` (typically an icon).',
    },
  },
};

export const WithOpenMenuAndEmptyValueSelected: Story<SingleSelectProps> = () => (
  <SingleSelect
    label="With Open Menu And No Value"
    required={false}
    name="nonRequired"
    id="WithOpenMenuAndEmptyValueSelected"
    options={options}
    menuIsOpen={true}
  />
);

export const WithOpenMenuAndRealValueSelected: Story<SingleSelectProps> = () => (
  <SingleSelect
    label="With Open Menu And Value"
    required={false}
    name="initialValue"
    id="WithOpenMenuAndRealValueSelected"
    options={options}
    menuIsOpen={true}
  />
);

export const WithOpenMenuAndAsynchronousOptionsLoading: Story<SingleSelectProps> = () => (
  <SingleSelect
    label="With Open Menu And Async"
    required={false}
    name="async"
    id="WithOpenMenuAndAsynchronousOptionsLoading"
    loadingState={{ isLoading: true, optionsListLoadingText: 'Loading...' }}
    options={undefined} // this would be resolved into a correct type asynchronously
    menuIsOpen={true}
  />
);

import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { noop } from 'lodash';
import { Twitter } from '@air/icons';
import { AsyncProps } from 'react-select/async';
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
    simpleAsync: string().default(undefined),
    complexAsync: string().default(undefined),
    creatable: string().default(undefined),
    initialValue: string().default(options[0].value),
    disabled: string().default(undefined),
    readOnly: string().default(options[0].value),
    fancyOptions: string().default(undefined),
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

export const SimpleAsync: Story<SingleSelectProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [asyncOptions, setOptions] = useState<typeof options>(options);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setOptions([...options]);
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <SingleSelect
      label="Simple Async"
      name="simpleAsync"
      id="SimpleAsync"
      placeholder={isLoading ? 'Loading options...' : 'Select...'}
      required={false}
      initialLoadingState={{ isLoading, optionsListLoadingText: 'Loading...' }}
      options={asyncOptions}
    />
  );
};

SimpleAsync.parameters = {
  docs: {
    description: {
      story: `You may have a usecase where the initial set of options is asynchronously defined, yet remain static over one use. A prime example of this is a SingleSelect whose options are sent via a CMS).`,
    },
  },
};

export const ComplexAsync: Story<SingleSelectProps> = () => {
  const [hasLoadedInitialOptions, setHasLoadedInitialOptions] = useState<boolean>(false);
  const loadingText = 'Loading options...';

  const colors: SelectOption[] = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
  ];

  const filterColors = (inputValue: string) => {
    return colors.filter((color) => color.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const loadOptions: AsyncProps<SelectOption>['loadOptions'] = (inputValue, callback) => {
    setTimeout(
      () => {
        callback(filterColors(inputValue));
        setHasLoadedInitialOptions(true); // changes from false to true only once
      },
      hasLoadedInitialOptions ? 1250 : 5000, // simulating initial load vs. type-ahead load
    );
  };

  return (
    <SingleSelect
      label="Complex Async"
      name="complexAsync"
      id="ComplexAsync"
      placeholder={hasLoadedInitialOptions ? 'Select...' : loadingText}
      initialLoadingState={{
        isLoading: !hasLoadedInitialOptions,
        optionsListLoadingText: loadingText,
      }}
      required={false}
      loadOptions={loadOptions}
    />
  );
};

ComplexAsync.parameters = {
  docs: {
    description: {
      story: `In this situation, you have options which could potentially change WHILE a user is interacting with this
element. For an example relevant to Air engineers, think no farther than a dropdown for boards: A teammate in a
workspace could create a board while you are populating the workspace with assets. You would not want to reload the
page to see the newly created board, so we provide this implementation to highlight how typeahead options can populate
during one user's usage.`,
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
      initialLoadingState={{ isLoading, optionsListLoadingText: 'Working...' }}
      options={creatableStoryOptions}
      creatableConfig={{ onCreateOption }}
    />
  );
};

Creatable.parameters = {
  docs: {
    description: {
      story:
        'Design does not currently have plans to allow for a SingleSelect where there will exist creatable options, but this ability was already safely provided before that determination was reached... So here you go.',
    },
  },
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
    tx={{ mb: 180 }}
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

export const WithOpenMenuAndAsynchronousOptionsLoadingEternally: Story<SingleSelectProps> = () => (
  <SingleSelect
    label="With Open Menu And Async"
    required={false}
    name="async"
    id="WithOpenMenuAndAsynchronousOptionsLoadingEternally"
    initialLoadingState={{ isLoading: true, optionsListLoadingText: 'Loading...' }}
    options={undefined} // this would be resolved into a correct type asynchronously
    menuIsOpen={true}
  />
);

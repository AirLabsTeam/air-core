import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { noop } from 'lodash';
import { Twitter } from '@air/icons';
import { AsyncProps } from 'react-select/async';
import isChromatic from 'chromatic/isChromatic';
import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { Text } from '../../src/Text';
import { SingleSelect, SelectOption, SingleSelectProps } from '../../src/Forms/SingleSelect';
import { FieldVariantName, field } from '../../src/theme/variants/field';

const variants = Object.keys(field) as FieldVariantName[];

const options: SelectOption[] = [
  { label: 'Big Fish', value: 'bgf' },
  { label: 'Red Fish', value: 'rf' },
  { label: 'Blue Fish', value: 'bf' },
  { label: 'Green Fish', value: 'gf' },
];

// NOTE: If this changes, please change the hard-coded code sample in the Default story's doc source code parameter.
const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
  // This validation schema supplies every input in this story page.
  const validationSchema = object({
    nonRequired: string().default(undefined),
    nonRequired2: string().default(undefined),
    required: string().required('Required').default(undefined),
    required2: string().required('Required').default(undefined),
    simpleAsync: string().default(undefined),
    simpleAsync2: string().default(undefined),
    complexAsync: string().default(undefined),
    complexAsync2: string().default(undefined),
    creatable: string().default(undefined),
    creatable2: string().default(undefined),
    initialValue: string().default(options[0].value),
    initialValue2: string().default(options[0].value),
    disabled: string().default(undefined),
    disabled2: string().default(undefined),
    readOnly: string().default(options[0].value),
    readOnly2: string().default(options[0].value),
    manyOptions: string().default(undefined),
    manyOptions2: string().default(undefined),
    fancyOptions: string().default(undefined),
    fancyOptions2: string().default(undefined),
  });

  const initialValues = validationSchema.cast(undefined);

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            mx: 'auto',
            flexWrap: 'wrap',
            '& > div': {
              mr: 32,
            },
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
  title: 'Zephyr/Forms/SingleSelect',
  component: SingleSelect,
  decorators: [FormikDecorator],
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: Story<SingleSelectProps> = (args) => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';

      return (
        <SingleSelect
          {...args}
          label={`Actual Label: ${args.label} | Variant: ${isChonky ? 'Chonky' : 'Smol'}`}
          name={args.required ? `required${isChonky ? 2 : ''}` : `nonRequired${isChonky ? 2 : ''}`}
          variant={variant}
          key={variant}
          tx={{ mb: 148 }}
        />
      );
    })}

    <Button type="submit" variant="button-filled-blue" tx={{ mt: 28 }}>
      Validate
    </Button>
  </>
);

Default.args = {
  disabled: false,
  isLabelHidden: false,
  label: 'Test',
  // name: 'default', purposefully not defined here (see story JSX)
  required: true,
  options,
  isSearchable: false,
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

  const delayDuration = 5000;
  const durationInSeconds = delayDuration / 1000;

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setOptions([...options]);
      setIsLoading(false);
    }, delayDuration);
  }, []);

  return (
    <>
      <Text variant="text-ui-14" tx={{ mb: 28, flex: '0 0 100%' }}>
        {`Loading state will last for ${durationInSeconds} seconds.`}
      </Text>

      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        return (
          <SingleSelect
            label={`Simple Async ${isChonky ? '(Chonky)' : '(Smol)'}`}
            name={`simpleAsync${isChonky ? 2 : ''}`}
            placeholder={isLoading ? 'Loading options...' : 'Select...'}
            required={false}
            initialLoadingState={{ isLoading, optionsListLoadingText: 'Loading...' }}
            options={asyncOptions}
            variant={variant}
            key={variant}
            tx={{ mb: 148 }}
          />
        );
      })}
    </>
  );
};

SimpleAsync.parameters = {
  docs: {
    description: {
      story: `You may have a use case where the initial set of options is asynchronously defined, yet remain static over one use. A prime example of this is a SingleSelect whose options are sent via a CMS).`,
    },
  },
};

export const ComplexAsync: Story<SingleSelectProps> = () => {
  const [hasLoadedInitialOptions, setHasLoadedInitialOptions] = useState<boolean>(false);
  const loadingText = 'Loading options...';

  const colors: SelectOption[] = [
    { value: 'ocean', label: 'Ocean', ['data-testid']: 'SELECT_OPTION_OCEAN' },
    { value: 'blue', label: 'Blue', ['data-testid']: 'SELECT_OPTION_BLUE' },
    { value: 'purple', label: 'Purple', ['data-testid']: 'SELECT_OPTION_PURPLE' },
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
    <>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        return (
          <SingleSelect
            label={`Complex Async ${isChonky ? '(Chonky)' : '(Smol)'}`}
            name={`complexAsync${isChonky ? 2 : ''}`}
            placeholder={hasLoadedInitialOptions ? 'Select...' : loadingText}
            initialLoadingState={{
              isLoading: !hasLoadedInitialOptions,
              optionsListLoadingText: loadingText,
            }}
            required={false}
            loadOptions={loadOptions}
            variant={variant}
            key={variant}
            tx={{ mb: 148 }}
          />
        );
      })}
    </>
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
    <>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        return (
          <SingleSelect
            label={`Creatable ${isChonky ? '(Chonky)' : '(Smol)'}`}
            name={`creatable${isChonky ? 2 : ''}`}
            required={false}
            initialLoadingState={{ isLoading, optionsListLoadingText: 'Working...' }}
            options={creatableStoryOptions}
            creatableConfig={{ onCreateOption }}
            variant={variant}
            key={variant}
            tx={{ mb: 148 }}
          />
        );
      })}
    </>
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
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`Disabled ${isChonky ? '(Chonky)' : '(Smol)'}`}
          disabled
          name={`disabled${isChonky ? 2 : ''}`}
          required={false}
          options={options}
          variant={variant}
          key={variant}
          tx={{ mb: 32 }}
        />
      );
    })}
  </>
);

export const ReadOnly: Story<SingleSelectProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`Read Only ${isChonky ? '(Chonky)' : '(Smol)'}`}
          readOnly
          name={`readOnly${isChonky ? 2 : ''}`}
          required={false}
          options={options}
          variant={variant}
          key={variant}
          tx={{ mb: 32 }}
        />
      );
    })}
  </>
);

export const WithManyOptions: Story<SingleSelectProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`With Many Options ${isChonky ? '(Chonky)' : '(Smol)'}`}
          name={`manyOptions${isChonky ? 2 : ''}`}
          required={false}
          menuIsOpen={isChromatic() ? true : undefined}
          options={[
            { label: 'Teal Fish', value: 'Teal' },
            { label: 'Orange Fish', value: 'Orange' },
            { label: 'Perriwinkle Fish', value: 'Perriwinkle' },
            { label: 'Fuschia Fish', value: 'Fuschia' },
            { label: 'Pink Fish', value: 'Pink' },
            { label: 'Rebeccapurple Fish', value: 'Rebeccapurple' },
            ...options,
          ]}
          variant={variant}
          key={variant}
          tx={{ mb: 324 }}
        />
      );
    })}
  </>
);

WithManyOptions.parameters = {
  docs: {
    description: {
      story: `It's important to see how the list's UI reacts to dealing with enough options to cause the menu to overflow. It happens very often with data-driven select fields.`,
    },
  },
};

export const WithFancyOptions: Story<SingleSelectProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`With Open Menu And Fancy Options ${isChonky ? '(Chonky)' : '(Smol)'}`}
          name={`fancyOptions${isChonky ? 2 : ''}`}
          required={false}
          menuIsOpen={isChromatic() ? true : undefined}
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
          variant={variant}
          key={variant}
          tx={{ mb: 300 }}
        />
      );
    })}
  </>
);

WithFancyOptions.parameters = {
  docs: {
    description: {
      story:
        'An option is required to have a string `label` and `value`; however, it can optionally have a `description` or a `leftAdornment` (typically an icon).',
    },
  },
};

/** Visual Regression Diff Tests Below */
export const WithOpenMenuAndEmptyValueSelected: Story<SingleSelectProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`With Open Menu And No Value ${isChonky ? '(Chonky)' : '(Smol)'}`}
          required={false}
          name={`nonRequired${isChonky ? 2 : ''}`}
          options={options}
          menuIsOpen={true}
          variant={variant}
          key={variant}
          tx={{ mb: 152 }}
        />
      );
    })}
  </>
);

export const WithOpenMenuAndRealValueSelected: Story<SingleSelectProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`With Open Menu And Value ${isChonky ? '(Chonky)' : '(Smol)'}`}
          required={false}
          name={`initialValue${isChonky ? 2 : ''}`}
          options={options}
          menuIsOpen={true}
          variant={variant}
          key={variant}
          tx={{ mb: 152 }}
        />
      );
    })}
  </>
);

export const WithOpenMenuAndAsynchronousOptionsLoadingEternally: Story<SingleSelectProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <SingleSelect
          label={`With Open Menu And Async ${isChonky ? '(Chonky)' : '(Smol)'}`}
          required={false}
          name={`async${isChonky ? 2 : ''}`}
          initialLoadingState={{ isLoading: true, optionsListLoadingText: 'Loading...' }}
          options={undefined} // this would be resolved into a correct type asynchronously
          menuIsOpen={true}
          variant={variant}
          key={variant}
          tx={{ mb: 72 }}
        />
      );
    })}
  </>
);

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { number, object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { Caution, Search, EyeClosed, Eye } from '@air/icons';
import VisuallyHidden from '@reach/visually-hidden';
import { capitalize, noop } from 'lodash';
import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { Text } from '../../src/Text';
import { Input, InputProps } from '../../src/Forms/Input';
import { FieldVariantName, field } from '../../src/theme/variants/field';

const variants = Object.keys(field) as FieldVariantName[];

// NOTE: If this changes, please change the hard-coded code sample in the Default story's doc source code parameter.
const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
  // This validation schema supplies every input in this story page.
  const validationSchema = object({
    required: string().required('Required').default(''),
    required2: string().required('Required').default(''),
    nonRequired: string().default(''),
    nonRequired2: string().default(''),
    disabled: string().required('Required').default('Nobody'),
    disabled2: string().required('Required').default('Nobody'),
  });

  const initialValues = validationSchema.cast(undefined)!;

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
              mb: 32,
            },
          }}
          noValidate // hides HTML5 default validations on submit
        >
          <Story />
        </Box>
      )}
    </Formik>
  );
};

const meta: Meta<InputProps> = {
  title: 'Zephyr/Forms/Input',
  component: Input,
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: Story<InputProps> = (args) => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <Input
          {...args}
          label={`Actual Label: ${args.label} | Variant: ${isChonky ? 'Chonky' : 'Smol'}`}
          name={args.required ? `required${isChonky ? 2 : ''}` : `nonRequired${isChonky ? 2 : ''}`}
          id={`default_${isChonky ? 'Chonky' : 'smol'}`}
          variant={variant}
          key={variant}
        />
      );
    })}

    <Button type="submit" variant="button-filled-blue" tx={{ mt: 28 }}>
      Validate
    </Button>
  </>
);

Default.decorators = [FormikDecorator];

Default.args = {
  autoComplete: 'off',
  disabled: false,
  isLabelHidden: false,
  label: 'Test',
  required: true,
  type: 'text',
};

Default.parameters = {
  docs: {
    description: {
      component: `This component requires Formik context and any initial value to be defined via a validation schema.
      This is important to understand when viewing source code examples below the "args table" in this story, as "value"
      isn't passed to the JSX.
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

export const WithLeftAdornment: Story<InputProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <Input
          label={`Search ${isChonky ? '(Chonky)' : '(Smol)'}`}
          required={false}
          name={`nonRequired${isChonky ? 2 : ''}`}
          id={`withLeftAdornment${isChonky ? 2 : ''}`}
          adornment={{
            location: 'left',
            component: <Search />,
          }}
          variant={variant}
          key={variant}
        />
      );
    })}
  </>
);

WithLeftAdornment.decorators = [FormikDecorator];

WithLeftAdornment.parameters = {
  docs: {
    description: {
      story: 'Often used to build a search input as rendered below:',
    },
  },
};

export const PasswordField: Story<InputProps> = () => {
  const [isValueVisible, setIsValueVisible] = React.useState(false);

  const showValue = () => setIsValueVisible(true);
  const hideValue = () => setIsValueVisible(false);
  const toggleValueVisibility = () => (isValueVisible ? hideValue() : showValue());

  return (
    <>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        const label = `Password ${isChonky ? '(Chonky)' : '(Smol)'}`;
        const fieldID = label;

        return (
          <Input
            label={label}
            id={fieldID}
            type={isValueVisible ? 'text' : 'password'}
            required
            description={{
              isHidden: false,
              component: (
                <>
                  Password must be 10 characters long.
                  <VisuallyHidden> Password visibility control exists after input.</VisuallyHidden>
                </>
              ),
            }}
            name="required"
            adornment={{
              location: 'right',
              component: (
                <Button
                  onClick={toggleValueVisibility}
                  aria-controls={fieldID}
                  aria-expanded={isValueVisible}
                  variant="button-unstyled"
                  tx={{
                    color: 'inherit',
                    '> svg': { width: '100%' },
                  }}
                >
                  <VisuallyHidden>
                    {isValueVisible ? 'Hide password' : 'Show password'}
                  </VisuallyHidden>
                  {isValueVisible ? <Eye /> : <EyeClosed />}
                </Button>
              ),
            }}
            variant={variant}
            key={variant}
          />
        );
      })}
    </>
  );
};

PasswordField.decorators = [FormikDecorator];

export const Disabled: Story<InputProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';
      return (
        <Input
          label={`Who is cooler than Kyle? ${isChonky ? '(Chonky)' : '(Smol)'}`}
          disabled
          name={`disabled${isChonky ? 2 : ''}`}
          required
          variant={variant}
          key={variant}
        />
      );
    })}
  </>
);

Disabled.decorators = [FormikDecorator];

export const WithPlaceholder: Story<InputProps> = () => (
  <>
    {variants.map((variant) => {
      const isChonky = variant === 'field-input-chonky';

      return (
        <Input
          label={`Placeholder ${isChonky ? '(Chonky)' : '(Smol)'}`}
          placeholder="This is a placeholder..."
          name={`nonRequired${isChonky ? 2 : ''}`}
          required={false}
          variant={variant}
          key={variant}
        />
      );
    })}
  </>
);

WithPlaceholder.decorators = [FormikDecorator];

const longString = 'This is input is totally fullllllllllllllllllllllllllllllll';

export const FilledInputs: Story<InputProps> = () => {
  const filledInputsValidationSchema = object({
    email: string().required('Required').default('kyle-test@air.inc'),
    number: number().required('Required').default(10),
    password: string().required('Required').default('@&NAAs!tAGDz1b2'),
    tel: string().required('Required').default('8008008000'),
    text: string().required('Required').default('Demo text!'),
    url: string().required('Required').url('Must be a valid URL').default('https://air.inc'),
    leftAdornment: string().required('Required').default(longString),
    rightAdornment: string().required('Required').default(longString),
  });

  const inputTypes = Object.keys(filledInputsValidationSchema.describe().fields) as NonNullable<
    InputProps['type']
  >[];

  const initialValues = filledInputsValidationSchema.clone().cast(undefined);

  return (
    <Box tx={{ display: 'flex', justifyContent: 'space-around', mx: 'auto', flexWrap: 'wrap' }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';

        return (
          <Formik
            initialValues={initialValues}
            validationSchema={filledInputsValidationSchema.clone()}
            onSubmit={noop}
            key={variant}
          >
            {() => (
              <Box
                as={Form}
                tx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 256,
                  mb: 64,
                }}
                noValidate // hides HTML5 default validations on submit
              >
                <Text variant="text-ui-24" tx={{ my: 16 }}>
                  {`${isChonky ? 'Chonky' : 'Smol'} Variant`}
                </Text>

                {inputTypes.map((type) => {
                  const label = !type.includes('Adornment')
                    ? capitalize(type)
                    : type.startsWith('left')
                    ? 'Left Adornment'
                    : 'Right Adornment';

                  const key = `${type}_${variant}`;
                  return (
                    <Input
                      label={label}
                      type={type}
                      name={type}
                      id={key}
                      required
                      tx={{ mb: 36 }}
                      adornment={
                        type.includes('Adornment')
                          ? {
                              component: <Caution />,
                              location: type.startsWith('left') ? 'left' : 'right',
                            }
                          : undefined
                      }
                      variant={variant}
                      key={key}
                    />
                  );
                })}

                <br />

                <Button type="submit" variant="button-filled-blue">
                  Validate
                </Button>
              </Box>
            )}
          </Formik>
        );
      })}
    </Box>
  );
};

FilledInputs.parameters = {
  docs: {
    description: {
      story:
        'All of these inputs are read-only, and serve purely as a visual regression diff test target for Chromatic.',
    },
  },
};

export const WithError: Story<InputProps> = () => {
  return (
    <Formik
      initialValues={{ withError: '' }}
      initialErrors={{ withError: 'Some error! Oh no!' }}
      initialTouched={{ withError: true }}
      isInitialValid={false}
      onSubmit={noop}
    >
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            flexDirection: 'column',
            width: 256,
            mb: 64,
          }}
          noValidate // hides HTML5 default validations on submit
        >
          <Input
            label="With Error"
            type="text"
            name="withError"
            required
            tx={{ mb: 36 }}
            variant="field-input-chonky"
          />

          <Button type="submit" variant="button-filled-blue">
            Validate
          </Button>
        </Box>
      )}
    </Formik>
  );
};

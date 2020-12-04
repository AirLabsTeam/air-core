import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form } from 'formik';
import { number, object, string } from 'yup';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { Search, EyeClosed, Eye } from '@air/icons';
import VisuallyHidden from '@reach/visually-hidden';
import { capitalize, noop } from 'lodash';
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
  const initialValues = validationSchema.cast()!;

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            flexDirection: 'column',
            width: 300,
          }}
          noValidate // hides HTML5 default validations on submit
        >
          <Story />

          <br />

          <Button
            type="submit"
            variant="button-filled-blue"
            tx={{
              my: 16, // only here so that input error messages don't look crammed
            }}
          >
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
};

export default meta;

export const Default: Story<InputProps> = (args) => <Input {...args} name="required" />;

Default.decorators = [FormikDecorator];

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
      This is important to understand when viewing source code examples below the "args table" in this story, as "value"
      isn't passed to the JSX.
      \nSee source code below for example. Entire implementation is provided.`,
    },
    source: {
      code: `
() => {
  // This validation schema supplies every input in this story page.
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
            flexDirection: 'column',
          }}
        >
          {/* "args" represents values passed via "args table" */}
          {(args) => <Input {...args} name="required" />}

          <br />

          <Button
            type="submit"
            variant="button-filled-blue"
            tx={{
              my: 12, // only here so that input error messages don't look crammed
              width: '100%',
            }}
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
  const fieldID = 'Password';
  const showValue = () => setIsValueVisible(true);
  const hideValue = () => setIsValueVisible(false);
  const toggleValueVisibility = () => (isValueVisible ? hideValue() : showValue());

  return (
    <>
      <Input
        label="Password"
        type={isValueVisible ? 'text' : 'password'}
        required
        description={{
          isHidden: false,
          component: (
            <>
              Password must be 10 characters long.{' '}
              <VisuallyHidden>Password visibility control exists after input.</VisuallyHidden>
            </>
          ),
        }}
        name="required"
        id={fieldID}
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
              <VisuallyHidden>{isValueVisible ? 'Hide password' : 'Show password'}</VisuallyHidden>
              {isValueVisible ? <Eye /> : <EyeClosed />}
            </Button>
          ),
        }}
      />
    </>
  );
};

PasswordField.decorators = [FormikDecorator];

export const Disabled: Story<InputProps> = () => (
  <Input label="Who is cooler than Kyle?" disabled name="disabled" required />
);

Disabled.decorators = [FormikDecorator];

export const WithPlaceholder: Story<InputProps> = () => (
  <Input
    label="Placeholder"
    placeholder="This is a placeholder..."
    name="nonRequired"
    required={false}
  />
);

WithPlaceholder.decorators = [FormikDecorator];

export const FilledInputs: Story<InputProps> = () => {
  const validationSchema = object({
    email: string().default('kyle-test@air.inc'),
    number: number().default(10),
    password: string().default('@&NAAs!tAGDz1b2'),
    tel: string().default('8008008000'),
    text: string().default('Demo text!'),
    url: string().default('https://air.inc'),
  });

  const initialValues = validationSchema.cast()!;

  const inputTypes = Object.keys(validationSchema.describe().fields) as NonNullable<
    InputProps['type']
  >[];

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={noop}>
      {() => (
        <Box
          as={Form}
          tx={{
            display: 'flex',
            flexDirection: 'column',
            width: 300,
          }}
          noValidate // hides HTML5 default validations on submit
        >
          {inputTypes.map((type) => (
            <Input
              label={capitalize(type)}
              type={type}
              name={type}
              key={type}
              required
              readOnly
              tx={{ mb: 36 }}
            />
          ))}

          <br />

          <Button
            type="submit"
            variant="button-filled-blue"
            tx={{
              my: 16, // only here so that input error messages don't look crammed
            }}
          >
            Validate
          </Button>
        </Box>
      )}
    </Formik>
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

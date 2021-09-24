import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Form, Formik, useField } from 'formik';
import { noop } from 'lodash';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { object, string } from 'yup';
import VisuallyHidden from '@reach/visually-hidden';
import { Box } from '../../src/Box';
import { InputPrimitive, InputPrimitiveProps } from '../../src/Forms/InputPrimitive';
import { FieldVariantName, field } from '../../src/theme/variants/field';
import { LabelPrimitive } from '../../src/Forms/LabelPrimitive';
import { Error } from '../../src/Forms/Error';
import { Eye, EyeClosed, Search } from '../../../icons/';
import { Button } from '../../src/Button';

export default {
  title: 'Zephyr/Forms/InputPrimitive',
  component: InputPrimitive,
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `This component is a basic input primitive. It can be used with Formik but the Formik initialization must be done by the consumer.`,
      },
      source: {
        code: `/**
    * Unfortunately, we can't render source code correctly on the initial story.
    * Please see https://github.com/storybookjs/storybook/issues/12022
    */`,
      },
    },
  },
} as Meta;

const variants = Object.keys(field) as FieldVariantName[];

interface StorybookFormData {
  formikRequired: string;
  formikRequired2: string;
  formikPassword: string;
  formikPassword2: string;
  formikMyOnChange: string;
  formikMyOnChange2: string;
}

// This validation schema supplies every (formik-based) input in this story page
const validationSchema = object({
  formikMyOnChange: string().notRequired(),
  formikMyOnChange2: string().notRequired(),
  formikPassword: string()
    .required('This is a required password ')
    .min(10, 'Custom Message that this should be at least 10 characters'),
  formikPassword2: string()
    .required('This is another required password')
    .min(10, 'Custom Message that this should be at least 10 characters'),
  formikRequired: string().required('Custom Formik Error message'),
  formikRequired2: string().required('Custom Formik Error message'),
});

const initialValues = validationSchema.cast({
  formikMyOnChange: '',
  formikMyOnChange2: '',
  formikPassword: '',
  formikPassword2: '',
  formikRequired: '',
  formikRequired2: '',
});

// NOTE: If this changes, please change the hard-coded code sample in the Default story's doc source code parameter.
const FormikDecorator = (Story: () => StoryFnReactReturnType) => {
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

const Template: Story<InputPrimitiveProps> = (args) => {
  const [iValue, setIValue] = useState('');

  return (
    <Box tx={{ display: 'flex' }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        return (
          <InputPrimitive
            {...args}
            id={`default_${isChonky ? 'Chonky' : 'smol'}`}
            key={variant}
            onChange={(e) => setIValue(e.target.value)}
            tx={{ width: 200, mr: 12 }}
            value={iValue}
            variant={variant}
          />
        );
      })}
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  autoComplete: 'off',
  disabled: false,
  type: 'text',
};

const InputWithCustomLabel: Story<InputPrimitiveProps> = () => {
  const [iValue, setIValue] = useState('');

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        const label = `Custom Label ${isChonky ? '(Chonky)' : '(Smol)'}`;
        const fieldId = `input-with-c-label-default_${isChonky ? 'Chonky' : 'smol'}`;

        return (
          <Box key={variant}>
            <LabelPrimitive
              for={fieldId}
              isFieldRequired
              tx={{ mb: 4, Asterisk: { color: 'red' } }}
            >
              {label}
            </LabelPrimitive>
            <InputPrimitive
              id={fieldId}
              onChange={(e) => setIValue(e.target.value)}
              required
              tx={{ mr: 24, mb: 24 }}
              value={iValue}
              variant={variant}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export const WithCustomLabel = InputWithCustomLabel.bind({});

const InputWithLabel: Story<InputPrimitiveProps> = (args) => {
  const [iValue, setIValue] = useState('');

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        const label = `Input Label ${isChonky ? '(Chonky)' : '(Smol)'}`;
        const fieldId = `input-with-label-default_${isChonky ? 'Chonky' : 'smol'}`;

        return (
          <Box key={variant}>
            <LabelPrimitive isFieldRequired for={fieldId} tx={{ mb: 4 }}>
              {label}
            </LabelPrimitive>
            <InputPrimitive
              {...args}
              id={fieldId}
              onChange={(e) => setIValue(e.target.value)}
              required
              tx={{ mr: 24, mb: 24 }}
              value={iValue}
              variant={variant}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export const WithLabel = InputWithLabel.bind({});

WithLabel.args = {
  disabled: false,
  type: 'text',
};

export const WithLabelAndFormik: Story<InputPrimitiveProps> = (args) => {
  const [field, meta] = useField<StorybookFormData['formikRequired']>('formikRequired');
  const [field2, meta2] = useField<StorybookFormData['formikRequired2']>('formikRequired2');

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column' }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        const label = `Input Label (with Formik) ${isChonky ? '(Chonky)' : '(Smol)'}`;
        const name = `formikRequired${isChonky ? 2 : ''}`;
        const props = isChonky ? field2 : field;
        const info = isChonky ? meta2 : meta;

        return (
          <Box key={variant}>
            <LabelPrimitive isFieldRequired={true} for={name} tx={{ mb: 4 }}>
              {label}
            </LabelPrimitive>
            <Box tx={{ display: 'flex' }}>
              <InputPrimitive
                {...args}
                {...props}
                aria-invalid={!!info.error && info.touched}
                id={name}
                key={variant}
                name={name}
                required
                tx={{ mr: 24, mb: isChonky ? undefined : 32 }}
                type="text"
                variant={variant}
              />
              <Error
                data-testid={`${name}-ERROR-TEST-ID`}
                errorText={info.error}
                id={`${name}_error`}
                isErrorVisible={!!info.error && info.touched}
                tx={{ mt: isChonky ? 52 : 44 }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

WithLabelAndFormik.decorators = [FormikDecorator];

WithLabelAndFormik.args = {
  disabled: false,
  required: true,
  type: 'text',
};

WithLabelAndFormik.parameters = {
  docs: {
    description: {
      story:
        'Although the default state of this component is not using Formik, use of Formik is supported. In this story, we use the `InputPrimitive` and the `LabelPrimitive` to illustrate how this component might behave when used with Formik. ',
    },
  },
};

export const WithLeftAdornment: Story<InputPrimitiveProps> = () => {
  const [iValue, setIValue] = useState('');

  return (
    <>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        return (
          <InputPrimitive
            adornment={{
              location: 'left',
              component: <Search />,
            }}
            id={`withLeftAdornment${isChonky ? 2 : ''}`}
            key={variant}
            onChange={(e) => setIValue(e.target.value)}
            required={false}
            tx={{ mb: 12, width: 200 }}
            value={iValue}
            variant={variant}
          />
        );
      })}
    </>
  );
};

WithLeftAdornment.parameters = {
  docs: {
    description: {
      story:
        'Often used to build a search input. You can change the placement of the adornment by simply modifying the `location` prop (that is within the `adornment` prop) to be "right" or "left"',
    },
  },
};

export const WithCustomStyles: Story<InputPrimitiveProps> = () => {
  const [iValue, setIValue] = useState('');

  return (
    <>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';

        return (
          <InputPrimitive
            key={variant}
            onChange={(e) => setIValue(e.target.value)}
            placeholder="Click or hover to interact"
            required={false}
            tx={{
              mb: 12,
              width: 200,
              InnerInput: {
                borderColor: 'transparent',
                px: isChonky ? 10 : 8,
                '&:hover:not(:focus)': {
                  backgroundColor: 'pigeon050',
                  cursor: 'pointer',
                  borderColor: 'transparent !important',
                },
                '&:focus': {
                  backgroundColor: 'white',
                },
              },
            }}
            value={iValue}
            variant={variant}
          />
        );
      })}
    </>
  );
};

export const PasswordField: Story<InputPrimitiveProps> = () => {
  const [isValueVisible, setIsValueVisible] = React.useState(false);
  const [iValue, setIValue] = useState('');

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
          <InputPrimitive
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
            description={{
              isHidden: false,
              component: (
                <>
                  Password must be 10 characters long.
                  <VisuallyHidden> Password visibility control exists after input.</VisuallyHidden>
                </>
              ),
            }}
            id={fieldID}
            key={variant}
            onChange={(e) => setIValue(e.target.value)}
            required
            tx={{ mb: 32, width: 200 }}
            type={isValueVisible ? 'text' : 'password'}
            value={iValue}
            variant={variant}
          />
        );
      })}
    </>
  );
};

export const PasswordFieldWithFormik: Story<InputPrimitiveProps> = () => {
  const [isValueVisible, setIsValueVisible] = React.useState(false);
  const [field, meta] = useField<StorybookFormData['formikPassword']>('formikPassword');
  const [field2, meta2] = useField<StorybookFormData['formikPassword2']>('formikPassword2');

  const showValue = () => setIsValueVisible(true);
  const hideValue = () => setIsValueVisible(false);
  const toggleValueVisibility = () => (isValueVisible ? hideValue() : showValue());

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column' }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        const label = `PasswordWithFormik ${isChonky ? '(Chonky)' : '(Smol)'}`;
        const fieldID = label;

        const props = isChonky ? field2 : field;
        const info = isChonky ? meta2 : meta;
        const name = `formikPassword${isChonky ? 2 : ''}`;

        return (
          <Box key={variant} tx={{ width: 340, mb: isChonky ? undefined : 32 }}>
            <InputPrimitive
              {...props}
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
              aria-invalid={!!info.error && info.touched}
              description={{
                isHidden: !!info.error && info.touched,
                component: (
                  <>
                    Password must be 10 characters long.
                    <VisuallyHidden>
                      {' '}
                      Password visibility control exists after input.
                    </VisuallyHidden>
                  </>
                ),
              }}
              id={name}
              key={variant}
              name={name}
              required
              type={isValueVisible ? 'text' : 'password'}
              variant={variant}
            />
            <Error
              data-testid={`${name}-ERROR-TEST-ID`}
              errorText={info.error}
              id={`${name}_error`}
              isErrorVisible={!!info.error && info.touched}
              tx={{ mt: isChonky ? 4 : 1 }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

PasswordFieldWithFormik.decorators = [FormikDecorator];

export const WithFormikAndCustomEventHandler: Story<InputPrimitiveProps> = (args) => {
  const [{ onChange: formikOnChange, ...field }, meta] = useField<
    StorybookFormData['formikMyOnChange']
  >('formikMyOnChange');
  const [field2, meta2] = useField<StorybookFormData['formikMyOnChange2']>('formikMyOnChange2');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formikOnChange(event);
    alert(`Inside custom onChange with value: ${event.target.value}`);
  };

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column' }}>
      {variants.map((variant) => {
        const isChonky = variant === 'field-input-chonky';
        const label = `Label For Custom OnChange${isChonky ? '(Chonky)' : '(Smol)'}`;
        const name = `formikMyOnChange${isChonky ? 2 : ''}`;
        const props = isChonky ? field2 : field;
        const info = isChonky ? meta2 : meta;

        return (
          <Box key={variant}>
            <LabelPrimitive isFieldRequired={true} for={name} tx={{ mb: 4 }}>
              {label}
            </LabelPrimitive>
            <Box tx={{ display: 'flex' }}>
              <InputPrimitive
                {...args}
                {...props}
                aria-invalid={!!info.error && info.touched}
                id={name}
                key={variant}
                name={name}
                onChange={onChange}
                required
                tx={{ mr: 24, mb: 32 }}
                type="text"
                variant={variant}
              />
              <Error
                data-testid={`${name}-ERROR-TEST-ID`}
                errorText={info.error}
                id={`${name}_error`}
                isErrorVisible={!!info.error && info.touched}
                tx={{ mt: isChonky ? 52 : 44 }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

WithFormikAndCustomEventHandler.decorators = [FormikDecorator];

WithFormikAndCustomEventHandler.args = {
  disabled: false,
  required: true,
  type: 'text',
};

WithFormikAndCustomEventHandler.parameters = {
  docs: {
    description: {
      story: `There may be a case where you need to do something specific within an event handler (i.e. you want something to happen onBlur), while also using Formik. In this story, we use our own custom onChange function, **and** Formik's. We do this properly, by calling Formik's onChange in our onChange function.`,
    },
  },
};

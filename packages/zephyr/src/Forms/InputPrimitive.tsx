import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { variant as styledSystemVariant } from 'styled-system';
import { FormikHandlers } from 'formik';
import { useTheme } from 'styled-components';
import { LeftRight } from '../shared';
import { Box, BoxStylingProps } from '../Box';
import { Text } from '../Text';
import { FieldVariantName, TXProp } from '../theme';

export interface InputPrimitiveProps {
  /**
   * Autocomplete helps to fill an input with device-remembered values. See MDN's documentation on the [attribute and
   * its values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).
   */
  autoComplete?:
    | 'on'
    | 'off'
    | 'name'
    | 'honorific-prefix'
    | 'given-name'
    | 'additional-name'
    | 'family-name'
    | 'honorific-suffix'
    | 'nickname'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'one-time-code'
    | 'organization-title'
    | 'organization'
    | 'street-address'
    | 'address-line1'
    | 'address-line2'
    | 'address-line3'
    | 'address-level4'
    | 'address-level3'
    | 'address-level2'
    | 'address-level1'
    | 'country'
    | 'country-name'
    | 'postal-code'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-additional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type'
    | 'transaction-currency'
    | 'transaction-amount'
    | 'language'
    | 'bday'
    | 'bday-day'
    | 'bday-month'
    | 'bday-year'
    | 'sex'
    | 'search'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-area-code'
    | 'tel-local'
    | 'tel-extension'
    | 'impp'
    | 'url'
    | 'photo';

  'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling' | undefined;

  /**
   * Typically used to render an icon on the left or right side of the input.
   */
  adornment?: {
    location: LeftRight;
    component: React.ReactNode;
  };

  'data-testid'?: string;

  /**
   * Used to offer a "subtitle" to a label, where you can expand on an input's needs. You can also use this to provide
   * helpful context to people using screen readers.
   */
  description?: {
    isHidden: boolean;
    component: React.ReactNode;
  };

  disabled?: boolean;
  id?: string;
  innerInputRef?: React.MutableRefObject<HTMLInputElement | null>;

  /**
   * Maximum value for numeric type.
   */
  max?: number;

  /**
   * Minimum value for numeric type
   */
  min?: number;

  /**
   * Max number of characters in the value of the input.
   */
  maxLength?: number;

  /**
   * Min number of characters in the value of the input.
   */
  minLength?: number;

  /**
   * Whether to allow multiple values (only used when type="email").
   */
  multiple?: boolean;

  /**
   * Field typically used to identify a Formik field.
   */
  name?: string;

  /**
   * This `onBlur` eventHandler can be passed a callback. If you would like to have custom logic while also using Formik, you will need to call the formik `onBlur` function and pass it the event received before continuing with your own logic ([relevant Stack Overflow](https://stackoverflow.com/a/48980424)).
   * @see https://stackoverflow.com/a/48980424
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | FormikHandlers['handleBlur'];
  /**
   * This `onChange` eventHandler can be passed a callback. If you would like to have custom logic while also using Formik, you will need to call the formik `onChange` function and pass it the event received before continuing with your own logic ([relevant Stack Overflow](https://stackoverflow.com/a/48980424)).
   * @see https://stackoverflow.com/a/48980424
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | FormikHandlers['handleChange'];
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Text that appears in the form control when it has no value set.
   */
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;

  /**
   * Incremental values that are valid for numeric type inputs.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefstep
   */
  step?: number;

  /**
   * A small subset of [all possible types from a typical HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types).
   * If the type is not valid, it belongs to a different component or we havent tested that it works with this component.
   * If you do add to the possible types, please also check the Attributes table on the MDN page for "input" to ensure the
   * typings are inclusive.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
   */
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

  /**
   * This prop can be used to pass custom styles to specific portions of the input You can pass styles
   * to the tx prop as normal, and the styles will be applied to the div containing the entire input. However if you’d like
   * to style a specific portion, there are 2 optional properties that you may use to style that section of the Input. You should use`InnerInput` for
   * specific styles to be placed on the div that immediately wraps the Input, and the `InnerInput` for the styles
   * to be applied directly to the Input.
   */
  tx?: TXProp & {
    InnerInput?: TXProp;
    InnerInputContainer?: TXProp;
  };
  /**
   * This is the value of the input. If you are using Formik, there is no need to pass a value since (when you spread the Formik-field-specific props) Formik will handle this. Be advised, you always need to provide a default value to prevent input control errors on change (an empty string will suffice).
   */
  value?: string;
  variant?: FieldVariantName | FieldVariantName[];
}

const sharedAdornmentStyles: BoxStylingProps['tx'] = {
  color: 'pigeon500',
  position: 'absolute',
};

export const InputPrimitive = React.memo(
  ({
    adornment,
    autoComplete = 'off',
    'data-testid': testId,
    description,
    disabled = false,
    id,
    innerInputRef,
    name,
    placeholder,
    readOnly = false,
    required,
    tx = {},
    type = 'text',
    variant = 'field-input-smol',
    ...restOfProps
  }: InputPrimitiveProps) => {
    const theme = useTheme();
    const inputIdentifier = id ?? name;
    const errorIdentifier = `${inputIdentifier}_error`;
    const descriptionIdentifier = `${inputIdentifier}_description`;
    const isChonky = variant === 'field-input-chonky';

    const {
      InnerInput: inputStyles,
      InnerInputContainer: inputContainerStyles,
      ...outerContainerStyles
    } = tx;

    const adornmentSideBuffer = React.useMemo(
      () =>
        styledSystemVariant({
          prop: 'variant',
          variants: {
            'field-input-chonky': {
              pl: 40,
              pr: 40,
            },
            'field-input-smol': {
              pl: 36,
              pr: 36,
            },
          },
        })({ theme, variant }) as {
          paddingLeft: number | number[];
          paddingRight: number | number[];
        },
      [theme, variant],
    );

    const nonAdornmentSideBuffer = React.useMemo(
      () =>
        styledSystemVariant({
          prop: 'variant',
          variants: {
            'field-input-chonky': {
              pl: 16,
              pr: 16,
            },
            'field-input-smol': {
              pl: 12,
              pr: 12,
            },
          },
        })({ theme, variant }) as {
          paddingLeft: number | number[];
          paddingRight: number | number[];
        },
      [theme, variant],
    );

    return (
      <Box
        tx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '256px',
          position: 'relative',
          ...outerContainerStyles,
        }}
      >
        <Box tx={{ position: 'relative', width: '100%', ...inputContainerStyles }}>
          {adornment?.location === 'left' && (
            <Box
              tx={{
                ...sharedAdornmentStyles,
                ...styledSystemVariant({
                  prop: 'variant',
                  variants: {
                    'field-input-chonky': {
                      top: 14,
                      width: 20,
                      left: 14,
                    },
                    'field-input-smol': {
                      top: 12,
                      width: 16,
                      left: 12,
                    },
                  },
                })({ theme, variant }),
              }}
            >
              {adornment.component}
            </Box>
          )}

          <Box
            as="input"
            ref={(instance: HTMLInputElement | null) =>
              innerInputRef ? (innerInputRef.current = instance) : undefined
            }
            aria-describedby={
              description ? `${descriptionIdentifier} ${errorIdentifier}` : errorIdentifier
            }
            autoComplete={autoComplete}
            data-testid={testId}
            disabled={disabled || readOnly}
            id={inputIdentifier}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            tx={{
              pl:
                adornment?.location === 'left'
                  ? adornmentSideBuffer['paddingLeft']
                  : nonAdornmentSideBuffer['paddingLeft'],
              pr:
                adornment?.location === 'right'
                  ? adornmentSideBuffer['paddingRight']
                  : nonAdornmentSideBuffer['paddingRight'],
              ...inputStyles,
            }}
            type={type}
            variant={variant}
            {...restOfProps}
          />

          {adornment?.location === 'right' && (
            <Box
              tx={{
                ...sharedAdornmentStyles,
                ...styledSystemVariant({
                  prop: 'variant',
                  variants: {
                    'field-input-chonky': {
                      top: 14,
                      width: 20,
                      right: 14,
                    },
                    'field-input-smol': {
                      top: 12,
                      width: 16,
                      right: 12,
                    },
                  },
                })({ theme, variant }),
              }}
            >
              {adornment.component}
            </Box>
          )}
        </Box>

        <Text
          as="span"
          id={descriptionIdentifier}
          variant="text-ui-12"
          data-testid={`${testId}_description`}
          tx={{
            position: 'absolute',
            bottom: isChonky ? -22 : -18,
            display: 'block',
            color: 'pigeon500',
          }}
        >
          {description?.isHidden ? (
            <VisuallyHidden>{description.component}</VisuallyHidden>
          ) : (
            description?.component
          )}
        </Text>
      </Box>
    );
  },
);

InputPrimitive.displayName = 'InputPrimitive';

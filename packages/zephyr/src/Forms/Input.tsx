import * as React from 'react';
import { useField } from 'formik';
import { capitalize } from 'lodash';
import VisuallyHidden from '@reach/visually-hidden';
import { Box, BoxStylingProps } from '../Box';
import { Text } from '../Text';
import { Label } from './Label';

export interface InputProps extends Pick<BoxStylingProps, 'tx'> {
  /**
   * Autocomplete helps to fill an input with device-remembered values. Here's MDN's documentation on the attribute and
   * their values: [LINK](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values)
   */
  autoComplete?:
    | 'on'
    | 'off'
    | 'name'
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
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-area-code'
    | 'tel-local'
    | 'tel-extension'
    | 'impp'
    | 'url'
    | 'photo';

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
   * The content of the label. No need for * when required - it's added automatically.
   */
  label: string;

  /**
   * Should match the relevant key name inside the Formik schema.
   */
  name: string;

  /**
   * An input must always have a label, but design may want it visually hidden.
   */
  isLabelHidden?: boolean;

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
   * Text that appears in the form control when it has no value set.
   */
  placeholder?: string;

  /**
   * Incremental values that are valid for numeric type inputs.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefstep
   */
  step?: number;

  /**
   * Typically used to render an icon on the left or right side of the input.
   */
  adornment?: {
    location: 'left' | 'right';
    component: React.ReactNode;
  };

  /**
   * This will eventually be an optional parameter, but must be required until [this Formikissue]
   * (https://github.com/formium/formik/issues/2092#issuecomment-738606844) is resolved.
   */
  required: boolean;

  className?: string;
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  'data-testid'?: string;
}

const sharedAdornmentStyles: BoxStylingProps['tx'] = {
  color: 'pigeon500',
  height: '16px',
  position: 'absolute',
  top: '12px',
  width: '16px',
};

const Input = ({
  adornment,
  autoComplete = 'off',
  className,
  id,
  isLabelHidden = false,
  label,
  name,
  placeholder,
  required,
  tx,
  type = 'text',
  'data-testid': topLevelTestID,
  ...restOfProps
}: InputProps) => {
  const [field, meta] = useField(name);
  const inputIdentifier = id ?? name;
  const errorIdentifier = `${name}_error`;
  const hasError = meta.touched && !!meta.error;

  const testID = React.useMemo(() => {
    const prefix = `input_${name}`;

    if (!meta.touched) return `${prefix}_untouched`;
    if (hasError) return `${prefix}_invalid`;
    return `${prefix}_valid`;
  }, [hasError]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      className={className}
      tx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '256px',
        position: 'relative',
        ...tx,
      }}
      data-testid={topLevelTestID}
    >
      <Label
        for={inputIdentifier}
        isVisuallyHidden={isLabelHidden}
        tx={isLabelHidden ? undefined : { mb: 6 }}
      >
        {label}
        {required ? ' *' : ''}
      </Label>

      <Box tx={{ position: 'relative', width: '100%' }}>
        {adornment?.location === 'left' && (
          <Box tx={{ ...sharedAdornmentStyles, left: '12px' }}>{adornment.component}</Box>
        )}

        <Box
          aria-describedby={errorIdentifier}
          aria-invalid={hasError}
          as="input"
          autoComplete={autoComplete}
          data-testid={testID}
          id={inputIdentifier}
          placeholder={placeholder}
          required={required}
          tx={{
            pl: adornment?.location === 'left' ? 36 : 12,
            pr: adornment?.location === 'right' ? 36 : 12,
          }}
          type={type}
          variant="field-input"
          {...field}
          {...restOfProps}
        />

        {adornment?.location === 'right' && (
          <Box tx={{ ...sharedAdornmentStyles, right: '12px' }}>{adornment.component}</Box>
        )}
      </Box>

      {/* Could use Formik's ErrorMessage component, but already defined `hasError` for aria-invalid */}
      {hasError && (
        <Text
          as="span"
          id={errorIdentifier}
          role="alert"
          variant="text-ui-12"
          tx={{
            position: 'absolute',
            bottom: -26, // text is 18px high + 8px space between bottom input border and top of text
            fontWeight: 'semibold',
            color: 'flamingo600',
          }}
        >
          {/* For screen reader users: If the label is not provided in the error as context, do so automatically. */}
          {meta.error && !meta.error.includes(label) && (
            <VisuallyHidden>{`${label}: `}</VisuallyHidden>
          )}

          {capitalize(meta.error)}
        </Text>
      )}
    </Box>
  );
};

Input.displayName = 'Input';

export { Input };

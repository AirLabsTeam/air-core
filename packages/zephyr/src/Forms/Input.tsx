import { ReactNode, ChangeEvent, MutableRefObject, useMemo } from 'react';
import { useField } from 'formik';
import VisuallyHidden from '@reach/visually-hidden';
import { variant as styledSystemVariant } from 'styled-system';
import { useTheme } from 'styled-components';
import { LeftRight } from '../shared';
import { Box, BoxStylingProps } from '../Box';
import { Text } from '../Text';
import { FieldVariantName, TXProp } from '../theme';
import { Label } from './Label';
import { Error } from './Error';

export interface InputProps {
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
   * Used to offer a "subtitle" to a label, where you can expand on an input's needs. You can also use this to provide
   * helpful context to people using screen readers.
   */
  description?: {
    isHidden: boolean;
    component: ReactNode;
  };

  /**
   * Should match the relevant key name inside the Formik schema.
   */
  name: string;

  /**
   * An input must always have a label, but design may want it visually hidden.
   */
  isLabelHidden?: boolean;

  /**
   * Typically used to render an icon on the left or right side of the input.
   */
  adornment?: {
    location: LeftRight;
    component: ReactNode;
  };

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
   * This will eventually be an optional parameter, but must be required until [this Formik issue](https://github.com/formium/formik/issues/2092#issuecomment-738606844)
   * is resolved.
   */
  required: boolean;
  variant?: FieldVariantName | FieldVariantName[];
  className?: string;
  id?: string;
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
   * This is a formik based component. As a result, this input has access to its specific error message. By default, this value is set to false and any
   * errors incurred by this component will display below the input field. If you'd like to use alternative tools to handle displaying your errors (i.e. Formik's `<ErrorMessage>`
   * component), then you should set this prop to false to prevent duplicate, or ill-formatted error messages.
   */
  isErrorHidden?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  'data-testid'?: string;
  innerInputRef?: MutableRefObject<HTMLInputElement | null>;
}

const sharedAdornmentStyles: BoxStylingProps['tx'] = {
  color: 'pigeon500',
  position: 'absolute',
};

export const Input = ({
  adornment,
  autoComplete = 'off',
  className,
  'data-testid': topLevelTestID,
  description,
  disabled = false,
  id,
  innerInputRef,
  isLabelHidden = false,
  label,
  name,
  placeholder,
  readOnly = false,
  required,
  isErrorHidden = false,
  tx = {},
  type = 'text',
  variant = 'field-input-smol',
  ...restOfProps
}: InputProps) => {
  const theme = useTheme();
  const [field, meta] = useField(name);
  const inputIdentifier = id ?? name;
  const errorIdentifier = `${inputIdentifier}_error`;
  const descriptionIdentifier = `${inputIdentifier}_description`;
  const hasError = meta.touched && !!meta.error;
  const isChonky = variant === 'field-input-chonky';

  const {
    InnerInput: inputStyles,
    InnerInputContainer: inputContainerStyles,
    ...outerContainerStyles
  } = tx;

  const testID = useMemo(() => {
    const prefix = `input_${name}`;

    if (!meta.touched) return `${prefix}_untouched`;
    if (hasError) return `${prefix}_invalid`;
    return `${prefix}_valid`;
  }, [hasError]); // eslint-disable-line react-hooks/exhaustive-deps

  const adornmentSideBuffer = useMemo(
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
      })({ theme, variant }) as { paddingLeft: number | number[]; paddingRight: number | number[] },
    [theme, variant],
  );

  const nonAdornmentSideBuffer = useMemo(
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
      })({ theme, variant }) as { paddingLeft: number | number[]; paddingRight: number | number[] },
    [theme, variant],
  );

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
        ...outerContainerStyles,
      }}
      data-testid={topLevelTestID}
    >
      <Label
        for={inputIdentifier}
        isFieldRequired={required}
        isVisuallyHidden={isLabelHidden}
        tx={isLabelHidden ? undefined : { mb: 6 }}
      >
        {label}
      </Label>

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
          aria-invalid={hasError}
          autoComplete={autoComplete}
          data-testid={testID}
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
          {...field}
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

      {/* Only render description while no error for field exists. */}
      <Text
        as="span"
        id={descriptionIdentifier}
        variant="text-ui-12"
        data-testid={`${topLevelTestID}_description`}
        tx={{
          position: 'absolute',
          bottom: isChonky ? -22 : -18,
          display: hasError ? 'none' : 'block',
          color: 'pigeon500',
        }}
      >
        {description?.isHidden ? (
          <VisuallyHidden>{description.component}</VisuallyHidden>
        ) : (
          description?.component
        )}
      </Text>

      {!isErrorHidden && (
        <Error
          errorText={meta.error}
          isErrorVisible={hasError}
          id={errorIdentifier}
          tx={{ bottom: isChonky ? -22 : -18 }}
          data-testid={`${topLevelTestID}_error`}
        />
      )}
    </Box>
  );
};

Input.displayName = 'Input';

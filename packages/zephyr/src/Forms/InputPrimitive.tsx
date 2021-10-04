import * as React from 'react';
import { Box } from '../Box';
import { FieldVariantName, TXProp } from '../theme';

export type ReactInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type HTMLInputProps = Omit<ReactInputProps, 'ref' | 'autoComplete'>;

export interface InputPrimitiveProps extends HTMLInputProps {
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
  'data-testid'?: string;
  innerInputRef?: React.MutableRefObject<HTMLInputElement | null>;
  /**
   * This prop can be used to pass custom styles to the input
   */
  tx?: TXProp;
  variant?: FieldVariantName | FieldVariantName[];
}

export const InputPrimitive = React.memo(
  ({
    autoComplete = 'off',
    'data-testid': testId,
    disabled = false,
    id,
    innerInputRef,
    name,
    placeholder,
    readOnly = false,
    required,
    tx,
    type = 'text',
    variant = 'field-input-smol',
    ...restOfProps
  }: InputPrimitiveProps) => {
    const inputIdentifier = id ?? name;

    return (
      <Box
        as="input"
        ref={(instance: HTMLInputElement | null) =>
          innerInputRef ? (innerInputRef.current = instance) : undefined
        }
        autoComplete={autoComplete}
        data-testid={testId}
        disabled={disabled || readOnly}
        id={inputIdentifier}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        tx={tx}
        type={type}
        variant={variant}
        {...restOfProps}
      />
    );
  },
);

InputPrimitive.displayName = 'InputPrimitive';

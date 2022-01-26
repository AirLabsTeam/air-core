import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box';
import { FieldVariantName } from '../theme';
import { AutoCompleteOptions } from './types';

export type HTMLInputProps = Omit<BoxProps<'input'>, 'ref' | 'autoComplete' | 'as' | '__themeKey'>;

export interface InputPrimitiveProps extends HTMLInputProps {
  /**
   * Autocomplete helps to fill an input with device-remembered values. See MDN's documentation on the [attribute and
   * its values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).
   */
  autoComplete?: AutoCompleteOptions;
  'data-testid'?: string;
  variant?: FieldVariantName | FieldVariantName[];
}

export const InputPrimitive = forwardRef<HTMLInputElement, InputPrimitiveProps>(
  (
    {
      autoComplete = 'off',
      'data-testid': testId,
      disabled = false,
      id,
      name,
      placeholder,
      readOnly = false,
      required,
      tx,
      type = 'text',
      variant = 'field-input-smol',
      ...restOfProps
    }: InputPrimitiveProps,
    forwardedRef,
  ) => {
    return (
      <Box
        as="input"
        ref={forwardedRef}
        autoComplete={autoComplete}
        data-testid={testId}
        disabled={disabled || readOnly}
        id={id}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        tx={tx}
        type={type}
        name={name}
        variant={variant}
        {...restOfProps}
      />
    );
  },
);

InputPrimitive.displayName = 'InputPrimitive';

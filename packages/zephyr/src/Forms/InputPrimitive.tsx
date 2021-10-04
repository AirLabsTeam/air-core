import React from 'react';
import { forwardRefWithAs } from '@reach/utils';
import { Box, BoxProps } from '../Box';
import { FieldVariantName, TXProp } from '../theme';
import { AutoCompleteOptions } from './types';

export type HTMLInputProps = Omit<BoxProps<'input'>, 'ref' | 'autoComplete' | 'as'>;

export interface InputPrimitiveProps extends HTMLInputProps {
  /**
   * Autocomplete helps to fill an input with device-remembered values. See MDN's documentation on the [attribute and
   * its values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).
   */
  autoComplete?: AutoCompleteOptions;
  'data-testid'?: string;
  /**
   * This prop can be used to pass custom styles to the input
   */
  tx?: TXProp;
  variant?: FieldVariantName | FieldVariantName[];
}

export const InputPrimitive = forwardRefWithAs<InputPrimitiveProps, 'input'>(
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
    const inputIdentifier = id ?? name;

    return (
      <Box
        as="input"
        ref={forwardedRef}
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

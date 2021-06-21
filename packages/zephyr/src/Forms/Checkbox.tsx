import { Check } from '@air/icons';
import { useId } from '@reach/auto-id';
import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';

import { Box, BoxProps } from '../Box';
import { TXProp } from '../theme';
import { Label } from './Label';

export interface CheckboxProps
  extends Pick<BoxProps<'input'>, 'checked' | 'id' | 'name' | 'onChange' | 'value'> {
  isLabelVisuallyHidden?: boolean;
  label: string;
  tx?: TXProp & {
    Checkbox?: TXProp;
    Input?: TXProp;
  };
}

export const Checkbox = ({
  checked,
  id,
  isLabelVisuallyHidden,
  label,
  name,
  onChange,
  value,
  tx = {},
}: CheckboxProps) => {
  const autoId = useId(id)!;
  const { Checkbox: checkboxStyles, Input: inputStyles, ...labelStyles } = tx;

  return (
    <Label
      for={autoId}
      tx={{ display: 'flex', alignItems: 'center', color: 'pigeon500', ...labelStyles }}
    >
      <Box
        as="input"
        checked={checked}
        id={autoId}
        onChange={onChange}
        name={name}
        tx={{
          display: 'none',

          [`&:checked + ${Box}`]: {
            backgroundColor: 'jay500',
            borderColor: 'jay500',

            [`> ${Box}`]: {
              transform: 'scale(1)',
              opacity: 1,
            },
          },

          ...inputStyles,
        }}
        type="checkbox"
        value={value}
      />
      <Box
        tx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          width: 16,
          height: 16,
          border: '1px solid',
          borderRadius: 2,
          ...checkboxStyles,
        }}
      >
        <Box
          as={Check}
          tx={{
            width: 12,
            color: 'white',
            strokeWidth: 1,
            stroke: 'white',
            opacity: 0,
            transform: 'scale(0.6)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        />
      </Box>
      {isLabelVisuallyHidden ? (
        <VisuallyHidden>{label}</VisuallyHidden>
      ) : (
        <Box as="span" tx={{ my: -1, ml: 8 }}>
          {label}
        </Box>
      )}
    </Label>
  );
};

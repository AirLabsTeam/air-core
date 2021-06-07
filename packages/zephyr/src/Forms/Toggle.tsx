import { useId } from '@reach/auto-id';
import VisuallyHidden from '@reach/visually-hidden';
import { useField } from 'formik';
import React from 'react';

import { TXProp } from '../theme';
import { Box } from '../Box';
import { Label } from './Label';

export interface ToggleProps {
  ['data-testid']?: string;
  id?: string;
  label: string;
  name: string;
  tx?: TXProp & {
    Toggle?: TXProp;
    ToggleActive?: TXProp;
    ToggleHandle?: TXProp;
    ToggleHandleActive?: TXProp;
    ToggleInput?: TXProp;
  };
}

export const Toggle = ({ ['data-testid']: testId, id, label, name, tx = {} }: ToggleProps) => {
  const autoId = useId(id)!;
  const [field] = useField({ name, type: 'checkbox' });
  const {
    Toggle: toggleStyles,
    ToggleActive: toggleActiveStyles,
    ToggleHandle: toggleHandleStyles,
    ToggleHandleActive: toggleHandleActiveStyles,
    ToggleInput: toggleInputStyles,
    ...labelStyles
  } = tx;

  return (
    <Label for={autoId} tx={{ display: 'flex', width: 24, height: 16, ...labelStyles }}>
      <Box
        as="input"
        data-testid={testId}
        id={autoId}
        tx={{
          display: 'none',

          [`&:checked + ${Box}`]: {
            backgroundColor: 'peacock400',
            ...toggleActiveStyles,

            [`> ${Box}`]: {
              transform: 'translateX(8px)',
              ...toggleHandleActiveStyles,
            },
          },

          ...toggleInputStyles,
        }}
        {...field}
        type="checkbox"
      />
      <Box
        tx={{
          position: 'relative',
          backgroundColor: 'pigeon300',
          width: '100%',
          height: '100%',
          borderRadius: 24,
          transition: 'background 0.2s ease',
          cursor: 'pointer',
          ...toggleStyles,
        }}
      >
        <Box
          tx={{
            position: 'absolute',
            top: 2,
            left: 2,
            bottom: 2,
            backgroundColor: 'white',
            width: 12,
            height: 12,
            borderRadius: 12,
            transition: 'transform 150ms ease',
            ...toggleHandleStyles,
          }}
        />
      </Box>

      <VisuallyHidden>{label}</VisuallyHidden>
    </Label>
  );
};

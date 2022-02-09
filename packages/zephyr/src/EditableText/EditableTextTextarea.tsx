import React, { forwardRef, KeyboardEvent } from 'react';
import { useField, useFormikContext } from 'formik';
import VisuallyHidden from '@reach/visually-hidden';
import { useId } from '@reach/auto-id';
import { TXProp } from '../theme';
import { Box } from '../Box';
import { Label } from '../Forms/Label';
import { EditableTextFormikValues } from './types';

interface EditableTextTextareaProps {
  id: string;
  /**
   * This label will not be visible. It's here for accessibility purposes.
   * */
  label: string;
  maxLength?: number;
  name: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  tx?: TXProp;
}

export const EditableTextTextarea = forwardRef<HTMLTextAreaElement, EditableTextTextareaProps>(
  (
    { id, label, maxLength, name, onValueChange, required, tx }: EditableTextTextareaProps,
    forwardedRef,
  ) => {
    const { handleReset, submitForm } = useFormikContext<EditableTextFormikValues>();
    const autoId = useId();
    const [field] = useField(name);

    return (
      <>
        <Label for={id} isVisuallyHidden>
          {label}
        </Label>
        <VisuallyHidden>
          <Box as="p" id={autoId}>
            Press <kbd>Enter</kbd> to save changes and <kbd>ESC</kbd> to cancel changes.
          </Box>
        </VisuallyHidden>
        <Box
          aria-describedby={autoId}
          as="textarea"
          id={id}
          maxLength={maxLength}
          onKeyUp={(event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Escape') {
              event.stopPropagation();
              handleReset();
            }
          }}
          onKeyPress={async (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.stopPropagation();
              event.preventDefault();
              await submitForm();
            }
          }}
          ref={forwardedRef}
          required={required}
          tx={{
            outline: 'none',
            position: 'absolute',
            backgroundColor: 'transparent',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            maxHeight: '100%',
            p: 0,
            border: 'none',
            color: 'inherit',
            fontFamily: 'inherit',
            fontFeatureSettings: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            lineHeight: 'inherit',
            whiteSpace: 'pre-wrap',
            resize: 'none',
            overflow: 'hidden',
            /**
             * @todo I will deal with this at a later date, already spent 1+ hours on this.
             */
            ...tx,
          }}
          {...field}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            field.onChange(event);
            onValueChange?.(event.target?.value);
          }}
          onBlur={() => {
            submitForm();
          }}
        />
      </>
    );
  },
);

EditableTextTextarea.displayName = 'EditableTextTextarea';

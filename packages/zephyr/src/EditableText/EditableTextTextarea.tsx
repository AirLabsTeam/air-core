import { forwardRef, KeyboardEvent } from 'react';
import { useField, useFormikContext } from 'formik';
import { TextareaPrimitive } from '../Forms';
import { TXProp } from '..';
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
    const [field] = useField(name);

    return (
      <TextareaPrimitive
        aria-label={label}
        id={id}
        maxLength={maxLength}
        onKeyPress={async (event: KeyboardEvent<HTMLTextAreaElement>) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.stopPropagation();
            event.preventDefault();
            await submitForm();
          }
        }}
        onKeyUp={(event: KeyboardEvent<HTMLTextAreaElement>) => {
          if (event.key === 'Escape') {
            event.stopPropagation();
            handleReset();
          }
        }}
        ref={forwardedRef}
        required={required}
        tx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
          color: 'inherit',
          fontFamily: 'inherit',
          fontFeatureSettings: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          letterSpacing: 'inherit',
          lineHeight: 'inherit',
          ...tx,
        }}
        variant={'unstyled'}
        {...field}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          field.onChange(event);
          onValueChange?.(event.target?.value);
        }}
        onBlur={() => {
          submitForm();
        }}
      />
    );
  },
);

EditableTextTextarea.displayName = 'EditableTextTextarea';

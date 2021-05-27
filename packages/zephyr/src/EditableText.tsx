import { Form, Formik, FormikConfig, useField, useFormikContext } from 'formik';
import { noop } from 'lodash';
import React, { forwardRef, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { usePrevious } from 'react-use';
import * as Yup from 'yup';
import VisuallyHidden from '@reach/visually-hidden';
import { useId } from '@reach/auto-id';
import { useTheme } from 'styled-components';

import { Box } from './Box';
import { Button } from './Button';
import { Label } from './Forms/Label';
import { Text, TextProps } from './Text';

interface EditableTextTextareaProps {
  id: string;
  /**
   * This label will not be visible. It's here for accessibility purposes.
   * */
  label: string;
  name: string;
  onReset: () => void;
  onSubmit: () => void;
}

const EditableTextTextarea = forwardRef<HTMLTextAreaElement, EditableTextTextareaProps>(
  (
    { id, label, name, onReset = noop, onSubmit = noop }: EditableTextTextareaProps,
    forwardedRef,
  ) => {
    const { handleReset, submitForm } = useFormikContext();
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
          onKeyUp={(event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Escape') {
              event.stopPropagation();
              handleReset();
              onReset();
            }
          }}
          onKeyPress={(event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Enter') {
              event.stopPropagation();
              submitForm();
              onSubmit();
            }
          }}
          ref={forwardedRef}
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
            border: 0,
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
          }}
          {...field}
        />
      </>
    );
  },
);

EditableTextTextarea.displayName = 'EditableTextTextarea';

const EditableTextSchema = Yup.object().shape({
  ['editable-text-value']: Yup.string(),
});

export type EditableTextFormValues = {
  ['editable-text-value']: string;
};

export interface EditableTextProps
  extends Pick<TextProps, 'tx' | 'variant'>,
    Pick<FormikConfig<EditableTextFormValues>, 'onSubmit'> {
  'data-testid': string;
  isEditing?: boolean;
  id: string;
  label: string;
  name: string;
  onEditingStateChange: (isEditingState: boolean) => void;
  onReset?: () => void;
  value: string;
  placeholder?: string;
}

export const EditableText = ({
  ['data-testid']: testId,
  isEditing = false,
  id,
  label,
  onEditingStateChange = noop,
  onReset = noop,
  onSubmit = noop,
  placeholder,
  tx,
  value = '',
  variant = 'text-ui-16',
}: EditableTextProps) => {
  const theme = useTheme();
  const autoId = useId(id)!;
  const [isEditingState, setIsEditingState] = useState(isEditing);
  const isPreviousIsEditing = usePrevious(isEditingState);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditingState && textareaRef?.current) {
      textareaRef.current?.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length,
      );
    }

    if (!isEditingState && isPreviousIsEditing && buttonRef?.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef, isEditingState, isPreviousIsEditing, textareaRef]);

  return (
    <Formik
      enableReinitialize
      initialValues={{ ['editable-text-value']: value }}
      onSubmit={onSubmit}
      validationSchema={EditableTextSchema}
    >
      {({ values }) => (
        <Box
          data-testid={testId}
          tx={{ display: 'inline-flex', verticalAlign: 'text-top', textAlign: 'left', ...tx }}
        >
          <Box
            tx={{
              display: 'flex',
              flexGrow: 1,
              mx: -8,
              my: -6,
              px: 8,
              py: 6,
              borderRadius: 4,
              cursor: 'pointer',
              boxShadow: isEditingState ? `0 0 0 2px ${theme.colors.focus}` : 'none',
            }}
          >
            <Text tx={{ display: 'flex', position: 'relative', flexGrow: 1 }} variant={variant}>
              <Button
                onClick={() => {
                  setIsEditingState(true);
                  onEditingStateChange(true);
                }}
                ref={buttonRef}
                tabIndex={isEditingState ? -1 : undefined}
                tx={{
                  alignItems: 'flex-start',
                  flexGrow: 1,
                  justifyContent: 'flex-start',
                  mx: -8,
                  my: -6,
                  px: 8,
                  py: 6,
                  borderRadius: 4,
                  color: values['editable-text-value'] ? 'inherit' : 'pigeon300',
                  fontFamily: 'inherit',
                  fontFeatureSettings: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: values['editable-text-value'] ? 'inherit' : 'regular',
                  letterSpacing: 'inherit',
                  lineHeight: 'inherit',
                  textAlign: 'inherit',
                  whiteSpace: 'pre-wrap',
                  opacity: isEditingState && values['editable-text-value'] !== '' ? 0 : 1,

                  '&:hover': {
                    backgroundColor: isEditingState ? 'transparent' : 'pigeon050',
                    color: values['editable-text-value'] !== '' ? 'inherit' : 'pigeon300',
                  },

                  '&:active': {
                    backgroundColor: isEditingState ? 'transparent' : 'pigeon050',
                    color: values['editable-text-value'] !== '' ? 'inherit' : 'pigeon300',
                  },

                  '&:focus-visible': {
                    backgroundColor: 'pigeon050',
                    boxShadow: 'none',
                  },
                }}
                variant="button-unstyled"
              >
                {values['editable-text-value'] || placeholder}
              </Button>

              {isEditingState && (
                <Box as={Form} tx={{ position: 'unset' }}>
                  <EditableTextTextarea
                    id={autoId}
                    label={label}
                    name="editable-text-value"
                    onReset={() => {
                      onReset();
                      setIsEditingState(false);
                    }}
                    onSubmit={() => {
                      setIsEditingState(false);
                      onEditingStateChange(false);
                    }}
                    ref={textareaRef}
                  />
                </Box>
              )}
            </Text>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

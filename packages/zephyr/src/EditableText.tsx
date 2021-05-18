import { Form, useField, useFormikContext } from 'formik';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { usePrevious } from 'react-use';
import { useTheme } from 'styled-components';

import { Box } from './Box';
import { Button } from './Button';
import { Text, TextProps } from './Text';

export interface EditableTextProps extends Pick<TextProps, 'variant'> {
  name: string;
  placeholder?: string;
}

export const EditableText = ({ name, placeholder, variant = 'text-ui-12' }: EditableTextProps) => {
  const { submitForm } = useFormikContext();
  const [field, { value }] = useField(name);
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const isPreviousIsEditing = usePrevious(isEditing);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef?.current) {
      textareaRef.current?.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length,
      );
    }

    if (!isEditing && isPreviousIsEditing && buttonRef?.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef, isEditing, isPreviousIsEditing, textareaRef]);

  return (
    <Box tx={{ display: 'inline-block', verticalAlign: 'text-top' }}>
      <Box
        onClick={() => setIsEditing(true)}
        tx={{
          mx: -8,
          my: -4,
          px: 8,
          py: 4,
          borderRadius: 4,
          cursor: 'pointer',
          boxShadow: isEditing ? `0 0 0 2px ${theme.colors.focus}` : 'none',
        }}
      >
        <Text tx={{ position: 'relative' }} variant={variant}>
          <Button
            ref={buttonRef}
            tx={{
              mx: -8,
              my: -4,
              px: 8,
              py: 4,
              display: 'inline',
              borderRadius: 4,
              color: value ? 'inherit' : 'pigeon300',
              fontFamily: 'inherit',
              fontFeatureSettings: 'inherit',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              letterSpacing: 'inherit',
              lineHeight: 'inherit',

              '&:hover': {
                backgroundColor: isEditing ? 'transparent' : 'pigeon050',
                color: value ? 'inherit' : 'pigeon300',
              },

              '&:active': {
                backgroundColor: isEditing ? 'transparent' : 'pigeon050',
                color: value ? 'inherit' : 'pigeon300',
              },

              '&:focus-visible': {
                backgroundColor: 'pigeon050',
                boxShadow: 'none',
              },
            }}
            variant="button-unstyled"
          >
            {value || placeholder}
          </Button>

          {isEditing && (
            <Box as={Form} tx={{ position: 'unset' }}>
              <Box
                as="textarea"
                onKeyPress={(event: KeyboardEvent<HTMLTextAreaElement>) => {
                  if (event.key === 'Enter') {
                    event.stopPropagation();
                    submitForm();
                    setIsEditing(false);
                  }
                }}
                ref={textareaRef}
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
                  resize: 'none',
                }}
                {...field}
              />
            </Box>
          )}
        </Text>
      </Box>
    </Box>
  );
};

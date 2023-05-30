import { Form, Formik, FormikConfig } from 'formik';
import { noop } from 'lodash';
import { ReactNode, useEffect, useRef, useState, useCallback } from 'react';
import { usePrevious } from 'react-use';
import { useId } from '@reach/auto-id';
import * as Yup from 'yup';
import { useTheme } from 'styled-components';
import { TXProp } from '../theme';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text, TextProps } from '../Text';
import { EDITABLE_TEXT_FIELD_NAME, EditableTextFormikValues } from './types';
import { EditableTextTextarea } from './EditableTextTextarea';

const EditableTextSchema = Yup.object().shape({
  [EDITABLE_TEXT_FIELD_NAME]: Yup.string().trim(),
});

const RequiredEditableTextSchema = Yup.object().shape({
  [EDITABLE_TEXT_FIELD_NAME]: Yup.string().trim().required('This field is required'),
});

export type EditableTextFormValues = {
  [EDITABLE_TEXT_FIELD_NAME]: string;
};

export interface EditableTextProps
  extends Pick<TextProps, 'as' | 'variant'>,
    Pick<FormikConfig<EditableTextFormValues>, 'onSubmit'> {
  'data-testid'?: string;
  behavior?: 'box' | 'text';
  disabled?: boolean;
  formatValue?: (children: ReactNode) => ReactNode;
  isEditing?: boolean;
  id?: string;
  label: string;
  /**
   * This will set the max character length for the textarea.
   */
  maxLength?: number;
  onEditingStateChange?: (isEditingState: boolean) => void;
  onReset?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  tx?: TXProp & {
    EditableTextButton?: TXProp;
    EditableTextText?: TXProp;
    EditableTextTextarea?: TXProp;
  };
  value: string;
  error?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  validationSchema?: any | (() => any);
}

export const EditableText = ({
  as,
  behavior = 'box',
  ['data-testid']: testId,
  disabled,
  formatValue = (value) => value,
  isEditing = false,
  id,
  label,
  maxLength,
  onEditingStateChange = noop,
  onReset = noop,
  onSubmit = noop,
  placeholder,
  readOnly,
  tx = {},
  value = '',
  variant = 'text-ui-16',
  error,
  onValueChange,
  required,
  validationSchema,
}: EditableTextProps) => {
  const theme = useTheme();
  const autoId = useId(id)!;
  const [isEditingState, setIsEditingState] = useState(isEditing);
  const isPreviousIsEditing = usePrevious(isEditingState);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isTextBehavior = behavior === 'text';
  const {
    EditableTextButton: buttonStyles,
    EditableTextText: textStyles,
    EditableTextTextarea: textareaStyles,
    ...containerStyles
  } = tx;

  const setIsEditing = useCallback(
    (isEditing: boolean) => {
      setIsEditingState(isEditing);
      onEditingStateChange(isEditing);
    },
    [onEditingStateChange],
  );

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
    <Formik<EditableTextFormikValues>
      enableReinitialize
      onReset={() => {
        onReset();
        setIsEditing(false);
      }}
      validateOnChange={false}
      initialValues={{ [EDITABLE_TEXT_FIELD_NAME]: value }}
      onSubmit={async (values, formikHelpers) => {
        /**
         * Only submit the form if the value has changed.
         */
        const formikError = await formikHelpers.validateForm();
        const fieldError = formikError[EDITABLE_TEXT_FIELD_NAME];
        const rawValue = values[EDITABLE_TEXT_FIELD_NAME];
        const trimmedValue = rawValue.trim();
        const trimmedValues: EditableTextFormikValues = {
          [EDITABLE_TEXT_FIELD_NAME]: trimmedValue,
        };
        formikHelpers.setFieldValue(EDITABLE_TEXT_FIELD_NAME, trimmedValue);
        if (!fieldError) {
          setIsEditing(false);
          onSubmit(trimmedValues, formikHelpers);
        }
      }}
      validationSchema={
        validationSchema || required ? RequiredEditableTextSchema : EditableTextSchema
      }
    >
      {({ values, errors }) => {
        const formError = error ?? errors[EDITABLE_TEXT_FIELD_NAME];
        return (
          <Box
            data-testid={testId}
            tx={{
              position: 'relative',
              display: 'inline-flex',
              verticalAlign: 'text-top',
              textAlign: 'left',
              ...containerStyles,
            }}
          >
            <Box
              tx={{
                display: 'flex',
                flexGrow: 1,
                mx: isTextBehavior ? -8 : 0,
                my: isTextBehavior ? -6 : 0,
                px: 8,
                py: 6,
                borderRadius: 4,
                cursor: disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer',
                boxShadow: isEditingState
                  ? `inset 0 0 0 2px ${formError ? theme.colors.flamingo600 : theme.colors.focus}`
                  : 'none',
              }}
            >
              <Text
                as={as}
                tx={{
                  display: 'flex',
                  position: 'relative',
                  flexGrow: 1,
                  ...textStyles,
                }}
                variant={variant}
              >
                <Button
                  disabled={disabled ?? readOnly}
                  onClick={() => {
                    setIsEditing(true);
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
                    color: values[EDITABLE_TEXT_FIELD_NAME] ? 'inherit' : 'pigeon300',
                    fontFamily: 'inherit',
                    fontFeatureSettings: 'inherit',
                    fontSize: 'inherit',
                    fontWeight: values[EDITABLE_TEXT_FIELD_NAME] ? 'inherit' : 'regular',
                    letterSpacing: 'inherit',
                    lineHeight: 'inherit',
                    textAlign: 'inherit',
                    whiteSpace: 'pre-wrap',
                    opacity: isEditingState && values[EDITABLE_TEXT_FIELD_NAME] !== '' ? 0 : 1,

                    '&:hover': {
                      backgroundColor: isEditingState ? 'transparent' : 'pigeon050',
                      color: values[EDITABLE_TEXT_FIELD_NAME] !== '' ? 'inherit' : 'pigeon300',
                    },

                    '&:active': {
                      backgroundColor: isEditingState ? 'transparent' : 'pigeon050',
                      color: values[EDITABLE_TEXT_FIELD_NAME] !== '' ? 'inherit' : 'pigeon300',
                    },

                    '&:focus-visible': {
                      backgroundColor: 'pigeon050',
                      boxShadow: 'none',
                    },

                    '&:disabled': {
                      color: readOnly
                        ? values[EDITABLE_TEXT_FIELD_NAME] !== ''
                          ? 'inherit'
                          : 'pigeon300'
                        : 'pigeon200',
                    },

                    /**
                     * @todo I will deal with this at a later date, already spent 1+ hours on this.
                     */
                    ...(buttonStyles as any),
                  }}
                  variant="button-unstyled"
                >
                  {formatValue(values[EDITABLE_TEXT_FIELD_NAME] || placeholder)}
                  {/**
                   * This is need to ensure that newlines will always show the proper spacing
                   * when using the CSS property `white-space` with the value of `pre-wrap`.
                   */}
                  {values[EDITABLE_TEXT_FIELD_NAME].includes('\n') && <>&nbsp;</>}
                </Button>

                {isEditingState && (
                  <Box as={Form} tx={{ position: 'unset' }}>
                    <EditableTextTextarea
                      id={autoId}
                      label={label}
                      maxLength={maxLength}
                      name="editable-text-value"
                      onValueChange={onValueChange}
                      ref={textareaRef}
                      required
                      tx={textareaStyles}
                    />
                  </Box>
                )}
              </Text>
            </Box>
            {isEditingState && !!formError && (
              <Text
                variant="text-ui-10"
                tx={{
                  bottom: -6,
                  right: 15,
                  position: 'absolute',
                  color: 'flamingo600',
                  backgroundColor: 'white',
                  px: 3,
                  py: 2,
                  fontWeight: 500,
                }}
              >
                {formError}
              </Text>
            )}
          </Box>
        );
      }}
    </Formik>
  );
};

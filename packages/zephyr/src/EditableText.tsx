import { Form, Formik, FormikConfig, useField, useFormikContext } from 'formik';
import { noop } from 'lodash';
import React, {
  forwardRef,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
  FocusEvent,
  FocusEventHandler,
} from 'react';
import { usePrevious } from 'react-use';
import VisuallyHidden from '@reach/visually-hidden';
import { useId } from '@reach/auto-id';
import * as Yup from 'yup';
import { useTheme } from 'styled-components';
import { TXProp } from './theme';
import { Box } from './Box';
import { Button } from './Button';
import { Label } from './Forms/Label';
import { Text, TextProps } from './Text';

interface EditableTextTextareaProps {
  error?: string;
  id: string;
  /**
   * This label will not be visible. It's here for accessibility purposes.
   * */
  label: string;
  maxLength?: number;
  name: string;
  onReset: () => void;
  onSubmit: () => void;
  onBlur?: FocusEventHandler;
  onValueChange?: (value: string) => void;
  required?: boolean;
  tx?: TXProp;
}

const EditableTextTextarea = forwardRef<HTMLTextAreaElement, EditableTextTextareaProps>(
  (
    {
      error,
      id,
      label,
      maxLength,
      name,
      onReset = noop,
      onSubmit = noop,
      onBlur = noop,
      onValueChange,
      required,
      tx,
    }: EditableTextTextareaProps,
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
          maxLength={maxLength}
          onKeyUp={(event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Escape') {
              event.stopPropagation();
              handleReset();
              onReset();
            }
          }}
          onKeyPress={async (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.stopPropagation();
              event.preventDefault();
              if (!error) {
                // ensure the formik form submission happens before setting isEditing to false
                await submitForm();
                onSubmit();
              }
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
            ...(tx as any),
          }}
          {...field}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            field.onChange(event);
            onValueChange?.(event.target?.value);
          }}
          onBlur={(e: FocusEvent) => {
            submitForm();
            onSubmit();
            onBlur(e);
          }}
        />
      </>
    );
  },
);

EditableTextTextarea.displayName = 'EditableTextTextarea';

const EditableTextSchema = Yup.object().shape({
  ['editable-text-value']: Yup.string().strict().trim('No trailing spaces'),
});

const RequiredEditableTextSchema = Yup.object().shape({
  ['editable-text-value']: Yup.string()
    .strict()
    .trim('No trailing spaces')
    .required('This field is required'),
});

export type EditableTextFormValues = {
  ['editable-text-value']: string;
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
  onBlur?: FocusEventHandler;
  required?: boolean;
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
  onBlur,
  required,
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
      onSubmit={(values, formikHelpers) => {
        /**
         * Only submit the form if the value has changed.
         */
        if (values['editable-text-value'] !== value) {
          onSubmit(values, formikHelpers);
        }
      }}
      validationSchema={required ? RequiredEditableTextSchema : EditableTextSchema}
    >
      {({ values, errors }) => {
        const formError = error ?? errors['editable-text-value'];
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

                    '&:disabled': {
                      color: readOnly
                        ? values['editable-text-value'] !== ''
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
                  {formatValue(values['editable-text-value'] || placeholder)}
                  {/**
                   * This is need to ensure that newlines will always show the proper spacing
                   * when using the CSS property `white-space` with the value of `pre-wrap`.
                   */}
                  {values['editable-text-value'].includes('\n') && <>&nbsp;</>}
                </Button>

                {isEditingState && (
                  <Box as={Form} tx={{ position: 'unset' }}>
                    <EditableTextTextarea
                      onValueChange={onValueChange}
                      error={formError}
                      id={autoId}
                      label={label}
                      maxLength={maxLength}
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
                      required
                      tx={textareaStyles}
                      onBlur={onBlur}
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

import { forwardRef, useMemo } from 'react';
import { Box, BoxProps } from '../Box';
import { commonFieldStyles, TXProp } from '../theme';

const coreTextareaStyles: TXProp = {
  resize: 'none',
  whiteSpace: 'pre-wrap',
  fontSize: 16,
};

export type TextareaSizeOption = 'small' | 'large';
export const textareaSizeStyles: { [key in TextareaSizeOption]: TXProp } = {
  // these lineHeights allow a single-row Textarea to visually match our corresponding Inputs
  small: { lineHeight: '18px' },
  large: { lineHeight: '26px' },
};

export type TextareaVariantOption = 'default' | 'unstyled';
export const textareaVariantStyles: { [key in TextareaVariantOption]: TXProp } = {
  default: {
    ...coreTextareaStyles,
    ...commonFieldStyles,
  },
  unstyled: {
    ...coreTextareaStyles,
    outline: 'none',
    backgroundColor: 'transparent',
    p: 0,
    border: 'none',
  },
};

export interface TextareaPrimitiveProps
  extends Omit<BoxProps<'textarea'>, 'ref' | 'autoComplete' | 'as' | '__themeKey'> {
  'data-testid'?: string;
  size?: TextareaSizeOption;
  tx?: TXProp;
  variant?: TextareaVariantOption;
}
/*
 * This is designed to be used by itself, or as part of EditableText or Formik.
 * If using with Formik, pass 'field' from useField hook.
 */
export const TextareaPrimitive = forwardRef<HTMLTextAreaElement, TextareaPrimitiveProps>(
  (
    { 'data-testid': testId, size, tx, variant = 'default', ...rest }: TextareaPrimitiveProps,
    forwardedRef,
  ) => {
    const combinedTx = useMemo(() => {
      return {
        ...textareaVariantStyles[variant],
        ...(size ? textareaSizeStyles[size] : undefined),
        ...tx,
      };
    }, [size, tx, variant]);

    return <Box as="textarea" data-testid={testId} ref={forwardedRef} tx={combinedTx} {...rest} />;
  },
);

TextareaPrimitive.displayName = 'TextareaPrimitive';

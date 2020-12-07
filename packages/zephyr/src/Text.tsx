import React from 'react';
import { Box, BoxStylingProps } from './Box';
import { TextVariantName } from './theme/variants/text';
import { forwardRefWithAs, PropsWithAs } from './utils/forwardRefWithAs';

export interface NonSemanticTextProps extends Pick<BoxStylingProps, 'tx'> {
  variant?: TextVariantName | TextVariantName[];
}

export interface TextProps extends PropsWithAs<'div', NonSemanticTextProps> {}

export const Text = forwardRefWithAs<'div', NonSemanticTextProps>(
  (
    {
      variant = 'text-ui-16',
      ref: _ref, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...restOfProps
    }: TextProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <Box variant={variant} ref={ref} {...restOfProps} __baseStyles={{ color: 'pigeon700' }} />
    );
  },
);

Text.displayName = 'Text';

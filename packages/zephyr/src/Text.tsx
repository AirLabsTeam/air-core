import React from 'react';
import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { Box } from './Box';
import { TextVariantName } from './theme/variants/text';

export type NonSemanticTextProps = {
  variant?: TextVariantName | TextVariantName[];
};

export interface TextProps extends PropsWithAs<'div', NonSemanticTextProps> {}

export const Text = forwardRefWithAs<NonSemanticTextProps, 'div'>(
  ({ variant = 'text-ui-16', ...restOfProps }: TextProps, ref) => {
    return (
      <Box variant={variant} ref={ref} {...restOfProps} __baseStyles={{ color: 'pigeon700' }} />
    );
  },
);

Text.displayName = 'Text';

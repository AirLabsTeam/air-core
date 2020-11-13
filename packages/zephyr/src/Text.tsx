import React, { forwardRef } from 'react';

import { Box, BoxProps } from './Box';
import { TextVariantName } from './theme/variants/text';

export interface TextProps extends Omit<BoxProps, '__baseStyles' | 'variant'> {
  variant?: TextVariantName | TextVariantName[];
}

export const Text = forwardRef<any, TextProps>(
  ({ variant = 'text-ui-16', ...restOfProps }: TextProps, ref) => {
    return (
      <Box variant={variant} ref={ref} {...restOfProps} __baseStyles={{ color: 'pigeon700' }} />
    );
  },
);

Text.displayName = 'Text';

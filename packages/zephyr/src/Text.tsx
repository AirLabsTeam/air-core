import React from 'react';

import { Box, BoxProps } from './Box';
import { TextVariantName } from './theme/variants/text';

export interface TextProps extends Omit<BoxProps, '__baseStyles' | 'variant'> {
  variant?: TextVariantName | TextVariantName[];
}

export const Text = ({ variant = 'ui-16', ...restOfProps }: TextProps) => {
  return (
    <Box
      __themeKey="variants.text"
      variant={variant}
      {...restOfProps}
      __baseStyles={{ color: 'pigeon700' }}
    />
  );
};

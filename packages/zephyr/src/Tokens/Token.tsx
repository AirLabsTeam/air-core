import React from 'react';

import { Box, BoxProps } from '../Box';
import { Text } from '../Text';
import { TextVariantName, TXProp } from '../theme';

export type TokenSize = 'large' | 'medium' | 'small';

export interface TokenProps extends BoxProps {
  size?: TokenSize;
}

const SIZE_STYLES: { [key in TokenSize]: TXProp } = {
  large: {
    height: 40,
    px: 10,
  },
  medium: {
    height: 32,
    px: 8,
  },
  small: {
    height: 24,
    px: 6,
  },
};

const SIZE_TEXT_VARIANTS: { [key in TokenSize]: TextVariantName } = {
  large: 'text-ui-16',
  medium: 'text-ui-14',
  small: 'text-ui-12',
};

export const Token = ({ children, size = 'medium', tx, ...restOfProps }: TokenProps) => {
  return (
    <Box
      tx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'pigeon100',
        borderRadius: 4,
        color: 'pigeon700',
        fontWeight: 'medium',
        ...SIZE_STYLES[size],
        ...tx,
      }}
      {...restOfProps}
    >
      <Text tx={{ color: 'inherit', fontWeight: 'inherit' }} variant={SIZE_TEXT_VARIANTS[size]}>
        {children}
      </Text>
    </Box>
  );
};

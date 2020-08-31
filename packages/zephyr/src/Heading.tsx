import React, { forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export type HeadingVariant = 'h1' | 'h2' | 'h3';

export interface HeadingProps extends BoxProps {
  variant: HeadingVariant;
}

export const Heading = forwardRef((props: HeadingProps, ref) => {
  return (
    <Box
      __themeKey="variants.heading"
      as="h1"
      {...props}
      ref={ref}
      __baseStyles={{
        mb: 24,
        color: 'red',
        fontWeight: 'medium',
      }}
    />
  );
});

Heading.displayName = 'Heading';

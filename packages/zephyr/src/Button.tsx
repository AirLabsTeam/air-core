import React, { forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export type ButtonProps = BoxProps<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Box __themeKey="variants.button" as="button" {...props} ref={ref} __baseStyles />;
});

Button.displayName = 'Button';

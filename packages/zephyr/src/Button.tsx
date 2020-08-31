import React, { MouseEvent as ReactMouseEvent, forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export interface ButtonProps extends Omit<BoxProps<HTMLButtonElement>, 'onClick' | '__baseStyles'> {
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = forwardRef(({ type = 'button', ...restOfProps }: ButtonProps, ref) => {
  return (
    <Box
      __themeKey="variants.button"
      as="button"
      {...restOfProps}
      type={type}
      ref={ref}
      __baseStyles={{}}
    />
  );
});

Button.displayName = 'Button';

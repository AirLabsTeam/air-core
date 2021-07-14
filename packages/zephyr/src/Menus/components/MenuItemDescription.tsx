import React from 'react';
import { Text, TextProps } from '../../Text';

export const MenuItemDescription = ({ tx, ...restOfProps }: TextProps) => (
  <Text tx={{ mt: 2, color: 'pigeon500', ...(tx as any) }} variant="text-ui-14" {...restOfProps} />
);

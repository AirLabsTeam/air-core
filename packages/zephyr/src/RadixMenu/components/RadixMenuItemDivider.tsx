import React, { memo, FC, ComponentProps } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';

import { Box } from '../../Box';

export interface RadixMenuItemDividerProps {
  isTop?: boolean;
}

export const RadixMenuItemDivider = memo(({ isTop }: RadixMenuItemDividerProps) => {
  return (
    <Box
      as={Separator as FC<Omit<ComponentProps<typeof Separator>, 'as' | 'ref'>>}
      tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, mt: isTop ? 0 : 8, mb: 8 }}
    />
  );
});

RadixMenuItemDivider.displayName = 'RadixMenuItemDivider';

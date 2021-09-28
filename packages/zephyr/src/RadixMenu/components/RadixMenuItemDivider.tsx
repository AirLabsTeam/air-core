import React, { memo, FC, ComponentProps } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';

import { Box } from '../../Box';
import { MenuVariantName } from '../../theme/variants/menus';

export interface RadixMenuItemDividerProps {
  isTop?: boolean;
  variant?: MenuVariantName;
}

export const RadixMenuItemDivider = memo(({ isTop, variant }: RadixMenuItemDividerProps) => {
  return (
    <Box
      as={Separator as FC<Omit<ComponentProps<typeof Separator>, 'as' | 'ref'>>}
      asChild
      tx={{
        backgroundColor: variant === 'dark' ? 'pigeon500' : 'pigeon100',
        height: 1,
        border: 0,
        mt: isTop ? 0 : 8,
        mb: 8,
      }}
    />
  );
});

RadixMenuItemDivider.displayName = 'RadixMenuItemDivider';

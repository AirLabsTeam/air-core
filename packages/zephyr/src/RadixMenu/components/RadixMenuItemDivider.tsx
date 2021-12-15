import { memo, FC, ComponentProps } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';

import { Box } from '../../Box';
import { MenuVariantName } from '../../theme/variants/menus';
import { BoxProps } from '../..';

export interface RadixMenuItemDividerProps extends Pick<BoxProps, 'tx'> {
  isTop?: boolean;
  variant?: MenuVariantName;
}

export const RadixMenuItemDivider = memo(({ isTop, variant, tx }: RadixMenuItemDividerProps) => {
  return (
    <Box
      as={Separator as FC<Omit<ComponentProps<typeof Separator>, 'as' | 'ref'>>}
      tx={{
        backgroundColor: variant === 'dark' ? 'pigeon500' : 'pigeon100',
        height: 1,
        border: 0,
        mt: isTop ? 0 : 8,
        mb: 8,
        ...tx,
      }}
    />
  );
});

RadixMenuItemDivider.displayName = 'RadixMenuItemDivider';

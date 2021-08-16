import React, { FC, ComponentProps, memo } from 'react';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';

import { Text, TextProps } from '../../Text';

export const MenuItemLabel = memo(({ tx, ...rest }: TextProps) => (
  <Text
    tx={{
      color: 'inherit',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...(tx as any),
    }}
    variant="text-ui-16"
    as={DropdownMenuLabel as FC<Omit<ComponentProps<typeof DropdownMenuLabel>, 'as' | 'ref'>>}
    {...rest}
  />
));

MenuItemLabel.displayName = 'MenuItemLabel';

import { memo } from 'react';

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
    {...rest}
  />
));

MenuItemLabel.displayName = 'MenuItemLabel';

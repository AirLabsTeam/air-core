import React, { memo } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { BoxProps } from '../../Box';
import { inlineStyles } from '../utils/inlineStyles';

const StyledSeperator = styled(Separator)<{ tx?: BoxProps['tx'] }>(inlineStyles);

export interface MenuDividerProps {
  isTop?: boolean;
}

export const MenuItemDivider = memo(({ isTop }: MenuDividerProps) => {
  return (
    <StyledSeperator
      tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, mt: isTop ? 0 : 8, mb: 8 }}
    />
  );
});

MenuItemDivider.displayName = 'MenuItemDivider';

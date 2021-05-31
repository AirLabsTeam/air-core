import React from 'react';

import { Text } from '../../Text';
import { TextVariantName } from '../../theme';
import { Pill, PillProps } from '../components/Pill';

export type BadgeSize = 'medium' | 'small';

export interface BadgeProps extends PillProps {
  size?: BadgeSize;
}

const SIZE_TEXT_VARIANT: { [key: string]: TextVariantName } = {
  medium: 'text-ui-12-uppercase',
  small: 'text-ui-10-uppercase',
};

export const Badge = ({ children, size = 'small', tx, ...restOfProps }: BadgeProps) => {
  return (
    <Pill
      tx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'peacock500',
        height: 16,
        color: 'white',
        fontWeight: 'medium',
        px: 6,
        ...tx,
      }}
      {...restOfProps}
    >
      <Text tx={{ color: 'inherit', fontWeight: 'inherit' }} variant={SIZE_TEXT_VARIANT[size]}>
        {children}
      </Text>
    </Pill>
  );
};

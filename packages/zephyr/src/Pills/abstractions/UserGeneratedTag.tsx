import React from 'react';

import { Text } from '../../Text';
import { TextVariantName } from '../../theme';
import { Pill, PillProps } from '../components/Pill';

export type UserGeneratedTagSize = 'medium' | 'small';

export interface UserGeneratedTagProps extends PillProps {
  size?: UserGeneratedTagSize;
}

const SIZE_STYLES = {
  medium: {
    height: 40,
    px: 12,
  },
  small: {
    height: 24,
    px: 8,
  },
};

const SIZE_TEXT_VARIANT: { [key: string]: TextVariantName } = {
  medium: 'text-ui-14',
  small: 'text-ui-12',
};

export const UserGeneratedTag = ({
  children,
  size = 'medium',
  tx,
  ...restOfProps
}: UserGeneratedTagProps) => {
  return (
    <Pill
      tx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'pigeon025',
        color: 'pigeon600',
        fontWeight: 'medium',
        ...SIZE_STYLES[size],
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

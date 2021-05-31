import React from 'react';

import { Text } from '../../Text';
import { TextVariantName } from '../../theme';
import { Pill, PillProps } from '../components/Pill';

export type SmartTagSize = 'medium' | 'small';

export interface SmartTagProps extends PillProps {
  size?: SmartTagSize;
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

export const SmartTag = ({ children, size = 'medium', tx, ...restOfProps }: SmartTagProps) => {
  return (
    <Pill
      tx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: '1px dashed',
        borderColor: 'pigeon100',
        color: 'pigeon500',
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

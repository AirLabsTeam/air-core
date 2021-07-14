import React from 'react';
import { Text, TextProps } from '../../Text';

export type ActionSheetLabelProps = TextProps;

export const ActionSheetLabel = (props: ActionSheetLabelProps) => {
  return (
    <Text
      tx={{
        color: 'inherit',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...(props?.tx as any),
      }}
      variant="text-ui-16"
      {...props}
    />
  );
};

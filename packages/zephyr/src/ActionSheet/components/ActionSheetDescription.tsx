import React from 'react';
import { Text, TextProps } from '../../Text';

export type ActionSheetDescriptionProps = TextProps;

export const ActionSheetDescription = (props: ActionSheetDescriptionProps) => {
  return (
    <Text
      tx={{ mt: 2, color: 'pigeon500', ...(props?.tx as any) }}
      variant="text-ui-14"
      {...props}
    />
  );
};

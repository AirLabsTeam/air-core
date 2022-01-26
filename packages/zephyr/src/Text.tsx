import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { Ref } from 'react';
import { Box, BoxStylingProps } from './Box';
import { TextVariantName } from './theme/variants/text';

export interface NonSemanticTextProps extends Pick<BoxStylingProps, 'tx'> {
  variant?: TextVariantName | TextVariantName[];
}

export interface TextProps extends PropsWithAs<'div', NonSemanticTextProps> {}

export const Text = forwardRefWithAs<NonSemanticTextProps, 'div'>(
  (
    {
      ref: _ref, // eslint-disable-line @typescript-eslint/no-unused-vars
      tx,
      variant = 'text-ui-16',
      ...restOfProps
    }: TextProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return <Box variant={variant} ref={ref} {...restOfProps} tx={{ color: 'pigeon700', ...tx }} />;
  },
);

Text.displayName = 'Text';

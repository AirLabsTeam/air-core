import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { BoxProps } from '../Box';
import { Text } from '../Text';
import { TextVariantName } from '../theme/variants/text';

export interface LabelProps extends Pick<BoxProps, 'children' | 'className' | 'tx'> {
  /**
   * The id of the input this label is meant to identify.
   */
  for: string;
  /**
   * Boolean used to determine whether or not the element is hidden visually. It will always be rendered for
   * accessibility reasons
   */
  isVisuallyHidden?: boolean;
  /**
   * Booolean used to determine if text is completely opaque or not.
   */
  isDisabled?: boolean;
  /**
   * The size of the label in pixels. Default is 12px.
   */
  size?: 12 | 14;
}

export const Label = ({
  children,
  className,
  for: htmlFor,
  isVisuallyHidden = false,
  size = 12,
  tx,
}: LabelProps) => {
  const TheLabelElement = (
    <Text
      as="label"
      variant={`text-ui-${size}` as TextVariantName}
      className={className}
      htmlFor={htmlFor}
      tx={{ color: 'pigeon600', fontWeight: 'semibold', ...tx }}
    >
      {children}
    </Text>
  );

  return isVisuallyHidden ? (
    <VisuallyHidden>{TheLabelElement}</VisuallyHidden>
  ) : (
    <>{TheLabelElement}</>
  );
};

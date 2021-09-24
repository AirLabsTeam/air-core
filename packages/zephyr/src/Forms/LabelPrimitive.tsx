import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { BoxProps } from '../Box';
import { Text } from '../Text';
import { TextVariantName } from '../theme/variants/text';
import { TXProp } from '..';

export interface LabelPrimitiveProps extends Pick<BoxProps, 'children'> {
  /**
   * The id of the input this label is meant to identify.
   */
  for: string;

  /**
   * Boolean used to determine whether or not the element is hidden visually. It will always be rendered for
   * accessibility reasons.
   */
  isVisuallyHidden?: boolean;

  /**
   * Boolean used to determine if text is completely opaque or not.
   */
  isDisabled?: boolean;

  /**
   * Boolean used to conditionally render asterisk. If the field being labelled is required, suffix label with an
   * asterisk.
   */
  isFieldRequired?: boolean;

  /**
   * The size of the label in pixels. Default is 12px.
   */
  size?: 12 | 14;
  /**
   * This `tx` prop can be used to style the `Text` container that surrounds the `children` prop. If the default asterisk color is insufficient (it will be the same color as the label text), you may style the asterisk, using the `Asterisk` property within the `tx` prop. Please be advised that the `Asterisk` styles will be placed directly on the `span` containing the asterisk so the type is **not** TXProp but React.CSSProperties.
   */
  tx?: TXProp & {
    Asterisk?: React.CSSProperties;
  };
}

export const LabelPrimitive = React.memo(
  ({
    children,
    for: htmlFor,
    isVisuallyHidden = false,
    isFieldRequired = false,
    size = 12,
    tx = {},
  }: LabelPrimitiveProps) => {
    const { Asterisk: asteriskStyles, ...containerStyles } = tx;

    const TheLabelElement = (
      <Text
        as="label"
        variant={`text-ui-${size}` as TextVariantName}
        htmlFor={htmlFor}
        tx={{ color: 'pigeon600', fontWeight: 'semibold', ...containerStyles }}
      >
        {children}

        {/* If a field is required, screen readers already announce that fact. An asterisk only supplies noise to them. */}
        {isFieldRequired ? (
          <span aria-hidden="true" style={{ ...asteriskStyles }}>
            {' '}
            *
          </span>
        ) : (
          ''
        )}
      </Text>
    );

    return isVisuallyHidden ? (
      <VisuallyHidden>{TheLabelElement}</VisuallyHidden>
    ) : (
      <>{TheLabelElement}</>
    );
  },
);

LabelPrimitive.displayName = 'LabelPrimitive';

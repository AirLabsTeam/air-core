import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box';
import { Text } from '../Text';
import { TXProp } from '..';

export type LabelSize = 'text-ui-12' | 'text-ui-14';

export type HTMLLabelProps = Omit<BoxProps<'label'>, 'as' | 'ref' | '__themeKey' | 'htmlFor'>;

export interface LabelPrimitiveProps extends Pick<BoxProps, 'children'>, HTMLLabelProps {
  /**
   * The id of the input this label is meant to identify.
   */
  for: string;
  /**
   * Boolean used to determine if text is completely opaque or not.
   */
  isDisabled?: boolean;
  /**
   * Boolean used to conditionally render asterisk. If the field being labelled is required, suffix label with an
   * asterisk.
   */
  showAsterisk?: boolean;
  /**
   * The size of the label in pixels. Default is 12px.
   */
  size?: LabelSize;
  /**
   * This `tx` prop can be used to style the `Text` container that surrounds the `children` prop. If the default asterisk color is insufficient (it will be the same color as the label text), you may style the asterisk, using the `Asterisk` property within the `tx` prop. Please be advised that the `Asterisk` styles will be placed directly on the `span` containing the asterisk so the type is **not** TXProp but React.CSSProperties.
   */
  tx?: TXProp & {
    Asterisk?: TXProp;
  };
}

export const LabelPrimitive = forwardRef<HTMLLabelElement, LabelPrimitiveProps>(
  (
    {
      children,
      showAsterisk = false,
      size = 'text-ui-12',
      tx = {},
      for: htmlFor,
      ...labelProps
    }: LabelPrimitiveProps,
    forwardedRef,
  ) => {
    const { Asterisk: asteriskStyles, ...containerStyles } = tx;

    return (
      <Text
        as="label"
        {...labelProps}
        variant={size}
        htmlFor={htmlFor}
        tx={{ color: 'pigeon600', fontWeight: 'semibold', mb: 6, ...containerStyles }}
        ref={forwardedRef}
      >
        {children}

        {/* If a field is required, screen readers already announce that fact. An asterisk only supplies noise to them. */}
        {showAsterisk ? (
          <Box as="span" aria-hidden="true" tx={asteriskStyles}>
            {' '}
            *
          </Box>
        ) : (
          ''
        )}
      </Text>
    );
  },
);

LabelPrimitive.displayName = 'LabelPrimitive';

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
   * accessibility reasons.
   */
  isVisuallyHidden?: boolean;

  /**
   * Booolean used to determine if text is completely opaque or not.
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
}

/**
 * @deprecated This component is no longer supported and will soon be removed. It will be replaced with a `LabelPrimitive` component.
 */
export const Label = ({
  children,
  className,
  for: htmlFor,
  isVisuallyHidden = false,
  isFieldRequired = false,
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

      {/* If a field is required, screen readers already announce that fact. An asterisk only supplies noise to them. */}
      {isFieldRequired ? <span aria-hidden="true"> *</span> : ''}
    </Text>
  );

  return isVisuallyHidden ? (
    <VisuallyHidden>{TheLabelElement}</VisuallyHidden>
  ) : (
    <>{TheLabelElement}</>
  );
};

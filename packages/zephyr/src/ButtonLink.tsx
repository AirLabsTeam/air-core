import { noop } from 'lodash';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from './Box';
import { Text } from './Text';
import { ButtonLinkVariantName, TextVariantName } from './theme';

type ButtonLinkSize = 'large' | 'medium' | 'small';

export interface ButtonLinkProps
  extends Pick<BoxProps<'button' | 'a'>, 'as' | 'children' | 'onClick' | 'tx'> {
  disabled?: boolean;
  size?: ButtonLinkSize;
  textVariant?: TextVariantName | TextVariantName[];
  variant?: ButtonLinkVariantName;
}

const LINK_BUTTON_TEXT_SIZE_MAP: { [key in ButtonLinkSize]: TextVariantName } = {
  large: 'text-ui-16',
  medium: 'text-ui-14',
  small: 'text-ui-12',
};

export const ButtonLink = ({
  as,
  children,
  disabled = false,
  onClick,
  size = 'medium',
  textVariant,
  tx,
  variant = 'button-link-blue',
}: ButtonLinkProps) => {
  const theme = useTheme();
  const buttonProps = as === 'button' ? { disabled } : {};

  return (
    <Box
      as={as}
      __baseStyles={{
        outline: 'none',
        background: 'transparent',
        p: 2,
        border: 0,
        borderRadius: 4,
        textDecoration: 'none',
        fontWeight: 'semibold',
        cursor: 'pointer',

        '&:hover': {
          textDecoration: 'underline',
        },

        '&:disabled, &.disabled': {
          textDecoration: 'none',
          cursor: 'not-allowed',
        },

        '&:focus-visible': {
          boxShadow: `0 0 0 3px ${theme.colors.focus}`,
        },
      }}
      className={disabled ? 'disabled' : ''}
      onClick={disabled ? noop : onClick}
      tx={tx}
      variant={variant}
      {...buttonProps}
    >
      <Text
        tx={{ color: 'inherit', fontWeight: 'inherit' }}
        variant={textVariant ?? LINK_BUTTON_TEXT_SIZE_MAP[size]}
      >
        {children}
      </Text>
    </Box>
  );
};

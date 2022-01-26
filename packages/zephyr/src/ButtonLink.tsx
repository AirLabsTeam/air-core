import { noop } from 'lodash';
import { forwardRefWithAs, PropsWithAs } from '@reach/utils';
import { Ref } from 'react';
import { useTheme } from 'styled-components';

import { Box, BoxStylingProps } from './Box';
import { Text } from './Text';
import { ButtonLinkVariantName, TextVariantName } from './theme';

type ButtonLinkSize = 'large' | 'medium' | 'small';

export type NonSemanticButtonLinkProps = Pick<BoxStylingProps, 'tx'> & {
  /** We need to define the `disabled` prop as it's not an HTML attribute for an anchor tag */
  disabled?: boolean;
  size?: ButtonLinkSize;
  textVariant?: TextVariantName | TextVariantName[];
  variant?: ButtonLinkVariantName;
};

export interface ButtonLinkProps extends PropsWithAs<'button', NonSemanticButtonLinkProps> {}

const LINK_BUTTON_TEXT_SIZE_MAP: { [key in ButtonLinkSize]: TextVariantName } = {
  large: 'text-ui-16',
  medium: 'text-ui-14',
  small: 'text-ui-12',
};

export const ButtonLink = forwardRefWithAs<NonSemanticButtonLinkProps, 'button'>(
  (
    {
      as = 'button',
      children,
      disabled = false,
      onClick,
      size = 'medium',
      textVariant,
      tx,
      variant = 'button-link-blue',
      ...restOfProps
    }: ButtonLinkProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();
    const buttonProps = as === 'button' ? { disabled } : {};

    return (
      <Box
        as={as}
        tx={{
          display: 'inline-block',
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
          ...tx,
        }}
        className={disabled ? 'disabled' : ''}
        ref={ref}
        onClick={disabled ? noop : onClick}
        variant={variant}
        {...buttonProps}
        {...restOfProps}
      >
        <Text
          tx={{ color: 'inherit', fontWeight: 'inherit' }}
          variant={textVariant ?? LINK_BUTTON_TEXT_SIZE_MAP[size]}
        >
          {children}
        </Text>
      </Box>
    );
  },
);

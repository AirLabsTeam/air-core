import { motion, useReducedMotion } from 'framer-motion';
import { rgba } from 'polished';
import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../Box';
import { Text } from '../Text';

export interface MenuDividerProps extends BoxProps {}

export const MenuDivider = ({ tx, ...restOfProps }: MenuDividerProps) => {
  return (
    <Box
      as="hr"
      tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, my: 8, ...tx }}
      {...restOfProps}
    />
  );
};

export type MenuListSize = 'small' | 'large';

export interface MenuListProps extends Pick<BoxProps, 'children' | 'tx'> {
  size?: MenuListSize;
}

export const MenuList = ({ children, tx, size = 'small', ...restOfProps }: MenuListProps) => {
  const shouldReduceMotion = useReducedMotion();
  const theme = useTheme();
  const isSmallSize = size === 'small';

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
      transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
      tx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        backgroundColor: 'white',
        width: isSmallSize ? 216 : 240,
        p: isSmallSize ? 6 : 8,
        outline: 'none',
        borderRadius: 4,
        boxShadow: `
          0px 2px 8px ${rgba(theme.colors.black, 0.2)}, 
          0px 1px 3px ${rgba(theme.colors.black, 0.15)}, 
          0px 0px 2px ${rgba(theme.colors.black, 0.25)}
        `,
        ...tx,
      }}
      {...restOfProps}
    >
      {children}
    </Box>
  );
};

export type MenuItemSize = 'small' | 'large';

export type MenuItemRenderProps = { children: ReactNode } | { label: string; description?: string };

export type MenuItemProps = Pick<BoxProps, 'tx'> & {
  divider?: boolean;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  shortcut?: string[];
  size?: MenuItemSize;
} & MenuItemRenderProps;

export const MenuItem = ({
  divider,
  leftAdornment,
  rightAdornment,
  shortcut,
  size = 'small',
  tx,
  ...restOfProps
}: MenuItemProps) => {
  const hasDescription = 'description' in restOfProps;
  const isSmallSize = size === 'small';
  const numberOfShortcutKeys = shortcut?.length ?? 0;

  return (
    <>
      <Box
        tx={{
          display: 'flex',
          alignItems: hasDescription ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          height: hasDescription ? 'auto' : isSmallSize ? 32 : 36,
          mb: divider ? 0 : 8,
          px: 6,
          py: hasDescription ? 6 : 0,
          border: 0,
          borderRadius: 4,
          color: 'pigeon700',
          textAlign: 'left',
          cursor: 'pointer',

          '&[data-selected]': { backgroundColor: 'pigeon050' },

          '&:hover': { backgroundColor: 'pigeon050' },

          '&:focus': { outline: 'none', backgroundColor: 'pigeon050' },

          '&:last-child': { mb: 0 },

          ...tx,
        }}
        {...restOfProps}
      >
        {leftAdornment && (
          <Box tx={{ flexShrink: 0, mr: 8, mt: hasDescription ? (isSmallSize ? 2 : 4) : 0 }}>
            {leftAdornment}
          </Box>
        )}

        <Box tx={{ flexGrow: 1 }}>
          {'children' in restOfProps ? (
            restOfProps.children
          ) : (
            <Box>
              <Text
                tx={{
                  color: 'inherit',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                variant={isSmallSize ? 'text-ui-14' : 'text-ui-16'}
              >
                {restOfProps.label}
              </Text>
              <Text
                tx={{ mt: 2, color: 'pigeon500' }}
                variant={isSmallSize ? 'text-ui-12' : 'text-ui-14'}
              >
                {restOfProps.description}
              </Text>
            </Box>
          )}
        </Box>

        {rightAdornment && (
          <Box tx={{ flexShrink: 0, ml: 8, mt: hasDescription ? (isSmallSize ? 2 : 4) : 0 }}>
            {rightAdornment}
          </Box>
        )}

        {shortcut && (
          <Box tx={{ flexShrink: 0, ml: 8 }}>
            {shortcut.map((key, index) => {
              const isLastKey = numberOfShortcutKeys - 1 === index;

              return (
                <>
                  <Text
                    as="kbd"
                    key={index}
                    tx={{ color: 'pigeon300', textTransform: 'lowercase' }}
                    variant="text-ui-12"
                  >
                    {key}
                  </Text>
                  {!isLastKey && (
                    <Text as="span" tx={{ color: 'pigeon300' }} variant="text-ui-12">
                      &nbsp;+&nbsp;
                    </Text>
                  )}
                </>
              );
            })}
          </Box>
        )}
      </Box>
      {divider && <MenuDivider />}
    </>
  );
};

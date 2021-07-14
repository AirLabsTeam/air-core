import { ReactNode } from 'react';

import { Box, BoxProps } from '../../Box';
import { Text } from '../../Text';
import { MenuSize } from './Menu';
import { MenuDivider } from './MenuDivider';
import { MenuItemDescription } from './MenuItemDescription';
import { MenuItemLabel } from './MenuItemLabel';

export type MenuItemRenderProps =
  | { children: ReactNode }
  | { label: ReactNode; description?: ReactNode };

export type MenuItemProps = Pick<BoxProps, 'onClick' | 'tx'> & {
  /**
   * Renders `<MenuDivider />` below the menu item.
   */
  hasDividerBottom?: boolean;

  /**
   * Renders `<MenuDivider />` above the menu item.
   */
  hasDividerTop?: boolean;

  /**
   * Displays an element on the left of `children` or `label.
   */
  leftAdornment?: ReactNode;

  /**
   * Displays an element on the right of `children` or `label.
   */
  rightAdornment?: ReactNode;

  /**
   * The `shortcut` prop will append the keys used to trigger the shortcut.
   */
  shortcut?: string[];

  /**
   * The `size` prop determines the height of the menu item and the spacing of the adornments.
   */
  size?: MenuSize;
} & MenuItemRenderProps;

export const MenuItem = ({
  hasDividerBottom,
  hasDividerTop,
  leftAdornment,
  rightAdornment,
  shortcut,
  size = 'small',
  ...restOfProps
}: MenuItemProps) => {
  const hasDescription = 'description' in restOfProps;
  const isSmallSize = size === 'small';
  const numberOfShortcutKeys = shortcut?.length ?? 0;

  return (
    <>
      {hasDividerTop && <MenuDivider tx={{ mt: 0 }} />}
      <Box
        __baseStyles={{
          display: 'flex',
          alignItems: hasDescription ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          height: hasDescription ? 'auto' : isSmallSize ? 32 : 36,
          mb: hasDividerBottom ? 0 : 8,
          px: 6,
          py: hasDescription ? 6 : 0,
          border: 0,
          borderRadius: 4,
          color: 'pigeon700',
          textAlign: 'left',
          cursor: 'pointer',

          '&[data-selected]': { backgroundColor: 'pigeon050', color: 'pigeon700' },

          '&:hover': { backgroundColor: 'pigeon050' },

          '&:focus': { outline: 'none', backgroundColor: 'pigeon050' },

          '&:last-child': { mb: 0 },
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
              <MenuItemLabel variant={isSmallSize ? 'text-ui-14' : 'text-ui-16'}>
                {restOfProps.label}
              </MenuItemLabel>
              <MenuItemDescription variant={isSmallSize ? 'text-ui-12' : 'text-ui-14'}>
                {restOfProps.description}
              </MenuItemDescription>
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
      {hasDividerBottom && <MenuDivider tx={{ mb: 8 }} />}
    </>
  );
};

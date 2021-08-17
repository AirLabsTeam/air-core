import React, { ReactNode, FC, ComponentProps } from 'react';
import { rgba } from 'polished';
import { useTheme } from 'styled-components';
import { DropdownMenuItem, Root, Group, Content } from '@radix-ui/react-dropdown-menu';

import { Box, BoxProps } from '../../Box';
import { Text } from '../../Text';
import { MenuSize } from './Menu';
import { MenuItemDivider } from './MenuItemDivider';
import { MenuItemDescription } from './MenuItemDescription';
import { MenuItemLabel } from './MenuItemLabel';

export type MenuItemRenderProps =
  | { children: ReactNode }
  | { label: ReactNode; description?: ReactNode };

export type MenuItemProps = {
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

  /**
   * Event handler called when the user selects an item (via mouse of keyboard).
   * Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item.
   */
  onSelect?: (event: Event) => void;

  /**
   * Prevents item selection.
   */
  disabled?: boolean;

  /**
   * Allows the user to extend the items styles.
   */
  tx?: BoxProps['tx'];

  subOptions?: (MenuItemProps & MenuItemRenderProps & { id?: string })[];
} & MenuItemRenderProps;

export const MenuItem = ({
  hasDividerBottom,
  hasDividerTop,
  leftAdornment,
  rightAdornment,
  shortcut,
  size = 'small',
  onSelect,
  tx,
  disabled,
  subOptions,
  ...renderProps
}: MenuItemProps) => {
  const hasDescription = 'description' in renderProps;
  const isSmallSize = size === 'small';
  const numberOfShortcutKeys = shortcut?.length ?? 0;
  const theme = useTheme();

  return (
    <>
      {hasDividerTop && <MenuItemDivider isTop />}
      <Box
        as={DropdownMenuItem as FC<Omit<ComponentProps<typeof DropdownMenuItem>, 'as' | 'ref'>>}
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
        tx={tx}
        disabled={disabled}
        onSelect={onSelect}
      >
        {leftAdornment && (
          <Box tx={{ flexShrink: 0, mr: 8, mt: hasDescription ? (isSmallSize ? 2 : 4) : 0 }}>
            {leftAdornment}
          </Box>
        )}

        <Box tx={{ flexGrow: 1 }}>
          {'children' in renderProps ? (
            renderProps.children
          ) : (
            <Box>
              <MenuItemLabel variant={isSmallSize ? 'text-ui-14' : 'text-ui-16'}>
                {renderProps.label}
              </MenuItemLabel>
              <MenuItemDescription variant={isSmallSize ? 'text-ui-12' : 'text-ui-14'}>
                {renderProps.description}
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
      {hasDividerBottom && <MenuItemDivider />}
      {subOptions && (
        <Root>
          <Box
            as={Content as FC<Omit<ComponentProps<typeof Content>, 'as' | 'ref'>>}
            tx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'stretch',
              backgroundColor: 'white',
              width: size === 'small' ? 216 : 240,
              p: size === 'small' ? 6 : 8,
              outline: 'none',
              borderRadius: 4,
              boxShadow: `
                0px 2px 8px ${rgba(theme.colors.black, 0.2)}, 
                0px 1px 3px ${rgba(theme.colors.black, 0.15)}, 
                0px 0px 2px ${rgba(theme.colors.black, 0.25)}
              `,
            }}
          >
            <Box
              as={Group as FC<Omit<ComponentProps<typeof Group>, 'as' | 'ref'>>}
              tx={{
                outline: 'none',
                p: 0,
                border: 0,
                fontSize: 'inherit',
                background: 'transparent',
                whiteSpace: 'initial',
                color: 'inherit',
              }}
            >
              {subOptions.map((option, index) => (
                <MenuItem
                  data-testid={option.id}
                  onSelect={(event: Event) => event.stopPropagation()}
                  key={index}
                  size={size}
                  {...option}
                />
              ))}
            </Box>
          </Box>
        </Root>
      )}
    </>
  );
};

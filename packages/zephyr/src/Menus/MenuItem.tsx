import { MenuItem as ReachMenuItem, MenuItemProps as ReachMenuItemProps } from '@reach/menu-button';
import React, { FC } from 'react';

import { Box, BoxProps } from '../Box';
import { Text } from '../Text';
import { SVGComponent } from '../shared';

export type MenuItemVariant = 'large' | 'small';

export interface MenuItemProps
  extends Pick<ReachMenuItemProps, 'onSelect'>,
    Pick<BoxProps, 'children' | 'tx'> {
  /**
   * The icon that is rendered on the left of the menu option.
   */
  icon?: SVGComponent;
  /**
   * The label for the menu item.
   */
  label?: string;
  /**
   * The description for the menu item.
   */
  description?: string;
  /**
   * This prop will show the shortcuts necessary to trigger this menu option action.
   */
  shortcut?: string[];
  /**
   * The size variant for the menu item.
   */
  variant?: MenuItemVariant;
}

export const MenuItem = ({
  children,
  description,
  icon,
  label,
  onSelect,
  shortcut,
  tx,
  variant = 'small',
  ...restOfProps
}: MenuItemProps) => {
  const numberOfShortcutKeys = shortcut?.length ?? 0;
  const hasDescription = !!description;
  const isSmallVariant = variant === 'small';

  return (
    <Box
      as={ReachMenuItem as FC<Omit<ReachMenuItemProps, 'as'>>}
      onSelect={onSelect}
      tx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: hasDescription ? 'auto' : isSmallVariant ? 32 : 36,
        mb: 8,
        px: 6,
        py: hasDescription ? 6 : 0,
        borderRadius: 4,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: 'pigeon050',
        },

        '&:last-child': {
          mb: 0,
        },

        ...tx,
      }}
      {...restOfProps}
    >
      <Box tx={{ display: 'flex', alignItems: hasDescription ? 'flex-start' : 'center' }}>
        {icon && (
          <Box
            as={icon}
            tx={{
              flexShrink: 0,
              width: 16,
              mr: 8,
              mt: hasDescription ? (isSmallVariant ? 3 : 4) : 0,
              color: 'pigeon500',
            }}
          />
        )}
        {children ?? (
          <Box>
            <Text
              tx={{
                color: 'pigeon700',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              variant={isSmallVariant ? 'text-ui-14' : 'text-ui-16'}
            >
              {label}
            </Text>
            <Text
              tx={{ mt: 2, color: 'pigeon500' }}
              variant={isSmallVariant ? 'text-ui-12' : 'text-ui-14'}
            >
              {description}
            </Text>
          </Box>
        )}
      </Box>

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
  );
};

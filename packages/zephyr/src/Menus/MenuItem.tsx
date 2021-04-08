import { MenuItem as ReachMenuItem, MenuItemProps as ReachMenuItemProps } from '@reach/menu-button';
import React, { FC } from 'react';

import { Box, BoxProps } from '../Box';
import { Text } from '../Text';
import { SVGComponent } from '../shared';

export interface MenuItemProps
  extends Pick<ReachMenuItemProps, 'onSelect'>,
    Pick<BoxProps, 'children' | 'tx'> {
  icon?: SVGComponent;
  shortcut?: string[];
}

export const MenuItem = ({ children, icon, onSelect, shortcut, tx }: MenuItemProps) => {
  const numberOfShortcutKeys = shortcut?.length ?? 0;

  return (
    <Box
      as={ReachMenuItem as FC<Omit<ReachMenuItemProps, 'as'>>}
      onSelect={onSelect}
      tx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 32,
        mb: 8,
        px: 6,
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
    >
      <Box tx={{ display: 'flex', alignItems: 'center' }}>
        {icon && <Box as={icon} tx={{ width: 16, mr: 8, color: 'pigeon500' }}></Box>}
        <Text
          tx={{
            color: 'pigeon700',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          variant="text-ui-14"
        >
          {children}
        </Text>
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

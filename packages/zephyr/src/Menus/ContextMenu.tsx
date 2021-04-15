import { ChevronRight as ChevronRightIcon } from '@air/icons';
import React from 'react';
import { Item, Menu, Submenu } from 'react-contexify';

import { Box, BoxProps } from '../Box';
import { MenuList, MenuItem, MenuItemRenderProps, MenuItemProps } from './Menu';

export type ContextMenuOption = Pick<
  MenuItemProps,
  'divider' | 'leftAdornment' | 'rightAdornment' | 'shortcut' | 'tx'
> &
  MenuItemRenderProps;

export interface ContextMenuProps extends Pick<BoxProps, 'tx'> {
  id: string;
  options: (ContextMenuOption & {
    options: ContextMenuOption[];
  })[];
  size?: 'small' | 'large';
}

export const ContextMenu = ({ id, options, size = 'small' }: ContextMenuProps) => {
  return (
    <>
      <Box
        as={Menu}
        animation={false}
        id={id}
        tx={{
          zIndex: 9999,
          position: 'fixed',

          '.react-contexify__item': {
            position: 'relative',

            '&:hover, &.react-contexify__submenu--is-open': {
              '> .react-contexify__submenu': {
                pointerEvents: 'initial',
                opacity: 1,
              },
            },
          },

          '.react-contexify__item__content': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '100%',
          },

          '.react-contexify__submenu': {
            position: 'absolute',
            top: 0,
            pointerEvents: 'none',
            opacity: 0,
          },
        }}
      >
        <MenuList size={size}>
          {options.map((option, index) => {
            const hasDescription = !!option?.description;

            if (option.options) {
              const { options: subOptions, ...restOfOption } = option;

              return (
                <Submenu
                  arrow={false}
                  label={
                    <MenuItem
                      {...restOfOption}
                      rightAdornment={
                        <Box as={ChevronRightIcon} tx={{ display: 'block', width: 16 }} />
                      }
                    />
                  }
                >
                  <MenuList>
                    {subOptions?.map((subOption, index) => {
                      const hasDescription = !!subOption?.description;

                      return (
                        <MenuItem
                          {...subOption}
                          // @ts-ignore
                          as={Item}
                          key={index}
                          tx={{
                            '.react-contexify__item__content': {
                              alignItems: hasDescription ? 'flex-start' : 'center',
                            },
                            ...subOption.tx,
                          }}
                        />
                      );
                    })}
                  </MenuList>
                </Submenu>
              );
            }

            return (
              <MenuItem
                {...option}
                // @ts-ignore
                as={Item}
                key={index}
                size={size}
                tx={{
                  position: 'relative',
                  py: hasDescription ? 6 : 0,

                  '.react-contexify__item__content': {
                    alignItems: hasDescription ? 'flex-start' : 'center',
                  },

                  ...option.tx,
                }}
              />
            );
          })}
        </MenuList>
      </Box>
    </>
  );
};

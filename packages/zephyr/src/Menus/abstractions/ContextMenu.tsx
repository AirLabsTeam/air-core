import { ChevronRight as ChevronRightIcon } from '@air/icons';
import React from 'react';
import {
  Item as ContexifyItem,
  ItemProps as ContexifyItemProps,
  Menu as ContexifyMenu,
  Submenu as ContexifySubmenu,
} from 'react-contexify';

import { Box, BoxProps } from '../../Box';
import { Menu } from '../components/Menu';
import { MenuItem, MenuItemRenderProps, MenuItemProps } from '../components/MenuItem';

export type ContextMenuOption = Pick<
  MenuItemProps,
  'divider' | 'leftAdornment' | 'rightAdornment' | 'shortcut' | 'tx'
> &
  MenuItemRenderProps &
  Omit<ContexifyItemProps, 'children' | 'onSelect'>;

export interface ContextMenuProps extends Pick<BoxProps, 'tx'> {
  id: string;
  options: (ContextMenuOption & {
    options?: ContextMenuOption[];
  })[];
  showOverlay?: boolean;
  size?: 'small' | 'large';
}

export const ContextMenu = ({
  id,
  options,
  showOverlay = false,
  size = 'small',
}: ContextMenuProps) => {
  return (
    <>
      <Box
        as={ContexifyMenu}
        animation={false}
        id={id}
        tx={{
          zIndex: 9999,
          position: 'fixed',

          '.react-contexify__item': {
            position: 'relative',
            outline: 'none',

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
        {/* This overlay is conditional rendered based on if `showOverlay` prop is passed and it'll apply a transparent div over the entire screen to prevent the user from being able to right click on anything else while the menu is opened. */}
        {showOverlay && (
          <Box
            tx={{
              position: 'fixed',
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'transparent',
            }}
          />
        )}

        <Menu size={size} tx={{ position: 'relative', zIndex: 9999 }}>
          {options.map((option, index) => {
            const hasDescription = 'description' in option;

            if (option.options) {
              const { options: subOptions, ...restOfOption } = option;

              return (
                <ContexifySubmenu
                  arrow={false}
                  label={
                    <MenuItem
                      {...restOfOption}
                      tx={{ flexGrow: 1, ...restOfOption.tx }}
                      rightAdornment={
                        <Box as={ChevronRightIcon} tx={{ display: 'block', width: 16 }} />
                      }
                    />
                  }
                >
                  <Menu>
                    {subOptions?.map((subOption, index) => {
                      const hasDescription = 'description' in subOption;

                      return (
                        <MenuItem
                          {...subOption}
                          // @ts-ignore
                          as={ContexifyItem}
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
                  </Menu>
                </ContexifySubmenu>
              );
            }

            return (
              <MenuItem
                {...option}
                // @ts-ignore
                as={ContexifyItem}
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
        </Menu>
      </Box>
    </>
  );
};

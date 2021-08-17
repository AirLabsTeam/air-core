import {
  Menu as ReachMenu,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  MenuItemProps as ReachMenuItemProps,
  MenuPopover as ReachMenuPopover,
  MenuItems as ReachMenuItems,
  MenuItemsProps as ReachMenuItemsProps,
} from '@reach/menu-button';
import { PRect } from '@reach/rect';
import { AnimatePresence } from 'framer-motion';
import { isUndefined, noop } from 'lodash';
import React, { cloneElement, FC, MouseEvent, ReactElement, ReactNode, useEffect } from 'react';
import { usePrevious } from 'react-use';

import { Box, BoxProps } from '../../Box';
import { Menu, MenuProps } from '../components/Menu';
import { MenuItem, MenuItemRenderProps, MenuItemProps } from '../components/MenuItem';
import { getPosition } from '../utils/getPosition';

interface DropdownMenuStateManagerProps {
  children: ReactNode;
  isExpanded: boolean;
  onChange: (isExpanded: boolean) => void;
}

/**
 * This component fires off `onChange` when `isExpanded` state is changed.
 */
const DropdownMenuStateManager = ({
  children,
  isExpanded,
  onChange,
}: DropdownMenuStateManagerProps) => {
  const isPreviouslyExpanded = usePrevious(isExpanded);

  useEffect(() => {
    if (isExpanded !== isPreviouslyExpanded && !isUndefined(isPreviouslyExpanded)) {
      onChange(isExpanded);
    }
  }, [isExpanded, onChange, isPreviouslyExpanded]);

  return children as ReactElement;
};

export type DropdownMenuOption = Pick<
  MenuItemProps,
  'hasDividerBottom' | 'hasDividerTop' | 'leftAdornment' | 'rightAdornment' | 'shortcut' | 'tx'
> &
  MenuItemRenderProps &
  Omit<ReachMenuItemProps, 'children'> & {
    id?: string;
  };

export interface DropdownMenuProps
  extends Pick<BoxProps, 'tx'>,
    Pick<MenuProps, 'animation' | 'size'> {
  /**
   * Children for the dropdown menu that is rendered below the options.
   */
  childrenBottom?: ReactNode;

  /**
   * Children for the dropdown menu that is rendered below the options.
   */
  childrenTop?: ReactNode;

  /**
   * The test id for the dropdown menu list.
   */
  ['data-testid']?: string;

  /**
   * The `hasOverlay` props determines whether a transparent `div` is added to the DOM
   * to prevent users from hovering / clicking with other elements on the page while
   * the menu is opened.
   */
  hasOverlay?: boolean;

  /**
   * The `offset` allows you to control the distance between the menu and the trigger.
   */
  offset?: number;
  options: DropdownMenuOption[];

  /**
   * The `onChange` prop returns the new state of the dropdown menu.
   */
  onChange?: (isExpanded: boolean) => void;

  /**
   * The trigger that will open the menu.
   */
  trigger: ReactNode;
  /**
   * The `isPortal` prop allows you to control whether the menu uses a portal.
   */
  isPortal: boolean;
}

export const DropdownMenu = ({
  animation,
  childrenBottom,
  childrenTop,
  hasOverlay = true,
  offset = 4,
  options,
  onChange = noop,
  size = 'small',
  ['data-testid']: testId,
  trigger,
  isPortal,
  tx,
}: DropdownMenuProps) => {
  return (
    <ReachMenu>
      {({ isExpanded }) => (
        <DropdownMenuStateManager isExpanded={isExpanded} onChange={onChange}>
          <>
            {/* This overlay is conditional rendered based on if `hasOverlay` prop is passed and it'll apply a transparent div over the entire screen to prevent the user from being able to right click on anything else while the menu is opened. */}
            {hasOverlay && (
              <Box
                tx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: isExpanded ? 'block' : 'none',
                  backgroundColor: 'transparent',
                }}
              />
            )}
            {trigger &&
              cloneElement(trigger as ReactElement<any>, {
                as: ReachMenuButton,
              })}
            <Box
              portal={isPortal}
              as={ReachMenuPopover}
              position={(targetRect?: PRect | null, popoverRect?: PRect | null) =>
                getPosition(targetRect, popoverRect, offset)
              }
              tx={{ display: 'block', pointerEvents: isExpanded ? 'auto' : 'none' }}
            >
              <AnimatePresence>
                {isExpanded && (
                  <Menu animation={animation} data-testid={testId} size={size} tx={tx}>
                    {childrenTop}
                    <Box
                      as={ReachMenuItems as FC<ReachMenuItemsProps>}
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
                      {options.map((option, index) => {
                        return (
                          <MenuItem
                            // @ts-ignore
                            as={ReachMenuItem as FC<ReachMenuItemProps>}
                            data-testid={option.id}
                            onClick={(event: MouseEvent) => event.stopPropagation()}
                            key={index}
                            size={size}
                            {...option}
                          />
                        );
                      })}
                    </Box>
                    {childrenBottom}
                  </Menu>
                )}
              </AnimatePresence>
            </Box>
          </>
        </DropdownMenuStateManager>
      )}
    </ReachMenu>
  );
};

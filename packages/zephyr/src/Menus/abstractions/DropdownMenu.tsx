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
import React, { cloneElement, FC, ReactElement, ReactNode, useEffect } from 'react';
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

export interface DropdownMenuProps extends Pick<BoxProps, 'tx'>, Pick<MenuProps, 'size'> {
  /**
   * Children for the dropdown menu that is rendered below the options.
   */
  childrenBottom?: ReactNode;

  /**
   * Children for the dropdown menu that is rendered below the options.
   */
  childrenTop?: ReactNode;

  /**
   * The `offset` allows you to control the distance between the menu and the trigger.
   */
  offset?: number;
  options: DropdownMenuOption[];

  /**
   * The `onChange` prop returns the new state of the dropdown menu.
   */
  onChange: (isExpanded: boolean) => void;

  /**
   * The trigger that will open the menu.
   */
  trigger: ReactNode;
}

export const DropdownMenu = ({
  childrenBottom,
  childrenTop,
  offset = 4,
  options,
  onChange = noop,
  size = 'small',
  trigger,
  tx,
}: DropdownMenuProps) => {
  return (
    <ReachMenu>
      {({ isExpanded }) => (
        <DropdownMenuStateManager isExpanded={isExpanded} onChange={onChange}>
          {trigger &&
            cloneElement(trigger as ReactElement<any>, {
              as: ReachMenuButton,
            })}
          <Box
            as={ReachMenuPopover}
            position={(targetRect?: PRect | null, popoverRect?: PRect | null) =>
              getPosition(targetRect, popoverRect, offset)
            }
            tx={{ zIndex: 9999, display: 'block', pointerEvents: isExpanded ? 'auto' : 'none' }}
          >
            <AnimatePresence>
              {isExpanded && (
                <Menu size={size} tx={tx}>
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
        </DropdownMenuStateManager>
      )}
    </ReachMenu>
  );
};

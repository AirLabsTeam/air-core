import { AnimatePresence, Variant } from 'framer-motion';
import { noop } from 'lodash';
import { ReactNode, useState, useCallback, useMemo, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Portal, Trigger, Content, Root } from '@radix-ui/react-dropdown-menu';
import { isNull } from 'lodash';
import { rgba } from 'polished';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../../Box';
import { RadixMenuItem, RadixMenuItemProps } from '../components/RadixMenuItem';
import { MenuSize } from '../../Menus/components/Menu';
import { TXProp } from '../../theme';
import { MenuVariantName } from '../../theme/variants/menus';

export type RadixDropdownMenuOption = RadixMenuItemProps & {
  id?: string;
};

interface MenuProps extends Pick<BoxProps, 'children' | 'tx'> {
  /**
   * The `animation` prop allows you to define the animation for each of the 4 animation states.
   */
  animation?: {
    animate: Variant;
    exit: Variant;
    initial: Variant;
  } | null;
  /**
   * The `size` prop determines the padding and default width of the menu.
   */
  size?: MenuSize;
}

export interface RadixDropdownMenuProps extends Pick<MenuProps, 'animation' | 'size'> {
  tx?: TXProp;
  /**
   * Children for the dropdown menu that is rendered below the options.
   */
  childrenBottom?: ReactNode;

  /**
   * Children for the dropdown menu that is rendered above the options.
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
  options: RadixDropdownMenuOption[];

  /**
   * The `onChange` prop returns the new state of the dropdown menu.
   */
  onChange?: (isExpanded: boolean) => void;

  /**
   * The trigger that will open the menu.
   */
  trigger: ReactNode;

  variant?: MenuVariantName;

  subOptionsTx?: TXProp;
}

export const RadixDropdownMenu = memo(
  ({
    animation,
    childrenBottom,
    childrenTop,
    hasOverlay = true,
    offset = 4,
    options,
    onChange = noop,
    size = 'small',
    subOptionsTx,
    variant = 'bright',
    ['data-testid']: testId,
    trigger,
    tx,
  }: RadixDropdownMenuProps) => {
    const [isExpanded, setExpanded] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    const theme = useTheme();

    const handleChange = useCallback(
      (isOpen: boolean) => {
        if (onChange) {
          onChange(isOpen);
        }
        setExpanded(isOpen);
      },
      [onChange],
    );

    const defaultMenuAnimation = useMemo(
      () => ({
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : -12,
        },
        initial: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : -12,
        },
      }),
      [shouldReduceMotion],
    );

    return (
      <Root
        onOpenChange={handleChange}
        modal={false}
        dir="ltr"
        // `dir` must be provided to in order to prevent Radix from kicking a
        // looping useDirection hook which clogs the JS thread on browser.
        // @see https://github.com/radix-ui/primitives/issues/749
      >
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
        <Trigger asChild>{trigger}</Trigger>
        <AnimatePresence>
          <Portal>
            <Content asChild sideOffset={offset} align="start">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                variants={isNull(animation) ? undefined : defaultMenuAnimation}
              >
                <Box
                  data-testid={testId}
                  tx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                    backgroundColor: variant === 'dark' ? 'black' : 'white',
                    width: size === 'small' ? 216 : 240,
                    p: size === 'small' ? 6 : 8,
                    outline: 'none',
                    borderRadius: 4,
                    boxShadow: `
                  0px 2px 8px ${rgba(theme.colors.black, 0.2)},
                  0px 1px 3px ${rgba(theme.colors.black, 0.15)},
                  0px 0px 2px ${rgba(theme.colors.black, 0.25)}
                `,
                    ...tx,
                    ['.radix-menu-group']: {
                      outline: 'none',
                      p: 0,
                      border: 0,
                      fontSize: 'inherit',
                      background: 'transparent',
                      whiteSpace: 'initial',
                      color: 'inherit',
                    },
                  }}
                >
                  {childrenTop}
                  {options.map((option, index) => {
                    return (
                      <RadixMenuItem
                        data-testid={option.id}
                        onClick={(event) => event.stopPropagation()}
                        variant={variant}
                        key={index}
                        size={size}
                        subOptionsTx={subOptionsTx}
                        {...option}
                      />
                    );
                  })}
                  {childrenBottom}
                </Box>
              </motion.div>
            </Content>
          </Portal>
        </AnimatePresence>
      </Root>
    );
  },
);

RadixDropdownMenu.displayName = 'RadixDropdownMenu';

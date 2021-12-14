import { ReactNode, memo, useCallback, useMemo } from 'react';
import { rgba } from 'polished';
import { Item, Root, Content, TriggerItem } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from '@air/icons';
import { useTheme } from 'styled-components';

import { Box, BoxProps } from '../../Box';
import { Text } from '../../Text';
import { MenuItemDescription } from '../../Menus/components/MenuItemDescription';
import { MenuItemLabel } from '../../Menus/components/MenuItemLabel';
import { MenuSize } from '../../Menus/components/Menu';
import { MenuVariantName } from '../../theme/variants/menus';
import { RadixMenuItemDivider } from './RadixMenuItemDivider';

export type RadixMenuItemRenderProps =
  | { children: ReactNode }
  | { label: ReactNode; description?: ReactNode }
  | { title: string };

export type RadixMenuItemProps = Pick<BoxProps, 'tx' | 'id' | 'onClick'> & {
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
  onClick?: (event: Event) => void;
  onSelect?: () => void;

  /**
   * Prevents item selection.
   */
  disabled?: boolean;

  /**
   * Defaults to value of `id`
   */
  ['data-testid']?: string;

  variant?: MenuVariantName;

  subOptions?: (RadixMenuItemProps & RadixMenuItemRenderProps & { id?: string })[];
} & RadixMenuItemRenderProps;

export const RadixMenuItem = memo(
  ({
    hasDividerBottom,
    hasDividerTop,
    leftAdornment,
    rightAdornment,
    shortcut,
    size = 'small',
    onClick,
    onSelect,
    tx,
    disabled,
    subOptions,
    variant,
    id,
    'data-testid': testId,
    ...renderProps
  }: RadixMenuItemProps) => {
    const hasDescription = 'description' in renderProps;
    const isSmallSize = size === 'small';
    const numberOfShortcutKeys = shortcut?.length ?? 0;
    const theme = useTheme();

    const menuItemStyle = useMemo(
      () => ({
        mb: hasDividerBottom ? 0 : 8,

        '&:last-child': {
          mb: 0,
        },

        ['.radix-menu-item']: {
          display: 'flex',
          alignItems: hasDescription ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          height: hasDescription ? 'auto' : isSmallSize ? 32 : 36,
          px: 6,
          py: hasDescription ? 6 : 0,
          border: 0,
          borderRadius: 4,
          color: variant === 'dark' ? 'pigeon100' : 'pigeon700',
          textAlign: 'left',
          cursor: 'pointer',

          '&[data-selected], &:active': {
            backgroundColor: variant === 'dark' ? 'pigeon800' : 'pigeon050',
            color: variant === 'dark' ? 'pigeon100' : 'pigeon700',
          },

          '&:hover': {
            backgroundColor: variant === 'dark' ? 'pigeon800' : 'pigeon050',
            color: variant === 'dark' ? 'white' : undefined,
          },

          '&:focus': {
            outline: 'none',
            backgroundColor: variant === 'dark' ? 'pigeon700' : 'pigeon050',
          },
          ...tx,
        },
      }),
      [hasDescription, hasDividerBottom, isSmallSize, tx, variant],
    );

    const renderChildren = useCallback(() => {
      if ('children' in renderProps) {
        return renderProps.children;
      }

      if ('label' in renderProps) {
        return (
          <Box>
            <MenuItemLabel variant={isSmallSize ? 'text-ui-14' : 'text-ui-16'}>
              {renderProps.label}
            </MenuItemLabel>
            <MenuItemDescription
              variant={isSmallSize ? 'text-ui-12' : 'text-ui-14'}
              tx={variant === 'dark' ? { color: 'pigeon100' } : undefined}
            >
              {renderProps.description}
            </MenuItemDescription>
          </Box>
        );
      }
      return null;
    }, [isSmallSize, renderProps, variant]);

    const menuItemContent = useMemo(
      () => (
        <>
          {leftAdornment && (
            <Box tx={{ flexShrink: 0, mr: 8, mt: hasDescription ? (isSmallSize ? 2 : 4) : 0 }}>
              {leftAdornment}
            </Box>
          )}

          <Box tx={{ flexGrow: 1 }}>{renderChildren()}</Box>

          {rightAdornment ||
            (!!subOptions && subOptions.length && (
              <Box
                tx={{
                  flexShrink: 0,
                  ml: 8,
                  ...(!rightAdornment
                    ? {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        height: '100%',
                      }
                    : {
                        mt: hasDescription ? (isSmallSize ? 2 : 4) : 0,
                      }),
                }}
              >
                {rightAdornment ? rightAdornment : <Box as={ChevronRight} tx={{ height: 16 }} />}
              </Box>
            ))}

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
        </>
      ),
      [
        subOptions,
        hasDescription,
        isSmallSize,
        leftAdornment,
        numberOfShortcutKeys,
        renderChildren,
        rightAdornment,
        shortcut,
      ],
    );

    if ('title' in renderProps) {
      return (
        <Text
          tx={{
            marginTop: 10,
            marginBottom: 8,
            paddingX: size === 'small' ? 6 : 8,
            color: 'pigeon500',
            fontWeight: 'bold',

            '&:not(:first-child)': {
              marginTop: 12,
            },
          }}
          variant="text-ui-12-uppercase"
        >
          {renderProps.title}
        </Text>
      );
    }

    if (!!subOptions && subOptions.length) {
      return (
        <Box tx={menuItemStyle}>
          <Root>
            {hasDividerTop && <RadixMenuItemDivider isTop />}
            <TriggerItem className="radix-menu-item" disabled={disabled}>
              {menuItemContent}
            </TriggerItem>
            {hasDividerBottom && <RadixMenuItemDivider />}
            <Content>
              <Box
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
                }}
              >
                {subOptions.map((option, index) => (
                  <RadixMenuItem
                    data-testid={option.id}
                    onClick={(event) => event.stopPropagation()}
                    key={index}
                    size={size}
                    variant={variant}
                    {...option}
                  />
                ))}
              </Box>
            </Content>
          </Root>
        </Box>
      );
    }

    return (
      <Box tx={menuItemStyle} {...renderProps}>
        {hasDividerTop && <RadixMenuItemDivider variant={variant} isTop />}
        <Item
          data-testid={testId ?? id}
          id={id}
          className="radix-menu-item"
          disabled={disabled}
          onSelect={onClick ?? onSelect}
        >
          {menuItemContent}
        </Item>
        {hasDividerBottom && <RadixMenuItemDivider variant={variant} />}
      </Box>
    );
  },
);

RadixMenuItem.displayName = 'RadixMenuItem';

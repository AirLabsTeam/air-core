import React, { ReactNode } from 'react';

import { Box, BoxProps } from '../../Box';
import { Button } from '../../Button';
import { Text } from '../../Text';
import { ActionSheetDivider } from './ActionSheetDivider';

export type ActionSheetItemRenderProps =
  | { children: ReactNode }
  | { label: ReactNode; description?: ReactNode };

export type ActionSheetItemProps = Pick<
  BoxProps<'button'>,
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'tx'
> & {
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
} & ActionSheetItemRenderProps;

export const ActionSheetItem = ({
  hasDividerBottom,
  hasDividerTop,
  leftAdornment,
  rightAdornment,
  tx,
  ...restOfProps
}: ActionSheetItemProps) => {
  const hasDescription = 'description' in restOfProps;

  return (
    <>
      {hasDividerTop && <ActionSheetDivider />}
      <Button
        tx={{
          display: 'flex',
          alignItems: hasDescription ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          width: '100%',
          height: hasDescription ? 'auto' : 36,
          mb: hasDividerBottom ? 0 : 8,
          px: 8,
          py: hasDescription ? 6 : 0,
          border: 0,
          borderRadius: 4,
          color: 'pigeon700',
          fontWeight: 'regular',
          textAlign: 'left',
          cursor: 'pointer',

          '&:hover': { backgroundColor: 'pigeon050' },

          '&:focus': { outline: 'none', backgroundColor: 'pigeon050' },

          '&:last-child': { mb: 0 },

          ...tx,
        }}
        variant="button-unstyled"
        {...restOfProps}
      >
        {leftAdornment && (
          <Box tx={{ flexShrink: 0, mr: 8, mt: hasDescription ? 4 : 0 }}>{leftAdornment}</Box>
        )}

        <Box tx={{ flexGrow: 1 }}>
          {'children' in restOfProps ? (
            restOfProps.children
          ) : (
            <Box>
              <Text
                tx={{
                  color: 'inherit',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                variant="text-ui-16"
              >
                {restOfProps.label}
              </Text>
              <Text tx={{ mt: 2, color: 'pigeon500' }} variant="text-ui-14">
                {restOfProps.description}
              </Text>
            </Box>
          )}
        </Box>

        {rightAdornment && (
          <Box tx={{ flexShrink: 0, ml: 8, mt: hasDescription ? 4 : 0 }}>{rightAdornment}</Box>
        )}
      </Button>
      {hasDividerBottom && <ActionSheetDivider />}
    </>
  );
};

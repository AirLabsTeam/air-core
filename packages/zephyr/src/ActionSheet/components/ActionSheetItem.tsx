import React, { ReactNode } from 'react';
import { Box } from '../../Box';
import { Button, ButtonProps } from '../../Button';
import { ActionSheetDescription } from './ActionSheetDescription';
import { ActionSheetDivider } from './ActionSheetDivider';
import { ActionSheetLabel } from './ActionSheetLabel';

export type ActionSheetItemChildrenProps = {
  children: ReactNode;
};

export type ActionSheetItemOptionsProps = {
  label: ReactNode;
  description?: ReactNode;
};

export type ActionSheetItemProps = Pick<ButtonProps, 'tx'> & {
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
   * `onSelect` event for when the user clicks on the button
   */
  onSelect: ButtonProps['onClick'];
} & (ActionSheetItemChildrenProps | ActionSheetItemOptionsProps);

export const ActionSheetItem = ({
  hasDividerBottom,
  hasDividerTop,
  leftAdornment,
  onSelect,
  rightAdornment,
  tx,
  ...restOfProps
}: ActionSheetItemProps) => {
  const hasDescription = 'description' in restOfProps;

  return (
    <>
      {hasDividerTop && <ActionSheetDivider />}
      <Button
        onClick={onSelect}
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

          '&:focus-visible': { outline: 'none', backgroundColor: 'pigeon050' },

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
              <ActionSheetLabel>{restOfProps.label}</ActionSheetLabel>
              <ActionSheetDescription>{restOfProps.description}</ActionSheetDescription>
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

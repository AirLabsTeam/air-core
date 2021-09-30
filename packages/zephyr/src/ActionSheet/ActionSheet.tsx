import { DialogContent } from '@reach/dialog';
import { noop } from 'lodash';
import { MouseEvent, ReactNode } from 'react';

import { Box } from '../Box';
import { ActionSheetContainer } from './components/ActionSheetContainer';
import { ActionSheetHeader } from './components/ActionSheetHeader';
import { ActionSheetItem, ActionSheetItemProps } from './components/ActionSheetItem';
import { ActionSheetOverlay } from './components/ActionSheetOverlay';

export type ActionSheetChildrenProps = {
  children: ReactNode;
};

export type ActionSheetOptionsProps = {
  options: (ActionSheetItemProps & {
    id?: string;
  })[];
};

export type ActionSheetProps = {
  isTitleHidden?: boolean;
  onClose: () => void;
  title: string;
} & (ActionSheetChildrenProps | ActionSheetOptionsProps);

export const ActionSheet = ({
  isTitleHidden,
  onClose = noop,
  title,
  ...restOfProps
}: ActionSheetProps) => {
  return (
    <ActionSheetOverlay key="action-sheet-overlay" onClose={onClose}>
      <ActionSheetContainer key="action-sheet-container" onClose={onClose}>
        <DialogContent aria-labelledby={title}>
          <ActionSheetHeader isHidden={isTitleHidden} onClose={onClose} title={title} />
          <Box tx={{ px: 12, py: 8 }}>
            {'children' in restOfProps
              ? restOfProps.children
              : restOfProps.options.map(({ id, ...option }, index) => {
                  return (
                    <ActionSheetItem
                      key={id ?? index}
                      data-testid={id}
                      {...option}
                      onSelect={(event: MouseEvent<HTMLButtonElement>) => {
                        if (option.onSelect) {
                          option.onSelect(event);
                        }
                        onClose();
                      }}
                    />
                  );
                })}
          </Box>
        </DialogContent>
      </ActionSheetContainer>
    </ActionSheetOverlay>
  );
};

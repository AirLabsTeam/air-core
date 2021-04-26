import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';

import { Box } from '../Box';
import { ActionSheetContainer } from './components/ActionSheetContainer';
import { ActionSheetHeader } from './components/ActionSheetHeader';
import { ActionSheetItem, ActionSheetItemProps } from './components/ActionSheetItem';

export type ActionSheetRendererProps =
  | { children: ReactNode }
  | { options: (ActionSheetItemProps & { id?: string })[] };

export type ActionSheetProps = {
  isOpened: boolean;
  isTitleHidden?: boolean;
  onClose: () => void;
  title: string;
} & ActionSheetRendererProps;

export const ActionSheet = ({
  isOpened,
  isTitleHidden,
  onClose,
  title,
  ...restOfProps
}: ActionSheetProps) => {
  return (
    <>
      <AnimatePresence key="action-sheet">
        {isOpened && (
          <DialogOverlay
            onDismiss={onClose}
            style={{ opacity: '1 !important', overflow: 'hidden' }}
          >
            <ActionSheetContainer onClose={onClose}>
              <DialogContent>
                <ActionSheetHeader isHidden={isTitleHidden} onClose={onClose} title={title} />
                <Box tx={{ px: 12, py: 8 }}>
                  {'children' in restOfProps
                    ? restOfProps.children
                    : restOfProps.options.map(({ id, ...option }, index) => {
                        return <ActionSheetItem key={id ?? index} data-testid={id} {...option} />;
                      })}
                </Box>
              </DialogContent>
            </ActionSheetContainer>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

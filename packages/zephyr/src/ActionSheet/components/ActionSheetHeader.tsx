import { Close as CloseIcon } from '@air/icons';
import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';

import { Box } from '../../Box';
import { IconButton } from '../../IconButton';
import { Text } from '../../Text';

export interface ActionSheetHeaderProps {
  isHidden?: boolean;
  onClose?: () => void;
  title: string;
}

export const ActionSheetHeader = ({ isHidden, onClose, title }: ActionSheetHeaderProps) => {
  if (isHidden) {
    return <VisuallyHidden>{title}</VisuallyHidden>;
  }

  return (
    <Box
      as="header"
      tx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        borderBottom: '1px solid',
        borderBottomColor: 'pigeon100',
        pl: 20,
        pr: 12,
      }}
    >
      <Text tx={{ color: 'pigeon700', fontWeight: 'medium' }} variant="text-ui-16">
        {title}
      </Text>
      <IconButton
        hasTooltip={false}
        icon={CloseIcon}
        onClick={onClose}
        size="small"
        variant="button-ghost-grey"
      >
        Close action sheet
      </IconButton>
    </Box>
  );
};

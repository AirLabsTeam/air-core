import {
  AddToBoard as AddToBoardIcon,
  Link as LinkIcon,
  LineGraph as LineGraphIcon,
  Share as ShareIcon,
  Send as SendIcon,
} from '@air/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useContextMenu } from 'react-contexify';

import { Box } from '../../../src/Box';
import { Text } from '../../../src/Text';
import { ContextMenu, ContextMenuProps } from '../../../src/Menus/ContextMenu';

const meta: Meta<ContextMenuProps> = {
  title: 'Zephyr/Menus/Abstractions/ContextMenu',
  component: ContextMenu,
};

export default meta;

export const Default: Story<ContextMenuProps> = (args) => {
  const contextMenuId = 'storybook-example';

  const { show } = useContextMenu({
    id: contextMenuId,
  });

  return (
    <>
      <Box
        onContextMenu={show}
        tx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          minHeight: 400,
          border: '2px dashed',
          borderColor: 'pigeon100',
          position: 'relative',
        }}
      >
        <Box
          tx={{
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url("https://images.ctfassets.net/d5ctiaq2lnlb/cDPhta6BGmnIvC5ltYnFT/ae19f80cf8a60a183e548f8df52a0c36/movie_on_4-12-21_at_4.44_pm__2.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            transition: '4s ease',
          }}
        />
        <Text tx={{ fontWeight: 'medium' }} variant="text-ui-12-uppercase">
          Right click anywhere
        </Text>
      </Box>
      <ContextMenu id={contextMenuId} {...args} />
    </>
  );
};

Default.args = {
  options: [
    {
      leftAdornment: <Box as={LineGraphIcon} tx={{ display: 'block', width: 16 }} />,
      description: 'Cake carrot cake jelly beans topping powder oat cake.',
      label: 'Add status',
      onSelect: () => {},
      options: [
        {
          leftAdornment: <Box as={LineGraphIcon} tx={{ display: 'block', width: 16 }} />,
          description: 'Cake carrot cake jelly beans topping powder oat cake.',
          label: 'Add status',
          onSelect: () => {},
        },
      ],
    },
    {
      leftAdornment: <Box as={AddToBoardIcon} tx={{ display: 'block', width: 16 }} />,
      description: 'Cake carrot cake jelly beans topping powder oat cake.',
      label: 'Add to board',
      options: [
        {
          leftAdornment: <Box as={LineGraphIcon} tx={{ display: 'block', width: 16 }} />,
          description: 'Cake carrot cake jelly beans topping powder oat cake.',
          label: 'Add status',
          onSelect: () => {},
        },
      ],
    },
    {
      leftAdornment: <Box as={ShareIcon} tx={{ display: 'block', width: 16 }} />,
      description: 'Cake carrot cake jelly beans topping powder oat cake.',
      label: 'Share',
      onSelect: () => {},
    },
    {
      leftAdornment: (
        <Box as={LinkIcon} tx={{ display: 'block', width: 16, color: 'flamingo500' }} />
      ),
      label: 'Delete',
      onSelect: () => window.alert('You actually tried to....'),
      tx: {
        color: 'flamingo800',
      },
    },
  ],
  tx: {
    width: 240,
  },
};

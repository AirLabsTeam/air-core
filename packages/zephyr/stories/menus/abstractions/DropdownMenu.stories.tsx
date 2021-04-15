import { AddMember as AddMemberIcon, Link as LinkIcon } from '@air/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import { Button } from '../../../src/Button';
import { DropdownMenu, DropdownMenuProps } from '../../../src/Menus/DropdownMenu';

const meta: Meta<DropdownMenuProps> = {
  title: 'Zephyr/Menus/Abstractions/DropdownMenu',
  component: DropdownMenu,
};

export default meta;

export const Default: Story<DropdownMenuProps> = (args) => {
  return (
    <>
      <Box tx={{ minHeight: 400 }}>
        <Box
          tx={{
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url("https://user-images.githubusercontent.com/1065539/112501272-551b1f00-8d46-11eb-9cb6-d15e5efcbd8f.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.04,
          }}
        />
        <Box tx={{ position: 'relative', zIndex: 2 }}>
          <DropdownMenu {...args} />
        </Box>
      </Box>
    </>
  );
};

Default.args = {
  options: [
    {
      leftAdornment: <Box as={LinkIcon} tx={{ display: 'block', width: 16 }} />,
      label: 'Share a link',
      description: 'Generate a share link for public or private use',
      onSelect: () => {},
    },
    {
      leftAdornment: <Box as={AddMemberIcon} tx={{ display: 'block', width: 16 }} />,
      label: 'Add members',
      description: 'Invite members or guests to collaborate on this board',
      divider: true,
      onSelect: () => {},
    },
    {
      description: 'Noooooooooooooooooo, please don’t delete me 😢',
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
  trigger: <Button>Hello</Button>,
  tx: {
    width: 240,
  },
};

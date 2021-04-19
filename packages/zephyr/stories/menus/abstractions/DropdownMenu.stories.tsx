import { AddMember as AddMemberIcon, Link as LinkIcon } from '@air/icons';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { Meta, Story } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';

import { Box, BoxProps } from '../../../src/Box';
import { Button } from '../../../src/Button';
import { DropdownMenu, DropdownMenuProps } from '../../../src/Menus/abstractions/DropdownMenu';

const meta: Meta<DropdownMenuProps> = {
  title: 'Zephyr/Menus/Abstractions/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          'This is an abstraction of the Menu component that wraps around [@reach/menu-button](https://reach.tech/menu-button/).',
      },
      page: () => (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .docblock-argstable-head > tr > th:last-child > span {
                color: transparent;
              }
              .docblock-argstable-body > tr > td:last-child > *{
                display: none;
              }
            `,
            }}
          />
          <Title />
          <Subtitle />
          <Description />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
};

export default meta;

const Container = ({ children, ...restOfProps }: BoxProps) => {
  return (
    <Box {...restOfProps}>
      <Box
        tx={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isChromatic()
            ? 'none'
            : 'url("https://user-images.githubusercontent.com/1065539/112501272-551b1f00-8d46-11eb-9cb6-d15e5efcbd8f.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
        }}
      />
      <Box tx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
    </Box>
  );
};

const Template: Story<DropdownMenuProps> = (args) => {
  return (
    <Container>
      <DropdownMenu {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

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
      onSelect: () => {},
    },
  ],
  trigger: <Button variant="button-filled-blue">Options</Button>,
  tx: {
    width: 240,
  },
};

export const withCustomOffset = Template.bind({});

withCustomOffset.args = {
  offset: 24,
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
  trigger: <Button variant="button-filled-blue">Options</Button>,
  tx: {
    width: 240,
  },
};

withCustomOffset.parameters = {
  docs: {
    description: {
      story:
        'The `offset` prop allows you to control the distance between the menu and the trigger.',
    },
  },
};

export const withChildrenTop = Template.bind({});

withChildrenTop.args = {
  childrenTop: <Box tx={{ backgroundColor: 'macaw200', height: 80, borderRadius: 4, mb: 12 }} />,
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
  trigger: <Button variant="button-filled-blue">Options</Button>,
  tx: {
    width: 240,
  },
};

withChildrenTop.parameters = {
  docs: {
    description: {
      story:
        'The `childrenBottom` prop renders the children that you pass to it above the menu options.',
    },
  },
};

export const withChildrenBottom = Template.bind({});

withChildrenBottom.args = {
  childrenBottom: <Box tx={{ backgroundColor: 'macaw200', height: 80, borderRadius: 4, mt: 12 }} />,
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
  trigger: <Button variant="button-filled-blue">Options</Button>,
  tx: {
    width: 240,
  },
};

withChildrenBottom.parameters = {
  docs: {
    description: {
      story:
        'The `childrenBottom` prop renders the children that you pass to it above the menu options.',
    },
  },
};

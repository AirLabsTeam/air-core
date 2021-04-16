import {
  Check as CheckIcon,
  Close as CloseIcon,
  Download as DownloadIcon,
  Eye as EyeIcon,
  Link as LinkIcon,
  LineGraph as LineGraphIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Share as ShareIcon,
  Star as StarIcon,
} from '@air/icons';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useContextMenu } from 'react-contexify';

import { Box } from '../../../src/Box';
import { Text } from '../../../src/Text';
import { ContextMenu, ContextMenuProps } from '../../../src/Menus/abstractions/ContextMenu';

const meta: Meta<ContextMenuProps> = {
  title: 'Zephyr/Menus/Abstractions/ContextMenu',
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          'This is an abstraction of the Menu component that wraps around [react-contexify](https://fkhadra.github.io/react-contexify/). This component does not use any of the styles that are provided by `react-contexify/dist/ReactContexify.css` and **should not** be imported into the app.',
      },
      page: () => (
        <>
          {/* Because the modal is a portal that spans the content of the page, we want to not make the args table
        interactive by hiding the contorls themselves. */}
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

const Template: Story<ContextMenuProps> = (args) => {
  const { show } = useContextMenu({
    id: args.id,
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
          minHeight: 200,
          border: '2px dashed',
          borderColor: 'pigeon100',
          position: 'relative',
        }}
      >
        <Text tx={{ fontWeight: 'medium' }} variant="text-ui-12-uppercase">
          Right click anywhere
        </Text>
      </Box>
      <ContextMenu {...args} id={args.id} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'default',
  options: [
    {
      leftAdornment: <Box as={DownloadIcon} tx={{ display: 'block', width: 16 }} />,
      label: 'Download',
      onClick: () => {},
    },
    {
      leftAdornment: <Box as={ShareIcon} tx={{ display: 'block', width: 16 }} />,
      label: 'Share a link',
      onClick: () => {},
    },
    {
      leftAdornment: (
        <Box as={LinkIcon} tx={{ display: 'block', width: 16, color: 'flamingo500' }} />
      ),
      label: 'Delete',
      onClick: () => window.alert('You actually tried to....'),
      tx: {
        color: 'flamingo800',
      },
    },
  ],
  tx: {
    width: 240,
  },
};

export const withOverlay = Template.bind({});

withOverlay.args = {
  id: 'with-overlay',
  options: [
    {
      leftAdornment: <Box as={DownloadIcon} tx={{ display: 'block', width: 16 }} />,
      label: 'Download',
      onClick: () => {},
    },
    {
      leftAdornment: <Box as={ShareIcon} tx={{ display: 'block', width: 16 }} />,
      label: 'Share a link',
      onClick: () => {},
    },
    {
      leftAdornment: (
        <Box as={LinkIcon} tx={{ display: 'block', width: 16, color: 'flamingo500' }} />
      ),
      label: 'Delete',
      onClick: () => window.alert('You actually tried to....'),
      tx: {
        color: 'flamingo800',
      },
    },
  ],
  showOverlay: true,
};

withOverlay.parameters = {
  docs: {
    description: {
      story:
        'When `showOverlay` is enabled, a transparent `<div />` is applied above all the other content on the page and below the menu to prevent you from being able to interact with anything else until you have closed this menu.',
    },
  },
};

export const withSubMenu = Template.bind({});

withSubMenu.args = {
  options: [
    {
      label: 'Add status',
      leftAdornment: <Box as={LineGraphIcon} tx={{ display: 'block', width: 16 }} />,
      onClick: () => {},
      options: [
        {
          label: 'In progress',
          leftAdornment: <Box as={PlayIcon} tx={{ display: 'block', width: 16 }} />,
        },
        {
          label: 'Pause',
          leftAdornment: <Box as={PauseIcon} tx={{ display: 'block', width: 16 }} />,
        },
        {
          divider: true,
          label: 'In review',
          leftAdornment: <Box as={EyeIcon} tx={{ display: 'block', width: 16 }} />,
        },
        {
          label: 'Completed',
          leftAdornment: <Box as={CheckIcon} tx={{ display: 'block', width: 16 }} />,
        },
        {
          label: 'Cancel',
          leftAdornment: <Box as={CloseIcon} tx={{ display: 'block', width: 16 }} />,
        },
      ],
    },
    {
      divider: true,
      label: 'Add to favorites',
      leftAdornment: <Box as={StarIcon} tx={{ display: 'block', width: 16 }} />,
    },
    {
      leftAdornment: (
        <Box as={LinkIcon} tx={{ display: 'block', width: 16, color: 'flamingo500' }} />
      ),
      label: 'Delete',
      onClick: () => window.alert('You actually tried to....'),
      tx: {
        color: 'flamingo800',
      },
    },
  ],
};

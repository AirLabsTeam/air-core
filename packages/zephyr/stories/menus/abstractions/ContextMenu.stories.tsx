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
import isChromatic from 'chromatic/isChromatic';
import React from 'react';
import { useContextMenu } from 'react-contexify';

import { Box, BoxProps } from '../../../src/Box';
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

const ClickArea = ({ children, ...restOfProps }: BoxProps) => {
  return (
    <Box
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
      {...restOfProps}
    >
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
            : 'url("https://images.ctfassets.net/d5ctiaq2lnlb/cDPhta6BGmnIvC5ltYnFT/ae19f80cf8a60a183e548f8df52a0c36/movie_on_4-12-21_at_4.44_pm__2.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          transition: '4s ease',
        }}
      />
      <Text tx={{ fontWeight: 'medium' }} variant="text-ui-12-uppercase">
        Right click anywhere
      </Text>
      {children}
    </Box>
  );
};

const Template: Story<ContextMenuProps> = (args) => {
  const { show } = useContextMenu({
    id: args.id,
  });

  return (
    <>
      <ClickArea onContextMenu={show} />
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

withSubMenu.parameters = {
  docs: {
    description: {
      story:
        'The submenu is determined if you pass `options` into `props.options` array. The position of the sub menu will conditional render on the left or right based on the amount of space that is available.',
    },
  },
};
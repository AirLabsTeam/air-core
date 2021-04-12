import {
  Download as DownloadIcon,
  Gear as GearIcon,
  Link as LinkIcon,
  LogOut as LogOutIcon,
  Delete as DeleteIcon,
} from '@air/icons';
import { Meta, Story } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import React from 'react';

import { Box } from '../../src/Box';
import { Button } from '../../src/Button';
import { Menu, MenuProps } from '../../src/Menus';
import { MenuButton } from '../../src/Menus/MenuButton';
import { MenuDivider } from '../../src/Menus/MenuDivider';
import { MenuItem } from '../../src/Menus/MenuItem';
import { Text } from '../../src/Text';

const meta: Meta<MenuProps> = {
  title: 'Zephyr/Menus/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: `The menu component uses [@reach/menu-button](https://reach.tech/menu-button) under the hood.`,
      },
      page: () => (
        <>
          {/* Because the modal is a portal that spans the content of the page, we want to not make the args table
        interactive by hiding the contorls themselves. */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              .docblock-argstable-head > tr > th:last-of-type {
                display: none;
              }
              .docblock-argstable-body > tr > td:last-of-type > * {
                display: none;
              }
            `,
            }}
          />
          <Title />
          <Subtitle />
          <Description />
          <Stories title="" />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
};

export default meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});

export const MenuWithOptions = Template.bind({});

MenuWithOptions.args = {
  options: [
    {
      icon: DownloadIcon,
      label: 'Download',
      onSelect: () => {},
    },
    {
      divider: true,
      label: 'Share a link',
      icon: LinkIcon,
      onSelect: () => {},
    },
    {
      icon: DeleteIcon,
      label: 'Delete',
      onSelect: () => {},
    },
  ],
  trigger: <Button as={MenuButton}>Button</Button>,
};

MenuWithOptions.parameters = {
  docs: {
    description: {
      story: 'This is an example of using the `<Menu />` component with the `options` props.',
    },
  },
};

export const MenuWithShortcuts = Template.bind({});

MenuWithShortcuts.args = {
  options: [
    {
      icon: DownloadIcon,
      label: 'Download',
      onSelect: () => {},
      shortcut: ['CMD', 'S'],
    },
    {
      divider: true,
      label: 'Share a link',
      icon: LinkIcon,
      onSelect: () => {},
      shortcut: ['CMD', 'C'],
    },
    {
      icon: DeleteIcon,
      label: 'Delete',
      onSelect: () => {},
      shortcut: ['Del'],
    },
  ],
  trigger: <Button as={MenuButton}>Button</Button>,
};

MenuWithShortcuts.parameters = {
  docs: {
    description: {
      story:
        'This is an example of using the `<Menu />` component with the `options` props where each `option` contains the `shortcut` key.',
    },
  },
};
export const MenuWithDescription = Template.bind({});

MenuWithDescription.args = {
  options: [
    {
      description:
        'Cake carrot cake jelly beans topping powder oat cake. Soufflé lemon drops lollipop toffee wafer muffin croissant candy cheesecake.',
      icon: DownloadIcon,
      label: 'Download',
      onSelect: () => {},
    },
    {
      description:
        'Cake carrot cake jelly beans topping powder oat cake. Soufflé lemon drops lollipop toffee wafer muffin croissant candy cheesecake.',
      divider: true,
      label: 'Share a link',
      icon: LinkIcon,
      onSelect: () => {},
    },
    {
      description:
        'Cake carrot cake jelly beans topping powder oat cake. Soufflé lemon drops lollipop toffee wafer muffin croissant candy cheesecake.',
      icon: DeleteIcon,
      label: 'Delete',
      onSelect: () => {},
    },
  ],
  trigger: <Button as={MenuButton}>Button</Button>,
  tx: {
    width: 400,
  },
};

MenuWithDescription.parameters = {
  docs: {
    description: {
      story:
        'This is an example of using the `<Menu />` component with the `options` props where each `option` contains the `description` key.',
    },
  },
};

export const MenuWithCustomChildren = Template.bind({});

MenuWithCustomChildren.args = {
  children: (
    <>
      <Box tx={{ backgroundColor: 'jay050', borderRadius: 4, px: 8, py: 12, mb: 8 }}>
        <Text tx={{ color: 'jay800', fontWeight: 'semibold' }} variant="text-ui-12">
          Word of the day: New
        </Text>
        <Text tx={{ color: 'jay600' }} variant="text-ui-12">
          Not existing before; made, introduced, or discovered recently or now for the first time.
        </Text>
      </Box>
      <MenuDivider />
      <MenuItem icon={GearIcon} label="Workspace settings" onSelect={() => {}} />
      <MenuItem
        description="Noooooo don't do it"
        icon={LogOutIcon}
        label="Log out"
        onSelect={() => {}}
      />
    </>
  ),
  trigger: <Button as={MenuButton}>Button</Button>,
  tx: {
    width: 320,
  },
};

MenuWithCustomChildren.parameters = {
  docs: {
    description: {
      story:
        "We can't always use the `options` props and sometimes we need to render in custom children to the menu list. We export all the necessary components needed to build our own menu from `@air/zephyr` allowing you the customize your menu.",
    },
  },
};

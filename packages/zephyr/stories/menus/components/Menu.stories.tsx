import { Meta, Story } from '@storybook/react';

import { Box } from '../../../src/Box';
import { Menu, MenuProps } from '../../../src/Menus/components/Menu';

export default {
  title: 'Zephyr/Menus/Components/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          'The `Menu` component is a `div` that contains the styles and behaviors for our menus. This component has `motion.div` passed to the polymorphic `as` prop and has default animations applied to it. In order to have these animations mount and unmount properly, you will need to wrap this component in the `AnimatePresence` component and add a `key` prop.',
      },
    },
  },
} as Meta<MenuProps>;

const Template: Story<MenuProps> = (args) => {
  return (
    <Menu key="menu" {...args}>
      <Box tx={{ height: 200 }} />
    </Menu>
  );
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {};

export const withCustomAnimation = Template.bind({});

withCustomAnimation.args = {
  animation: {
    hidden: {
      opacity: 0,
      rotate: 1000,
      y: -1000,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        delay: 3,
      },
    },
    reducedHidden: {
      opacity: 0,
    },
    reducedVisible: {
      opacity: 1,
    },
  },
};

withCustomAnimation.parameters = {
  docs: {
    description: {
      story: 'Using the `animation` prop, you can pass in custom animations to the menu.',
    },
  },
};

import { Meta, Story } from '@storybook/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { ActionSheet, ActionSheetProps } from '../../src/ActionSheet/ActionSheet';
import { Box } from '../../src/Box';
import { Text } from '../../src/Text';

export default {
  title: 'Zephyr/ActionSheet/ActionSheet',
  component: ActionSheet,
  parameters: {
    docs: {
      description: {
        component: `The 'ActionSheet' component is modal that that is styled to look like an ActionSheet on mobile. Under the hood, it uses [@reach/dialog](https://reach.tech/dialog) and [framer-motion](https://www.framer.com/api/motion/gestures) to handle gestures.
      You must always use <AnimatePresence> (from <code>framer-motion</code>) in conjunction with this component. With
      our desire to create modal abstraction components came the problem of not being able to reset state within those
      abstraction components as they were always rendered. <AnimatePresence> automatically handles exit animations when
      items are added or removed from an array, but not if there exists another <AnimatePresence> below. Hopefully
      this requirement is temporary 🤞.`,
      },
    },
  },
} as Meta<ActionSheetProps>;

const Template: Story<ActionSheetProps> = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpened(true)}>Open</button>
      <AnimatePresence>
        {isOpened && <ActionSheet {...args} onClose={() => setIsOpened(false)} />}
      </AnimatePresence>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      label: 'Share a link',
      onSelect: () => {},
    },
    {
      label: 'Add members',
      hasDividerBottom: true,
      onSelect: () => {},
    },
    {
      label: 'Delete',
      onSelect: () => window.alert('You actually tried to....'),
      tx: {
        color: 'flamingo800',
      },
    },
  ],
  title: 'Actionsheet',
};

export const withCustomChildren = Template.bind({});

withCustomChildren.args = {
  children: (
    <Box tx={{ backgroundColor: 'jay800', borderRadius: 4, p: 48 }}>
      <Text tx={{ color: 'white' }} variant="text-ui-16">
        Custom children
      </Text>
    </Box>
  ),
  title: 'Actionsheet',
};

export const withHiddenTitle = Template.bind({});

withHiddenTitle.args = {
  isTitleHidden: true,
  options: [
    {
      label: 'Share a link',
      onSelect: () => {},
    },
    {
      label: 'Add members',
      hasDividerBottom: true,
      onSelect: () => {},
    },
    {
      label: 'Delete',
      onSelect: () => window.alert('You actually tried to....'),
      tx: {
        color: 'flamingo800',
      },
    },
  ],
  title: 'Actionsheet',
};

withHiddenTitle.parameters = {
  docs: {
    description: {
      story: 'The `isTitleHidden` prop will visually hide the title of the action sheet.',
    },
  },
};

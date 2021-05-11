import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { ActionSheet, ActionSheetProps } from '../../src/ActionSheet/ActionSheet';
import { Box } from '../../src/Box';
import { Text } from '../../src/Text';

export default {
  title: 'Zephyr/ActionSheet/ActionSheet',
  component: ActionSheet,
  parameters: {
    docs: {
      description: {
        component:
          'The `ActionSheet` component is modal that that is styled to look like an ActionSheet on mobile. Under the hood, it uses [@reach/dialog](https://reach.tech/dialog) and [framer-motion](https://www.framer.com/api/motion/gestures) to handle gestures.',
      },
    },
  },
} as Meta<ActionSheetProps>;

const Template: Story<ActionSheetProps> = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpened(true)}>Open</button>
      <ActionSheet {...args} isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      label: 'Share a link',
      onClick: () => {},
    },
    {
      label: 'Add members',
      hasDividerBottom: true,
      onClick: () => {},
    },
    {
      label: 'Delete',
      onClick: () => window.alert('You actually tried to....'),
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
      onClick: () => {},
    },
    {
      label: 'Add members',
      hasDividerBottom: true,
      onClick: () => {},
    },
    {
      label: 'Delete',
      onClick: () => window.alert('You actually tried to....'),
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

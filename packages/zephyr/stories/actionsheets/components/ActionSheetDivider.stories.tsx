import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
  ActionSheetDivider,
  ActionSheetDividerProps,
} from '../../../src/ActionSheet/components/ActionSheetDivider';

export default {
  title: 'Zephyr/ActionSheet/Components/ActionSheetDivider',
  component: ActionSheetDivider,
  parameters: {
    docs: {
      description: {
        component:
          'The `ActionSheetDivider` component is a `hr` that is used in the `ActionSheet` component as a seperator between items.',
      },
    },
  },
} as Meta<ActionSheetDividerProps>;

const Template: Story<ActionSheetDividerProps> = (args) => {
  return <ActionSheetDivider {...args} />;
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {};

import { Close } from '@air/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import { SmartTag, SmartTagProps } from '../../../src/Pills/abstractions/SmartTag';

export default {
  title: 'Zephyr/Pill/Abstraction/SmartTag',
  component: SmartTag,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta<SmartTagProps>;

const Template: Story<SmartTagProps> = (args) => {
  return <SmartTag {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Smart Tag',
};

export const WithLeftAdornment = Template.bind({});

WithLeftAdornment.args = {
  children: 'Smart Tag',
  leftAdornment: <Box as={Close} tx={{ display: 'block', width: 12 }} />,
};

export const WithRightAdornment = Template.bind({});

WithRightAdornment.args = {
  children: 'Smart Tag',
  rightAdornment: <Box as={Close} tx={{ display: 'block', width: 12 }} />,
};

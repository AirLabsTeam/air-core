import { Close } from '@air/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box } from '../../../src/Box';
import {
  UserGeneratedTag,
  UserGeneratedTagProps,
} from '../../../src/Pills/abstractions/UserGeneratedTag';

export default {
  title: 'Zephyr/Pill/Abstraction/UserGeneratedTag',
  component: UserGeneratedTag,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta<UserGeneratedTagProps>;

const Template: Story<UserGeneratedTagProps> = (args) => {
  return <UserGeneratedTag {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'User Generated Tag',
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

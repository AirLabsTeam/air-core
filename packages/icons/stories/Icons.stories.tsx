import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from '../src/index';

const meta: Meta<IconProps> = {
  title: 'Icons/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'some component **MarkDown**',
      },
    },
  },
};

export default meta;

const Template: Story<IconProps> = (args) => <Icon {...args} data-testid={meta.title} />;

export const Default = Template.bind({});
Default.args = { name: 'Info' };

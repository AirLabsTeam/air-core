import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'some component **Markdown**',
      },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Primary button',
  size: 'medium',
  variant: 'primary',
};

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  children: 'Primary button',
  size: 'medium',
  variant: 'primary',
};

PrimaryButton.parameters = {
  docs: {
    description: {
      story:
        'Best for top- level calls to action, very important actions, etc. Reccomended sizes Small to Extra large.',
    },
  },
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  children: 'Secondary button',
  size: 'medium',
  variant: 'secondary',
};

SecondaryButton.parameters = {
  docs: {
    description: {
      story:
        'Text focused secondary buttons. Basically a ghost without the outline around it. Reccomended sizes Extra Small to Medium.',
    },
  },
};

export const AuxiliaryButton = Template.bind({});

AuxiliaryButton.args = {
  children: 'Auxiliary button',
  size: 'medium',
  variant: 'auxiliary',
};

AuxiliaryButton.parameters = {
  docs: {
    description: {
      story:
        'Text focused secondary buttons. Basically a ghost but peacock. Recomended sizes Small to Medium - Used in place of a Primary button',
    },
  },
};

export const LinkButton = Template.bind({});

LinkButton.args = {
  as: 'a',
  children: 'Link button',
  size: 'medium',
  variant: 'primary',
};

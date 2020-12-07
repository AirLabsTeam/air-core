import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button/Filled Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Filled buttons are the most widely used button style. They can be used as calls to action, in modals, and in many other places that have important actions. When using **blue** or **red** filled buttons, there should only be one on the page or in the modal at a time, this will be the most important action, but this button can be paired with either grey filled buttons or ghost buttons to maintain hierarchy between the actions. When buttons appear in the same row as other buttons they should all be the same size/height, but buttons in different areas can be different sizes. Filled buttons are best used at sizes **small** to **large.**',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories includePrimary />
        </>
      ),
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} data-testid={meta.title} />;

export const FilledBlueButton = Template.bind({});

FilledBlueButton.args = {
  children: 'Filled blue button',
  size: 'medium',
  variant: 'button-filled-blue',
};

FilledBlueButton.parameters = {
  docs: {
    description: {
      story: `Blue primary buttons are used for **the** most important action within a page or modal. There shouldn't be multiples of these on a single page at a time. The "FAB" is an exception to this rule`,
    },
  },
};

FilledBlueButton.storyName = 'Filled (Blue)';

export const FilledGreyButton = Template.bind({});

FilledGreyButton.args = {
  children: 'Filled grey button',
  size: 'medium',
  variant: 'button-filled-grey',
};

FilledGreyButton.parameters = {
  docs: {
    description: {
      story: `Grey filled buttons are used for secondary actions within a page or modal. There can be multiple grey buttons on a page at a single time. They are used to clearly display other high-level actions a user might want to take but are not as important as the primary action. `,
    },
  },
};

FilledGreyButton.storyName = 'Filled (Grey)';

export const FilledDestructiveButton = Template.bind({});

FilledDestructiveButton.args = {
  children: 'Destructive button',
  size: 'medium',
  variant: 'button-filled-destructive',
};

FilledDestructiveButton.parameters = {
  docs: {
    description: {
      story: `Red destructive filled buttons are used only for destructive actions normally within a modal. There shouldn't be multiples of these on a single page at a time. Using a red button means that it is a highly destructive button and should be used in situations that cannot be undone, such as deleting assets or boards.`,
    },
  },
};

FilledDestructiveButton.storyName = 'Filled (Destructive)';

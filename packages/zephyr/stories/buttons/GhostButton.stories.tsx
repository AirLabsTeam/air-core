import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button/Ghost Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Ghost buttons are a secondary type of button.  They are text-focused and useful when you need multiple buttons on a page at once. They are also are often used as subactions on a page such as "save" for a form field vs "share" for the modal. These buttons can always be paired with others, but generally, when using **red** ghost buttons, there should only be one on the page or in the modal at a time, which may be a secondary/optional destructive action. When buttons appear in the same row as other buttons they should all be the same size/height (even if they are different types), but buttons in different areas can be different sizes. Ghost buttons are best used at sizes **extra small** to **medium.**',
      },
      // eslint-disable-next-line react/display-name
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

export const GhostBlueButton = Template.bind({});

GhostBlueButton.args = {
  children: 'Ghost blue button',
  size: 'medium',
  variant: 'button-ghost-blue',
};

GhostBlueButton.parameters = {
  docs: {
    description: {
      story:
        'Blue ghost buttons are used mostly for primary actions within a list or any other case where there might be multiple actions.',
    },
  },
};

GhostBlueButton.storyName = 'Ghost (Blue)';

export const GhostGreyButton = Template.bind({});

GhostGreyButton.storyName = 'Ghost (Grey)';

GhostGreyButton.args = {
  children: 'Ghost grey button',
  size: 'medium',
  variant: 'button-ghost-grey',
};

GhostGreyButton.parameters = {
  docs: {
    description: {
      story:
        'Grey ghost buttons are a more subtle, repeatable versions of their blue counterparts. Pairs nicely with filled buttons as well.',
    },
  },
};

export const GhostDestructiveButton = Template.bind({});

GhostDestructiveButton.storyName = 'Ghost (Destructive)';

GhostDestructiveButton.args = {
  children: 'Ghost destructive button',
  size: 'medium',
  variant: 'button-ghost-destructive',
};

GhostDestructiveButton.parameters = {
  docs: {
    description: {
      story: `Red destructive ghost buttons are used only for secondary destructive actions normally within a modal. There shouldn't be multiples of these on a single page at a time. Using a red ghost button normally directs users to a path that it is highly destructive, but not the final destructive action itself.`,
    },
  },
};

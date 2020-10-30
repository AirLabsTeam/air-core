import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button/Outline Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Outline buttons are a rarely used button style. They are primarily used as a toggle, secondary button (marketing), or field style button. These often will have drop-down menus or on/off states like in filters. If used as a secondary button, it is in special cases when paired with a primary filled button and another fill or ghost button is not appropriate. When buttons appear in the same row as other buttons they should all be the same size/height, but buttons in different areas can be different sizes. Filled buttons are best used at sizes **small** to **large.**',
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

export const OutlineBlueButton = Template.bind({});

OutlineBlueButton.args = {
  children: 'Outline blue button',
  size: 'medium',
  variant: 'outline-blue',
};

OutlineBlueButton.parameters = {
  docs: {
    description: {
      story:
        'Pairs with a blue primary button (see marketing site). Should be used more sparsely than grey outline buttons.',
    },
  },
};

OutlineBlueButton.storyName = 'Outline (Blue)';

export const OutlineGreyButton = Template.bind({});

OutlineGreyButton.args = {
  children: 'Outline grey button',
  size: 'medium',
  variant: 'outline-grey',
};

OutlineGreyButton.parameters = {
  docs: {
    description: {
      story:
        'Grey ghost buttons are a more subtle, repeatable versions of their blue counterparts. Pairs nicely with filled buttons as well',
    },
  },
};

OutlineGreyButton.storyName = 'Outline (Grey)';

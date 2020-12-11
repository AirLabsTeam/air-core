import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button',
  component: Button,
  argTypes: {
    /**
     * react-docgen-typescript fails us here.
     * @see https://github.com/storybookjs/storybook/issues/12641#issuecomment-708603353
     */
    as: {
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
      defaultValue: 'button',
      description:
        'Can be any HTML element, but can also be any component. Typically only used with "button" or "a".',
    },
  },
};

export default meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} data-testid={meta.title} />;

Default.args = {
  children: 'Button',
};

export const ButtonAs: Story<ButtonProps> = () => (
  <Button as="a" href="https://google.com" target="_blank">
    This story acts as an integration test asserting that we can render the item as another semantic
    element.
  </Button>
);

export const ButtonLoading: Story<ButtonProps> = () => (
  <>
    <Button isLoading={true} size="small">
      Save
    </Button>
    <br />
    <br />
    <Button isLoading={true} size="medium">
      Save
    </Button>
    <br />
    <br />
    <Button isLoading={true} size="large">
      Save
    </Button>
    <br />
    <br />
  </>
);

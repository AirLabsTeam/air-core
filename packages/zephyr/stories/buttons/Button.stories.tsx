import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useTheme } from 'styled-components';
import { Box, BoxStylingProps } from '../../src/Box';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button/Button',
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

export const WorkspaceButtons: Story<ButtonProps> = () => {
  const theme = useTheme();

  const avatarSize = 34;

  const sharedButtonStyles: BoxStylingProps['tx'] = {
    width: avatarSize + 4,
    height: avatarSize + 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    transitionProperty: 'background-color,box-shadow,border-radius',
    transitionDelay: '0.1s',
    transitionTimingFunction: 'ease',

    '&:focus-visible > img': {
      opacity: 1,
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },

    '&:not(:first-of-type)': {
      mt: 8,
    },
  };

  const sharedImageStyles: BoxStylingProps['tx'] = {
    minWidth: avatarSize,
    width: avatarSize,
    height: avatarSize,
    borderRadius: 6,
    overflow: 'hidden',
    objectFit: 'cover',
    backgroundColor: 'rgb(0,0,0,0.4)',
    border: '1px solid',
    borderColor: 'jay800',
    transition: 'opacity 0.2s ease-in-out',

    '&:hover': {
      opacity: 1,
    },
  };

  const unselectedStyles: BoxStylingProps['tx'] = {
    ...sharedImageStyles,
    opacity: 0.6,
    boxShadow: 'none',
  };

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column' }}>
      <Button variant="button-unstyled" tx={sharedButtonStyles}>
        {/* Selected one */}
        <Box
          as="img"
          src="https://air-prod.imgix.net/workspace-avatars/44e32827-02c0-4e1a-be1e-90299adfb99d-1603934503731.jpeg?h=108&w=108=&fit=crop"
          alt="A snowy mountain backdropped by a starry night"
          tx={{
            ...sharedImageStyles,
            opacity: 1,
            boxShadow: `0 0 0 2px ${theme.colors.focus}`,
          }}
        />
      </Button>

      {/* Keyboard-focused one */}
      <Button
        variant="button-unstyled"
        tx={sharedButtonStyles}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus // only used for visual regression diff
      >
        <Box
          as="img"
          src="https://assets.aircamera.com/avatars/avatar_yellow_2.png?h=108&w=108=&fit=crop"
          alt="A little bird"
          tx={unselectedStyles}
        />
      </Button>

      {/* Unselected one */}
      <Button variant="button-unstyled" tx={sharedButtonStyles}>
        <Box
          as="img"
          src="https://assets.aircamera.com/avatars/avatar_blue_7.png?h=108&w=108=&fit=crop"
          alt="Cartoon of clouds in the night"
          tx={unselectedStyles}
        />
      </Button>
    </Box>
  );
};

WorkspaceButtons.parameters = {
  docs: {
    description: {
      story:
        'This is an example relevant to Air.inc where we use the unstyled variant to make custom buttons with accessibile defaults still in mind. It is non-interactive.',
    },
  },
};

export const ButtonResponsiveVariants: Story<ButtonProps> = () => (
  <Button variant={['button-filled-blue', 'button-outline-blue']}>
    This button changes to a different variant based on the screen resolution
  </Button>
);

export const ButtonAs: Story<ButtonProps> = () => (
  <Button as="a" href="https://google.com" target="_blank">
    This story acts as an integration test asserting that we can render the item as another semantic
    element.
  </Button>
);

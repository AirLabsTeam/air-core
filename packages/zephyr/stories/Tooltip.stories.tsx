import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { noop } from 'lodash';
import { Text } from '../src/Text';
import { Tooltip, TooltipProps } from '../src/Tooltip';
import { Box, BoxStylingProps } from '../src/Box';
import { Button } from '../src/Button';

const TooltipStoryDecorator = (Story: () => StoryFnReactReturnType) => (
  <Box tx={{ display: 'grid', placeItems: 'center', width: '100%', height: 300 }}>
    <Story />
  </Box>
);
const meta: Meta = {
  title: 'Zephyr/Tooltip',
  component: Tooltip,
  decorators: [TooltipStoryDecorator],
};

export default meta;

export const Default: Story<TooltipProps> = () => {
  const [isHovered, setIsHovered] = useState(false);

  const setAsHovered = () => setIsHovered(true);
  const setAsNotHovered = () => setIsHovered(false);

  return (
    <Tooltip
      withArrow={false}
      label={'Now you see me!'}
      data-testid={meta.title}
      side="right"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
    >
      <Text
        variant="text-ui-18"
        as="div"
        onMouseEnter={setAsHovered}
        onMouseLeave={setAsNotHovered}
        tx={{
          bg: 'jay500',
          borderRadius: 4,
          color: 'white',
          display: 'inline-block',
          px: 8,
          py: 12,
          textAlign: 'center',
          verticalAlign: 'middle',
          width: 200,
          transition: 'all 0.3s linear',
          '&:hover': {
            bg: 'macaw500',
            cursor: 'help',
          },
          '&:hover > span': {
            transform: 'rotate(5deg)',
          },
        }}
      >
        <Box as="span" tx={{ display: 'block', transition: 'all 0.3s linear' }}>
          {isHovered ? 'Boo!' : 'Hover over me'}
        </Box>
      </Text>
    </Tooltip>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `/**
  * Unfortunately, we can't render source code correctly on the initial story.
  * Please see https://github.com/storybookjs/storybook/issues/12022
  */`,
    },
  },
};

export const DisabledButton = () => (
  <Tooltip label="You can still see me" side="bottom">
    <Box>
      <Button size="small" disabled>
        Not Clear What This Disabled Button Does
      </Button>
    </Box>
  </Tooltip>
);

DisabledButton.parameters = {
  docs: {
    description: {
      story: `Disabled, interactive elements (like \`<button>\`) do not trigger user interactions so a Tooltip will not
activate on normal events like hover. If you need to wrap a Tooltip in a Button that's potentially or always disabled,
simply wrap the button in an element that has "block" or "flex" display.`,
    },
  },
};

export const AllSides = () => {
  const [areTooltipsVisible, setAreTooltipsVisible] = useState(false);
  const hideTooltips = () => setAreTooltipsVisible(false);
  const showTooltips = () => setAreTooltipsVisible(true);

  const manualControlProps =
    isChromatic() || areTooltipsVisible
      ? { open: true, onOpenChange: noop, defaultOpen: true }
      : undefined;

  return (
    <Box tx={{ height: 320, width: '100%', bg: 'jay500', py: 24 }}>
      <Box tx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onClick={areTooltipsVisible ? hideTooltips : showTooltips}
          variant="button-filled-grey"
        >
          {areTooltipsVisible ? 'Unpin Tooltips' : 'Pin Tooltips'}
        </Button>
      </Box>
      <Box
        tx={{
          display: 'grid',
          gridTemplate: '50% 50% / 50% 50%',
          width: '50%',
          height: '50%',
          gap: '1rem',
          mx: 'auto',
          my: 64,
        }}
      >
        <Tooltip label="This is rendered above." side="top" manualControlProps={manualControlProps}>
          <Button onClick={noop} variant="button-filled-grey">
            Top
          </Button>
        </Tooltip>
        <Tooltip
          label="This is rendered to the right."
          side="right"
          manualControlProps={manualControlProps}
        >
          <Button onClick={noop} variant="button-filled-grey">
            Right
          </Button>
        </Tooltip>
        <Tooltip
          label="This is rendered to the left."
          side="left"
          manualControlProps={manualControlProps}
        >
          <Button onClick={noop} variant="button-filled-grey">
            Left
          </Button>
        </Tooltip>
        <Tooltip
          label="This is rendered below."
          side="bottom"
          manualControlProps={manualControlProps}
        >
          <Button onClick={noop} variant="button-filled-grey">
            Bottom
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export const WithoutBorder = () => (
  <Box
    tx={{
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      height: '100%',
      bg: 'jay500',
    }}
  >
    <Tooltip
      label="No borders here."
      side="right"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
      withBorder={false}
    >
      <Button onClick={noop} variant="button-filled-grey">
        Hover over me to see a tooltip without a white border!
      </Button>
    </Tooltip>
  </Box>
);

export const MultiColoredBackground = () => {
  const avatarSize = 36;

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
      mt: 14,
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
    borderColor: 'inherit',
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

  const workspaceImages = [
    'https://air-prod.imgix.net/workspace-avatars/44e32827-02c0-4e1a-be1e-90299adfb99d-1603934503731.jpeg?h=108&w=108=&fit=crop',
    'https://assets.aircamera.com/avatars/avatar_yellow_2.png?h=108&w=108=&fit=crop',
    'https://assets.aircamera.com/avatars/avatar_yellow_2.png?h=108&w=108=&fit=crop',
  ];

  return (
    <Box tx={{ display: 'flex', width: '100%', height: '100%' }}>
      <Box tx={{ display: 'flex', flexDirection: 'column', bg: 'jay900', p: 8 }}>
        {workspaceImages.map((src, index) => (
          <Tooltip
            label={`Workspace ${index + 1}`}
            manualControlProps={
              isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
            }
            side="right"
            sideOffset={4}
            key={src}
          >
            <Button variant="button-unstyled" tx={sharedButtonStyles} key={src}>
              <Box as="img" src={src} alt="" tx={unselectedStyles} />
            </Button>
          </Tooltip>
        ))}
      </Box>

      <Box tx={{ flex: 1, bg: 'white' }} />
    </Box>
  );
};

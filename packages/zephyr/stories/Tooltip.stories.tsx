import React from 'react';
import { Meta } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { noop } from 'lodash';
import { Text } from '../src/Text';
import { Tooltip } from '../src/Tooltip';
import { Box } from '../src/Box';
import { Button } from '../src';

const TooltipStoryDecorator = (Story: () => StoryFnReactReturnType) => (
  <Box tx={{ display: 'grid', placeItems: 'center', width: '100%', height: 200 }}>
    <Story />
  </Box>
);
const meta: Meta = {
  title: 'Zephyr/Tooltip',
  component: Tooltip,
  decorators: [TooltipStoryDecorator],
};

export default meta;

export const Default = () => {
  return (
    <Tooltip
      label="Now you see me!"
      data-testid={meta.title}
      side="right"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
    >
      <Text
        variant="text-ui-18"
        tx={{
          bg: 'jay500',
          borderRadius: 4,
          color: 'white',
          display: 'inline-block',
          px: 8,
          py: 12,
          textAlign: 'center',
          verticalAlign: 'middle',
          '&:hover': {
            cursor: 'help',
          },
        }}
      >
        Hover over me
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

export const AllSides = () => (
  <Box
    tx={{
      display: 'grid',
      gridTemplate: '50% 50% / 50% 50%',
      width: '50%',
      height: '50%',
      gap: '1rem',
    }}
  >
    <Tooltip
      label="This is rendered above."
      side="top"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
    >
      <Button onClick={noop} variant="button-filled-blue">
        Top
      </Button>
    </Tooltip>
    <Tooltip
      label="This is rendered to the right."
      side="right"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
    >
      <Button onClick={noop} variant="button-filled-blue">
        Right
      </Button>
    </Tooltip>
    <Tooltip
      label="This is rendered to the left."
      side="left"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
    >
      <Button onClick={noop} variant="button-filled-blue">
        Left
      </Button>
    </Tooltip>
    <Tooltip
      label="This is rendered below."
      side="bottom"
      manualControlProps={
        isChromatic() ? { open: true, onOpenChange: noop, defaultOpen: true } : undefined
      }
    >
      <Button onClick={noop} variant="button-filled-blue">
        Bottom
      </Button>
    </Tooltip>
  </Box>
);

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

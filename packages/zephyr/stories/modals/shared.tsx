import * as React from 'react';
import isChromatic from 'chromatic/isChromatic';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

/**
 * @see https://www.chromatic.com/docs/viewports under FAQ "Why is my content being cut off vertically?"
 */
const modalCanvasForChromatic = {
  style: {
    width: '100vw',
    height: '100vh',
  },
};

export const modalStoryDecorator = (storyFn: () => StoryFnReactReturnType) =>
  isChromatic() ? <div {...modalCanvasForChromatic}>{storyFn()}</div> : storyFn();

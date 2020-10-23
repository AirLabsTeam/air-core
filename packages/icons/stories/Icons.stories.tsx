import React from 'react';
import { Story } from '@storybook/react';
import { BoxProps } from '@air/zephyr';

/*
 * We don't want to import the src modules lest we need to maintain a development environment via a
 * custom webpack configuration for Storybook. This will more closely emulate the manner with which
 * our consumers will use our components, also.
 */
// eslint-disable-next-line import/extensions
import * as ProductionBundleIconsMap from '../dist/icons.esm.js';

const iconNames = Object.keys(ProductionBundleIconsMap);
const icons = Object.values(ProductionBundleIconsMap);

export default {
  title: 'Icons',
  component: ProductionBundleIconsMap.Air as any,
  parameters: {
    docs: {
      description: {
        component:
          'Air icons are clear and simple. Each one of them sets the tone and language for our platform and help the user understand the concept it represents.',
      },
    },
  },
};

export const GridOfAllIcons: Story<BoxProps<SVGElement>> = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '3rem 0.5rem',
        margin: '40px 0 40px 0',
        textAlign: 'center',
      }}
    >
      {icons.map((Icon: any, index) => {
        const iconName = iconNames[index];

        return (
          <div key={iconName}>
            <h6 style={{ fontFamily: 'sans-serif' }}>{iconName}</h6>
            <Icon {...args} tx={{ width: '24px' }} />
          </div>
        );
      })}
    </div>
  );
};

GridOfAllIcons.storyName = 'All (Grid View)';

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BoxProps } from '@air/zephyr';

/*
 * We don't want to import the src modules lest we need to maintain a development environment via a
 * custom webpack configuration for Storybook. This will more closely emulate the manner with which
 * our consumers will use our components, also.
 */
import * as ProductionBundleIconsMap from '../dist/icons.esm';
// import data from '../src/IconPathData.json'; // used to get folder names and the stories in those folders

const iconNames = Object.keys(ProductionBundleIconsMap);
const icons = Object.values(ProductionBundleIconsMap);

const meta: Meta<BoxProps<SVGElement>> = {
  title: 'Icon',
  component: ProductionBundleIconsMap.Air as any,
};

export default meta;

const Template: Story<BoxProps<SVGElement>> = (args) => (
  <ProductionBundleIconsMap.Air {...args} width="200" />
);

export const Icon = Template.bind({});

export const GridOfAllIcons: Story<BoxProps<SVGElement>> = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '5rem 2rem',
        margin: '40px 0 40px 0',
      }}
    >
      {icons.map((Icon: any, index) => {
        const iconName = iconNames[index];

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={iconName}
          >
            <h6
              style={{
                fontSize: '14px',
                fontFamily: 'sans-serif',
                margin: '0 0 0.75rem 0',
                textAlign: 'center',
              }}
            >
              {iconName}
            </h6>
            <Icon {...args} tx={{ width: '150px' }} />
          </div>
        );
      })}
    </div>
  );
};

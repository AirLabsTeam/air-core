import { SVGProps } from 'react';
import { Story } from '@storybook/react';

/*
 * We don't want to import the src modules lest we need to maintain a development environment via a
 * custom webpack configuration for Storybook. This will more closely emulate the manner with which
 * our consumers will use our components, also.
 */

import * as ProductionBundleIconsMap from '../dist/icons.esm';

const iconNames = Object.keys(ProductionBundleIconsMap);
const icons = Object.values(ProductionBundleIconsMap);

export default {
  title: 'Icons/Icon/All (Grid View)',
  component: ProductionBundleIconsMap.Air as any,
  parameters: {
    docs: {
      description: {
        component:
          'Icon svgs can now be imported directly inside a React component\
          `import { Air as AirIcon } from \'@air/icons\';`\
          Then you can use the icon as a component and its stroke and fill color should match the current color of the element or container.\
          `<AirIcon width="65" color={theme.colors.jay500} />`  ',
      },
    },
  },
};

export const GridOfAllIcons: Story<SVGProps<SVGElement>> = (args) => {
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
            <Icon {...args} width="32" />
          </div>
        );
      })}
    </div>
  );
};

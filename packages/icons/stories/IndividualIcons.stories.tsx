import React from 'react';
import { storiesOf } from '@storybook/react';

import * as ProductionBundleIconsMap from '../dist/icons.esm';
import data from '../src/IconPathData.json'; // used to get folder names and the stories in those folders

const iconNames = Object.keys(ProductionBundleIconsMap);
const icons = Object.values(ProductionBundleIconsMap);

for (let directory in data) {
  const iconImportedObject = Object.values(data[directory]);
  iconImportedObject.forEach((element) => {
    for (const iconName of iconNames) {
      if (Object.values(element).includes('_'.concat(iconName))) {
        icons.forEach((Icon: any) => {
          if (Icon.name === iconName) {
            storiesOf(`Icons/All (List View)/${directory}`, module).add(`${iconName}`, () => (
              <Icon width="32" />
            ));
          }
        });
      }
    }
  });
}

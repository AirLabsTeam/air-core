import React from 'react';
// import { actions } from '@storybook/addon-actions';
import { Button, ButtonProps } from '../src/Button';

export default {
  title: 'Button',
  component: Button,
  excludeStories: ['testID', 'requiredProps'],
};

export const testID = 'test';

export const requiredProps = {
  children: 'Test!',
  onClick: () => {},
  // ...actions('onClick'),
};

export const WithRequiredProps = (overrideProps?: Partial<ButtonProps>) => (
  <Button {...requiredProps} data-testid={testID} {...overrideProps} />
);

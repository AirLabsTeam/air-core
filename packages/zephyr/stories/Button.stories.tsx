import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Button, Props } from '../src/Button';

export default {
  title: 'Button',
  component: Button,
  excludeStories: ['testID', 'requiredProps'],
};

export const testID = 'test';

export const requiredProps = {
  children: 'Test!',
  ...actions('onClick'),
};

export const WithRequiredProps = (overrideProps?: Partial<Props>) => (
  <Button {...requiredProps} data-testid={testID} {...overrideProps} />
);

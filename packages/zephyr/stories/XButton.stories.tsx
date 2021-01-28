import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, XButton, XButtonProps } from '../src';

const meta: Meta<XButtonProps> = {
  title: 'Zephyr/XButton',
  component: XButton,
};

export default meta;

export const Default: Story<XButtonProps> = ({ onClick, hiddenButtonLabel }) => (
  <Box tx={{ position: 'relative', m: '0 auto', width: '75px', height: '75px' }}>
    <XButton onClick={onClick} hiddenButtonLabel={hiddenButtonLabel} data-testid={meta.title} />
  </Box>
);

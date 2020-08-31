import React from 'react';
import { Heading, HeadingProps } from '../src/Heading';

const meta = {
  title: 'Zephyr/Heading',
  component: Heading,
};

export default meta;

const Template = (args: HeadingProps) => {
  return (
    <>
      <Heading {...args} data-testid={meta.title} />
    </>
  );
};

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  children: 'Heading',
};

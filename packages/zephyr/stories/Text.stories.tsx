import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box } from '../src/Box';
import { Text, TextProps } from '../src/Text';

const meta: Meta<TextProps> = {
  title: 'Zephyr/Text',
  component: Text,
};

export default meta;

const Template: Story<TextProps> = (args) => <Text {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Text',
};

const TextRow = ({ children, variant = 'ui-14' }: Pick<TextProps, 'children' | 'variant'>) => {
  return (
    <Box
      // @ts-ignore
      tx={{
        display: 'flex',
        alignItems: 'center',
        py: 24,
        borderBottom: '1px solid',
        borderColor: 'pigeon100',
        '&:last-child': {
          borderColor: 'transparent',
        },
      }}
    >
      <Text
        sx={{ minWidth: 96, mr: 12, fontWeight: 'semibold', textTransform: 'uppercase' }}
        variant="ui-12"
      >
        {variant}
      </Text>
      <Text
        data-testid={meta.title}
        sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
        variant={variant}
      >
        {children}
      </Text>
    </Box>
  );
};

export const Heading: Story<TextProps> = (args) => {
  return (
    <>
      <TextRow {...args} variant="heading-72" />
      <TextRow {...args} variant="heading-64" />
      <TextRow {...args} variant="heading-56" />
      <TextRow {...args} variant="heading-48" />
      <TextRow {...args} variant="heading-40" />
      <TextRow {...args} variant="heading-32" />
      <TextRow {...args} variant="heading-24" />
      <TextRow {...args} variant="heading-20" />
      <TextRow {...args} variant="heading-18" />
      <TextRow {...args} variant="heading-16" />
    </>
  );
};

Heading.args = {
  children: 'Almost before we knew it, we had left the ground.',
};

export const UI: Story<TextProps> = (args) => {
  return (
    <>
      <TextRow {...args} variant="ui-36" />
      <TextRow {...args} variant="ui-32" />
      <TextRow {...args} variant="ui-24" />
      <TextRow {...args} variant="ui-20" />
      <TextRow {...args} variant="ui-18" />
      <TextRow {...args} variant="ui-16" />
      <TextRow {...args} variant="ui-14" />
      <TextRow {...args} variant="ui-12" />
      <TextRow {...args} variant="ui-10" />
    </>
  );
};

UI.args = {
  children: 'Almost before we knew it, we had left the ground.',
};

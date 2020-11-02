import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box } from '../src/Box';
import { Text, TextProps } from '../src/Text';

const meta: Meta<TextProps> = {
  title: 'Zephyr/Text',
  component: Text,
};

export default meta;

interface PreviewRowProps extends Pick<TextProps, 'children' | 'variant'> {}

const PreviewRow = ({ children, variant = 'text-ui-14' }: PreviewRowProps) => {
  return (
    <Box
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
        tx={{ minWidth: 128, mr: 12, fontWeight: 'semibold', textTransform: 'uppercase' }}
        variant="text-ui-12"
      >
        {variant}
      </Text>
      <Text
        data-testid={meta.title}
        tx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
        variant={variant}
      >
        {children}
      </Text>
    </Box>
  );
};

const Template: Story<TextProps> = (args) => <Text {...args} data-testid={meta.title} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Text',
};

export const Heading: Story<TextProps> = (args) => {
  return (
    <>
      <PreviewRow {...args} variant="text-heading-72" />
      <PreviewRow {...args} variant="text-heading-64" />
      <PreviewRow {...args} variant="text-heading-56" />
      <PreviewRow {...args} variant="text-heading-48" />
      <PreviewRow {...args} variant="text-heading-40" />
      <PreviewRow {...args} variant="text-heading-32" />
      <PreviewRow {...args} variant="text-heading-24" />
      <PreviewRow {...args} variant="text-heading-20" />
      <PreviewRow {...args} variant="text-heading-18" />
      <PreviewRow {...args} variant="text-heading-16" />
    </>
  );
};

Heading.args = {
  children: 'Almost before we knew it, we had left the ground.',
};

Heading.parameters = {
  docs: {
    description: {
      story: `
**Font**: Gelica

**Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)
      `,
    },
  },
};

export const UI: Story<TextProps> = (args) => {
  return (
    <>
      <PreviewRow {...args} variant="text-ui-36" />
      <PreviewRow {...args} variant="text-ui-32" />
      <PreviewRow {...args} variant="text-ui-24" />
      <PreviewRow {...args} variant="text-ui-20" />
      <PreviewRow {...args} variant="text-ui-18" />
      <PreviewRow {...args} variant="text-ui-16" />
      <PreviewRow {...args} variant="text-ui-14" />
      <PreviewRow {...args} variant="text-ui-12" />
      <PreviewRow {...args} variant="text-ui-10" />
    </>
  );
};

UI.args = {
  children: 'Almost before we knew it, we had left the ground.',
};

UI.parameters = {
  docs: {
    description: {
      story: `
**Font**: SF Text Pro

**Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
      `,
    },
  },
};

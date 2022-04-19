import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../src/Box';
import {
  TextareaPrimitive,
  TextareaPrimitiveProps,
  TextareaSizeOption,
  textareaSizeStyles,
} from '../../src/Forms/TextareaPrimitive';
import { LabelPrimitive } from '../../src/Forms/LabelPrimitive';

export default {
  title: 'Zephyr/Forms/TextareaPrimitive',
  component: TextareaPrimitive,
  parameters: {
    docs: {
      description: {
        component:
          'This component is a core `textarea`.<br><br> Use `rows` prop (default `2`) to control height unless you specifically need finer control.',
      },
      source: {
        code: `/**
    * Unfortunately, we can't render source code correctly on the initial story.
    * Please see https://github.com/storybookjs/storybook/issues/12022
    */`,
      },
    },
  },
} as Meta;

const sizes = Object.keys(textareaSizeStyles) as TextareaSizeOption[];

const Template: Story<TextareaPrimitiveProps> = (args) => {
  return <TextareaPrimitive {...args} tx={{ width: 200, mr: 12 }} />;
};

export const Default = Template.bind({});

export const Sizes: Story<TextareaPrimitiveProps> = () => {
  const [value, setValue] = useState('');

  return (
    <Box tx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      {sizes.map((size) => {
        const isLarge = size === 'large';
        const label = `Single Row ${isLarge ? '(Large)' : '(Small)'}`;
        const fieldId = `default_size_${isLarge ? 'large' : 'small'}`;

        return (
          <Box key={size}>
            <LabelPrimitive for={fieldId} showAsterisk tx={{ mb: 4, Asterisk: { color: 'red' } }}>
              {label}
            </LabelPrimitive>
            <TextareaPrimitive
              id={fieldId}
              onChange={(e) => setValue(e.target.value)}
              required
              rows={1}
              tx={{ mr: 24, mb: 24 }}
              value={value}
              size={size}
            />
          </Box>
        );
      })}
    </Box>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: 'Sizes shown with `rows=1` and a `LabelPrimitive`.',
    },
  },
};

export const Disabled: Story<TextareaPrimitiveProps> = (args) => {
  return (
    <Box tx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <TextareaPrimitive disabled id={'textarea-disabled'} required {...args} />
    </Box>
  );
};

export const Placeholder: Story<TextareaPrimitiveProps> = (args) => {
  return (
    <Box tx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <TextareaPrimitive
        placeholder={'this is a placeholder'}
        id={'textarea-placeholder'}
        required
        {...args}
      />
    </Box>
  );
};

export const Unstyled: Story<TextareaPrimitiveProps> = (args) => {
  return (
    <Box tx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <TextareaPrimitive variant="unstyled" id={'textarea-unstyled'} required {...args} />
    </Box>
  );
};

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../src/Box';
import { Text } from '../src/Text';
import { colors } from '../src/theme/colors';

const meta: Meta = {
  title: 'Zephyr/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'We will eventually add documentation regarding these colors, and group them better visually!',
      },
    },
  },
};

export default meta;

export const ZephyrColors: Story = () => {
  return (
    <Box>
      {Object.keys(colors).map((color) => {
        return (
          <Box key={color}>
            <Text variant="text-ui-16" as="h6">
              {color}
            </Text>

            <Box
              tx={{
                backgroundColor: color,
                border: '1px solid rgba(0,0,0,0.10)',
                width: '100%',
                height: '50px',
              }}
              key={color}
            >
              &nbsp;
            </Box>

            <br />
          </Box>
        );
      })}
    </Box>
  );
};

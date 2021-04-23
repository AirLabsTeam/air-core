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
          <Box key={color} tx={{ mb: 24 }}>
            <Text as="h6" tx={{ mb: 8, textTransform: 'uppercase' }} variant="text-ui-14">
              {color} - {colors[color as keyof typeof colors]}
            </Text>

            <Box
              tx={{
                backgroundColor: color,
                border: '1px solid rgba(0,0,0,0.10)',
                width: '100%',
                height: '50px',
                borderRadius: 4,
              }}
              key={color}
            >
              &nbsp;
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

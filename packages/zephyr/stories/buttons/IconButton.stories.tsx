import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs/blocks';
import { Bell } from '@air/icons';
import { capitalize } from 'lodash';
import { Box, ButtonSize, ButtonVariantName, IconButton, IconButtonProps, Text } from '../../src';

const meta: Meta<IconButtonProps> = {
  title: 'Zephyr/Button/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: `\`<IconButton>\` is meant for use when the only content within the button is an icon. Sometimes,
an \`<IconButton>\` is rendered within a \`<Tooltip>\` component. In those instances, the \`hasTooltip\` prop should
be "true" so that the assistive label is not read twice to users with assistive technology.`,
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories includePrimary title="" />
        </>
      ),
    },
  },
};

export default meta;

const sizes: ButtonSize[] = ['extra-small', 'small', 'medium', 'large'];
const variants: ButtonVariantName[] = [
  'button-filled-blue',
  'button-filled-destructive',
  'button-filled-grey',
  'button-ghost-blue',
  'button-ghost-destructive',
  'button-ghost-grey',
  'button-outline-blue',
  'button-outline-grey',
  'button-unstyled',
];

export const AllPossibleIconButtons: Story<IconButtonProps> = () => {
  return (
    <Box tx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      {variants.map((variant) => {
        return (
          <Box tx={{ m: 16 }} key={variant}>
            <Text variant="text-ui-16" tx={{ mb: 12 }}>
              Variant: {variant}
            </Text>

            <Box tx={{ display: 'flex', alignItems: 'flex-start', mb: 24 }}>
              {sizes.map((size) => {
                const label = capitalize(size);

                return (
                  <Box
                    tx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      mr: 32,
                      mb: 16,
                    }}
                    key={`${variant}_${size}`}
                  >
                    <Text variant="text-ui-12" tx={{ mb: 8 }}>
                      {label}
                    </Text>

                    <IconButton
                      hasTooltip={false}
                      hiddenLabel="See Notifications"
                      icon={Bell}
                      size={size}
                      variant={variant}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

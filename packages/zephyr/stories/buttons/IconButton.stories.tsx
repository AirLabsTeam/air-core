import { Meta, Story } from '@storybook/react';
import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs';
import { Bell } from '@air/icons';
import { capitalize } from 'lodash';
import {
  allButtonSizes,
  allButtonVariants,
  Box,
  IconButton,
  IconButtonProps,
  Text,
} from '../../src';

const meta: Meta<IconButtonProps> = {
  title: 'Zephyr/Button/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component:
          '`<IconButton>` is meant for use when the only content within the button is an icon. You can pass it a tooltip if you would like, using the `tooltip` prop.',
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

export const AllPossibleIconButtons: Story<IconButtonProps> = () => {
  return (
    <Box tx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      {allButtonVariants.map((variant) => {
        return (
          <Box tx={{ m: 16 }} key={variant}>
            <Text variant="text-ui-16" tx={{ mb: 12 }}>
              Variant: {variant}
            </Text>

            <Box tx={{ display: 'flex', alignItems: 'flex-start', mb: 24 }}>
              {allButtonSizes.map((size) => {
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
                      icon={Bell}
                      size={size}
                      variant={variant}
                      tooltip={{ label: 'Bell', side: 'top' }}
                    >
                      See Notifications
                    </IconButton>
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

import { Check as CheckIcon, Download as DownloadIcon } from '@air/icons';
import { Meta, Story } from '@storybook/react';

import { Box } from '../../../src/Box';
import {
  ActionSheetItem,
  ActionSheetItemProps,
} from '../../../src/ActionSheet/components/ActionSheetItem';
import { Text } from '../../../src/Text';

export default {
  title: 'Zephyr/ActionSheet/Components/ActionSheetItem',
  component: ActionSheetItem,
} as Meta<ActionSheetItemProps>;

const Template: Story<ActionSheetItemProps> = (args) => <ActionSheetItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'ActionSheet item',
  tx: {
    width: 200,
  },
};

export const withDescription = Template.bind({});

withDescription.args = {
  description:
    'Pastry cheesecake oat cake dragée. Carrot cake tiramisu cake jelly-o lemon drops icing marshmallow gingerbread. Cake toffee donut.',
  label: 'ActionSheet item',
  leftAdornment: <Box as={DownloadIcon} tx={{ display: 'block', width: 16 }} />,
  tx: {
    width: 320,
  },
};

withDescription.parameters = {
  docs: {
    description: {
      story:
        'When a description is provided, the styling of the ActionSheet item changes. The ActionSheet item container will go from a fixed height of either `32px` or `36px` to `auto` and alignemnt from `center` to `flex-start`.',
    },
  },
};

export const withLeftAdornment = Template.bind({});

withLeftAdornment.args = {
  label: 'ActionSheet item',
  leftAdornment: <Box as={DownloadIcon} tx={{ display: 'block', width: 16 }} />,
  tx: {
    width: 200,
  },
};

withLeftAdornment.parameters = {
  docs: {
    description: {
      story:
        'The left adornment is often used to display an icon that represents the ActionSheet item.',
    },
  },
};

export const withRightAdornment = Template.bind({});

withRightAdornment.args = {
  label: 'ActionSheet item',
  rightAdornment: <Box as={CheckIcon} tx={{ display: 'block', width: 12 }} />,
  tx: {
    width: 200,
  },
};

withRightAdornment.parameters = {
  docs: {
    description: {
      story:
        'The right adornment is often used to display an icon that represents the state of the ActionSheet item (checked/unchecked).',
    },
  },
};

export const withDividerBottom = Template.bind({});

withDividerBottom.args = {
  hasDividerBottom: true,
  label: 'ActionSheet item',
};

withDividerBottom.parameters = {
  docs: {
    description: {
      story:
        'The `hasDividerBottom` prop will add a divider to the bottom of the ActionSheet item.',
    },
  },
};

export const withDividerTop = Template.bind({});

withDividerTop.args = {
  hasDividerTop: true,
  label: 'ActionSheet item',
};

withDividerTop.parameters = {
  docs: {
    description: {
      story: 'The `hasDividerTop` prop will add a divider to the top of the ActionSheet item.',
    },
  },
};

export const withDividerTopAndBottom = Template.bind({});

withDividerTopAndBottom.args = {
  hasDividerBottom: true,
  hasDividerTop: true,
  label: 'ActionSheet item',
};

withDividerTopAndBottom.parameters = {
  docs: {
    description: {
      story:
        'The `hasDividerTop` and `hasDividerBottom prop will add a divider to the top and bottom of the ActionSheet item.',
    },
  },
};

export const withCustomChildren = Template.bind({});

withCustomChildren.args = {
  children: (
    <>
      <Text
        tx={{
          display: 'inline-block',
          backgroundColor: 'flamingo100',
          px: 8,
          mr: 4,
          borderRadius: 4,
          fontWeight: 'medium',
        }}
        variant="text-ui-12-uppercase"
      >
        Custom
      </Text>
      <Text
        tx={{
          display: 'inline-block',
          backgroundColor: 'jay100',
          px: 8,
          borderRadius: 4,
          fontWeight: 'medium',
        }}
        variant="text-ui-12-uppercase"
      >
        Children
      </Text>
    </>
  ),
};

withCustomChildren.parameters = {
  docs: {
    description: {
      story:
        'We recommend against passing a custom child to the ActionSheet item unless it’s absolutely necessary to do so. ',
    },
  },
};

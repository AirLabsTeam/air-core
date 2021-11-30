import { Gear } from '@air/icons';
import { Story, Meta } from '@storybook/react';
import { IconButton, IconButtonProps } from '../src/IconButton';
import { darkTheme } from '../src/stitches.config';

const meta: Meta<IconButtonProps> = {
  title: 'Stitches/IconButton',
  component: IconButton,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Switch between dark and light mode for the story. **(Storybook setting)**',
      defaultValue: 'light',
    },
    appearance: {
      control: {
        type: 'select',
        options: ['filled', 'ghost', 'outline'],
      },
      defaultValue: 'filled',
    },
    color: {
      control: {
        type: 'select',
        options: ['blue', 'grey', 'destructive'],
      },
      defaultValue: 'blue',
    },
    size: {
      control: {
        type: 'select',
        options: ['extra-small', 'small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
  },
};

export default meta;

export const Default: Story<IconButtonProps & { theme: 'dark' | 'light' }> = (args) => {
  const isDarkMode = args.theme === 'dark';

  return (
    <div
      className={isDarkMode ? darkTheme : undefined}
      style={{ backgroundColor: isDarkMode ? '#1C1C1C' : '#FFFFF', padding: 64 }}
    >
      <IconButton {...args} data-testid={meta.title} />
    </div>
  );
};

Default.args = {
  icon: Gear,
  tooltip: {
    label: 'Tooltip',
  },
};

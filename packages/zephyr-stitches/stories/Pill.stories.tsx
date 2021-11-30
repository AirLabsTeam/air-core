import { Story, Meta } from '@storybook/react';
import { Pill, PillProps } from '../src/Pill';
import { darkTheme } from '../src/stitches.config';

const meta: Meta<PillProps> = {
  title: 'Stitches/Pill',
  component: Pill,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Switch between dark and light mode for the story. **(Storybook setting)**',
      defaultValue: 'light',
    },
    appearance: {
      control: {
        type: 'select',
        options: ['filled', 'outline'],
      },
      defaultValue: 'filled',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
      defaultValue: 'small',
    },
  },
};

export default meta;

export const Default: Story<PillProps & { theme: 'dark' | 'light' }> = (args) => {
  const isDarkMode = args.theme === 'dark';

  return (
    <div
      className={isDarkMode ? darkTheme : undefined}
      style={{ backgroundColor: isDarkMode ? '#1C1C1C' : '#FFFFF', padding: 64 }}
    >
      <Pill {...args} data-testid={meta.title} />
    </div>
  );
};

Default.args = {
  children: 'Pill',
};

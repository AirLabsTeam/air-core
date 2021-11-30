import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import { Button } from '../src/Button';
import { Tooltip, TooltipProps } from '../src/Tooltip';
import { darkTheme } from '../src/stitches.config';

const meta: Meta<TooltipProps> = {
  title: 'Stitches/Tooltip',
  component: Tooltip,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Switch between dark and light mode for the story. **(Storybook setting)**',
      defaultValue: 'light',
    },
  },
};

export default meta;

export const Default: Story<TooltipProps & { theme: 'dark' | 'light' }> = (args) => {
  useEffect(() => {
    if (args.theme === 'dark') {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }

    return () => document.body.classList.remove(darkTheme);
  }, [args.theme]);

  const isDarkMode = args.theme === 'dark';

  return (
    <div
      className={isDarkMode ? darkTheme : undefined}
      style={{ backgroundColor: isDarkMode ? '#1C1C1C' : '#FFFFF', padding: 64 }}
    >
      <Tooltip {...args} data-testid={meta.title} />
    </div>
  );
};

Default.args = {
  children: <Button>Button</Button>,
  label: 'This is a label',
};

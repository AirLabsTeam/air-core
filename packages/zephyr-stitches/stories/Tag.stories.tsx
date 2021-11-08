import { Story, Meta } from '@storybook/react';
import { Close } from '@air/icons';
import { Tag, TagProps } from '../src/Tag';
import { darkTheme } from '../src/stitches.config';
import { Box } from '../src/Box';

const meta: Meta<TagProps> = {
  title: 'Stitches/Tag',
  component: Tag,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Switch between dark and light mode for the story. **(Storybook setting)**',
      defaultValue: 'light',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'grey',
          'teal',
          'red',
          'yellow',
          'blue',
          'purple',
          'green',
          'orange',
          'pink',
          'none',
        ],
      },
      defaultValue: 'grey',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'small',
    },
  },
};

export default meta;

export const Default: Story<TagProps & { theme: 'dark' | 'light' }> = (args) => {
  const isDarkMode = args.theme === 'dark';

  return (
    <div
      className={isDarkMode ? darkTheme : undefined}
      style={{ backgroundColor: isDarkMode ? '#1C1C1C' : '#FFFFF', padding: 64 }}
    >
      <Tag {...args} data-testid={meta.title} />
    </div>
  );
};

Default.args = {
  children: 'Field Value',
  adornmentRight: <Box as={Close} css={{ display: 'block', width: 12 }} />,
};

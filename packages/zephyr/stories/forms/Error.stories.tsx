import { Story, Meta } from '@storybook/react';
import { Error, ErrorProps } from '../../src/Forms/Error';

const meta: Meta<ErrorProps> = {
  title: 'Zephyr/Forms/Error',
  component: Error,
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: Story<ErrorProps> = (args) => <Error {...args} />;

Default.args = {
  errorText: 'Some error',
  isErrorVisible: true,
  id: 'test',
};

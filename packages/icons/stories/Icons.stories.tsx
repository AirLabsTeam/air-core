import React from 'react';
import { Story, Meta, storiesOf } from '@storybook/react';
import { Icon, IconProps, Icons, IconName } from '../src/index';

const meta: Meta<IconProps> = {
  title: 'Icons/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'some component **MarkDown**',
      },
    },
  },
};

export default meta;

const Template: Story<IconProps> = (args) => <Icon {...args} data-testid={meta.title} />;

export const Default = Template.bind({});
Default.args = { name: 'Info' };

const icons = Object.keys(Icons);

storiesOf('Icons', module).add('All Icons (Grid View)', (args: IconProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        background: '#f6f9fc',
      }}
    >
      {icons.map((icon: IconName) => {
        return (
          <div style={{ display: 'grid', margin: '1.25rem' }} key={icon}>
            <div
              style={{
                width: '100px',
                height: '100px',
                margin: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h6
                style={{
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                  margin: '0 0 0.75rem 0',
                  textAlign: 'center',
                }}
              >
                {icon}
              </h6>
              <Icon {...args} name={icon} />
            </div>
          </div>
        );
      })}
    </div>
  );
});

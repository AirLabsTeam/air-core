import React from 'react';
import { Meta } from '@storybook/react';
import { Icon, IconProps, Icons, IconName } from '../src/index';

const meta: Meta<IconProps> = {
  title: 'Icons/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          "Each `Icon` in the Air Icon System, and component props below. They are rendered in the component's fallback styling, which may not be the default styling for each icon. The `ClassName` prop is missing from this list but accessible to the component.",
      },
    },
  },
};

export default meta;

const icons = Object.keys(Icons);

export const GridOfAllIcons = (args: IconProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '5rem 2rem',
        margin: '40px 0 40px 0',
      }}
    >
      {icons.map((icon: IconName) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={icon}
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
        );
      })}
    </div>
  );
};

import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { Text } from '../src/Text';
import { EditableText, EditableTextProps } from '../src/EditableText';

export default {
  title: 'Zephyr/EditableText',
  component: EditableText,
  parameters: {
    docs: {
      description: {
        component:
          'The `EditableText` component extends the `Text` component and contains both a `button` and `textarea` that gets conditionally rendered based on the `isEditing` state. Under the hood, it uses [formik](https://formik.org/) to manage the form state.',
      },
    },
  },
} as Meta<EditableTextProps>;

const Template: Story<EditableTextProps> = (args) => {
  const [formValue, setFormValue] = useState(args?.value ?? '');

  return (
    <>
      <EditableText
        placeholder="Click to add a description"
        {...args}
        onSubmit={(value) => setFormValue(value['editable-text-value'])}
        value={formValue}
      />
      {formValue && (
        <Text tx={{ mt: 24 }} variant={args.variant ?? 'text-ui-12'}>
          {formValue}
        </Text>
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Editable text 1',
};

export const TextBehavior = Template.bind({});

TextBehavior.args = {
  behavior: 'text',
  label: 'Editable text 2',
};

TextBehavior.parameters = {
  docs: {
    description: {
      story:
        'You can change the behavior of the component to match that of a `Text` component by using the `behavior` prop and setting the value to `text`. When the behavior is `text`, there will be a negative margin that gets applied to the `div`.',
    },
  },
};

export const ControlledState = Template.bind({});

ControlledState.args = {
  isEditing: true,
  label: 'Editable text 3',
};

ControlledState.parameters = {
  docs: {
    description: {
      story: 'You can control the edit state for the EditableText by using the `isEditing` prop.',
    },
  },
};

export const TextVariants = Template.bind({});

TextVariants.args = {
  label: 'Editable text 4',
  variant: 'text-ui-24',
};

TextVariants.parameters = {
  docs: {
    description: {
      story:
        'The `EditableText` component extends the `Text` component which allows you to control the font styles using the same variants.',
    },
  },
};

export const DefaultValue = Template.bind({});

DefaultValue.args = {
  label: 'Editable text 5',
  value: 'Title',
};

DefaultValue.parameters = {
  docs: {
    description: {
      story: 'Setting a default value will render it as a child inside the button.',
    },
  },
};

export const MaxLength = Template.bind({});

MaxLength.args = {
  label: 'Editable text 6',
  maxLength: 10,
  value: 'Title',
};

MaxLength.parameters = {
  docs: {
    description: {
      story: 'Setting a max length will prevent the user from inputting more than the set number.',
    },
  },
};

export const CustomStyles = Template.bind({});

CustomStyles.args = {
  label: 'Editable text 7',
  tx: {
    display: 'flex',
    width: '100%',
    minHeight: 200,
    fontWeight: 'medium',

    EditableTextButton: {
      '&:hover': {
        backgroundColor: 'flamingo200',
      },
    },

    EditableTextTextarea: {
      backgroundColor: 'macaw400',
      color: 'white',
    },
  },
};

CustomStyles.parameters = {
  docs: {
    description: {
      story:
        'When applying custom styles to the `EditableText` component, you should treat it as both a `textarea` and `button`. Since styles applied to this component will directly affect both.',
    },
  },
};

import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../src/Button';

const meta: Meta<ButtonProps> = {
  title: 'Zephyr/Button/Variant: Outline Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Outline buttons are a rarely used button style. They are primarily used as a toggle, secondary button (marketing), or field style button. These often will have drop-down menus or on/off states like in filters. If used as a secondary button, it is in special cases when paired with a primary filled button and another fill or ghost button is not appropriate. When buttons appear in the same row as other buttons they should all be the same size/height, but buttons in different areas can be different sizes. Filled buttons are best used at sizes **small** to **large.**',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories includePrimary />
        </>
      ),
    },
  },
};

export default meta;

export const OutlineBlueButton = () => (
  <>
    <Button size="medium" variant="button-outline-blue">
      Outline blue button
    </Button>
    <br />
    <br />
    <Button isLoading size="medium" variant="button-outline-blue">
      Outline blue button
    </Button>
    <br />
    <br />
  </>
);

OutlineBlueButton.parameters = {
  docs: {
    description: {
      story:
        'Pairs with a blue primary button (see marketing site). Should be used more sparsely than grey outline buttons.',
    },
  },
};

OutlineBlueButton.storyName = 'Outline (Blue)';

export const OutlineGreyButton = () => (
  <>
    <Button size="medium" variant="button-outline-grey">
      Outline grey button
    </Button>
    <br />
    <br />
    <Button isLoading size="medium" variant="button-outline-grey">
      Outline grey button
    </Button>
    <br />
    <br />
  </>
);

OutlineGreyButton.parameters = {
  docs: {
    description: {
      story:
        'Grey ghost buttons are a more subtle, repeatable versions of their blue counterparts. Pairs nicely with filled buttons as well',
    },
  },
};

OutlineGreyButton.storyName = 'Outline (Grey)';

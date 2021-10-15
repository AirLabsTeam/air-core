import { Meta, Story } from '@storybook/react';
import { ButtonLink, ButtonLinkProps } from '../../src/ButtonLink';

const meta: Meta<ButtonLinkProps> = {
  title: 'Zephyr/Button/ButtonLink',
  component: ButtonLink,
};

export default meta;

export const Example: Story<ButtonLinkProps> = (args) => {
  return <ButtonLink {...args} />;
};

Example.args = {
  children: 'Button link',
};

export const BlueButtonLink = () => (
  <>
    <ButtonLink size="medium" variant="button-link-blue">
      Blue button link
    </ButtonLink>
    <br />
    <br />
    <ButtonLink size="medium" disabled variant="button-link-blue">
      Disabled blue button link
    </ButtonLink>
  </>
);

export const GreyButtonLink = () => (
  <>
    <ButtonLink size="medium" variant="button-link-grey">
      Grey button link
    </ButtonLink>
    <br />
    <br />
    <ButtonLink size="medium" disabled variant="button-link-grey">
      Disabled grey button link
    </ButtonLink>
  </>
);

export const BlueButtonLinkAsAnchor = () => (
  <>
    <ButtonLink
      as="a"
      href="https://air.inc/"
      rel="noopener noreferrer"
      target="_blank"
      size="medium"
      variant="button-link-blue"
    >
      Blue anchor link
    </ButtonLink>
    <br />
    <br />
    <ButtonLink
      as="a"
      href="https://air.inc/"
      rel="noopener noreferrer"
      target="_blank"
      size="medium"
      disabled
      variant="button-link-blue"
    >
      Disabled blue anchor link
    </ButtonLink>
  </>
);

export const GreyButtonLinkAsAnchor = () => (
  <>
    <ButtonLink
      as="a"
      href="https://air.inc/"
      rel="noopener noreferrer"
      target="_blank"
      size="medium"
      variant="button-link-grey"
    >
      Grey anchor link
    </ButtonLink>
    <br />
    <br />
    <ButtonLink
      as="a"
      href="https://air.inc/"
      rel="noopener noreferrer"
      target="_blank"
      size="medium"
      disabled
      variant="button-link-grey"
    >
      Disabled grey anchor link
    </ButtonLink>
  </>
);

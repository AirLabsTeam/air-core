import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import isChromatic from 'chromatic/isChromatic';
import { Box, Button, Modal, ModalProps, Text } from '../../src';

/**
 * @see https://www.chromatic.com/docs/viewports under FAQ "Why is my content being cut off vertically?"
 */
const modalCanvasForChromatic = {
  style: {
    width: '100vw',
    height: '100vh',
  },
};

const meta: Meta<ModalProps> = {
  title: 'Zephyr/Modals/Modal',
  component: Modal,
  decorators: [
    (storyFn) => (isChromatic() ? <div {...modalCanvasForChromatic}>{storyFn()}</div> : storyFn()),
  ],
};

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} data-testid={meta.title} />;

export const Default = Template.bind({}) as typeof Template;

Default.parameters = {
  docs: {
    // eslint-disable-next-line react/display-name
    page: () => (
      <>
        {/* Because the modal is a portal that spans the content of the page, we want to not make the args table
        interactive by hiding the contorls themselves. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .docblock-argstable-head > tr > th:last-child > span {
                color: transparent;
              }
              .docblock-argstable-body > tr > td:last-child > *{
                display: none;
              }
            `,
          }}
        />
        <Title />
        <Subtitle />
        <Description />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
    description: {
      component: `We care about accessibility at Air. The API necessary to leverage the base Modal component reflects
      our desire to have accessible design be a concious decision on every implementation. If our simpler modals do not
      account for your use case, and you need to use the base Modal component, you will be forced to understand and
      decide whether or not your modal has a role of "dialog" or "alertdialog". Admittedly, this decision comes at the
      cost of conflicting props. For example, since the conditional for rendering the "X" close button and passing the
      callback used to dismiss the modal are both optional, you could attempt to render the "X" close button without
      giving it the power to close the modal - which is silly. To counteract this detriment, there exist dev-only
      errors for incorrect prop combinations. Focus on understanding what type of modal you're rendering, pass the
      required props, and resolve errors as they throw during development.`,
    },
  },
  chromatic: { disable: true },
};

export const TypicalModal: Story<ModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Modal
      </Button>

      <Modal
        isOpen={isModalOpen}
        onDismiss={closeModal}
        isAlertModal={false}
        modalLabel="Do you believe in life after love?"
        modalDescription={
          <Text variant="text-ui-16">
            {`I can hear something inside me say: "I really don't think you're strong enough, no!"`}
          </Text>
        }
        withCloseButton
      />
    </>
  );
};

TypicalModal.parameters = {
  docs: {
    description: {
      story: 'Just to prove that the modal can open and close when integrated properly!',
    },
  },
};

export const AlertModal: Story<ModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteEverything = () => {
    window.alert(`I can't believe you've done this...`);
    closeModal();
  };

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Alert Modal
      </Button>

      <Modal
        isOpen={isModalOpen}
        onDismiss={closeModal}
        isAlertModal
        leastDestructiveRef={dismissButtonRef}
        modalLabel="Warning!"
        modalDescription="You are about to delete everything you know and love... 😰&nbsp; Are you sure about this?"
      >
        <Box tx={{ display: 'flex', justifyContent: 'flex-end', mt: 32 }}>
          <Button
            onClick={closeModal}
            ref={dismissButtonRef}
            variant="button-ghost-grey"
            tx={{ mr: 12 }}
          >
            Nevermind
          </Button>

          <Button onClick={deleteEverything} variant="button-filled-destructive">
            Delete Everything
          </Button>
        </Box>
      </Modal>
    </>
  );
};

AlertModal.parameters = {
  docs: {
    description: {
      story: `Notice how the implementation details differ slightly when using an "Alert" Modal. Firstly, the escape
      key (nor clicking on the overlay) does not dismiss the modal. Secondly, you are forced to provide a ref to the
      least destructive action to initilize focus once the modal mounts.`,
    },
  },
};

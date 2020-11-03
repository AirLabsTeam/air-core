import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { Box, Button, Modal, ModalProps } from '../../src';

const meta: Meta<ModalProps> = {
  title: 'Zephyr/Modals/Modal',
  component: Modal,
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
};

export const TypicalModal: Story<ModalProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Modal
      </Button>

      <Modal
        isOpen={isModalOpen}
        onDismiss={closeModal}
        modalLabel={<h2>Do you believe in life after love?</h2>}
        modalDescription={
          <p>
            I can hear something inside me say: {"I really don't think you're strong enough, no!"}
          </p>
        }
        isAlertModal={false}
        withCloseButton
        tx={{
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 0 1px 1px #AAAAAA',
          margin: '1rem auto',
          padding: '1rem',
          maxWidth: '750px',
        }}
      >
        <Box tx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="button" onClick={closeModal} variant="button-filled-blue">
            Okay
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

TypicalModal.args = {};

TypicalModal.parameters = {
  docs: {
    description: {
      story: 'Just to prove that the modal can open and close when integrated properly!',
    },
  },
};

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { Button } from '../../src/Button';
import { TransactionModal, TransactionModalProps } from '../../src/Modals/TransactionModal';
import { modalStoryDecorator } from './shared';

const meta: Meta<TransactionModalProps> = {
  title: 'Zephyr/Modals/Abstractions/TransactionModal',
  component: TransactionModal,
  decorators: [modalStoryDecorator],
};

export default meta;

export const Default: Story<TransactionModalProps> = (args) => <TransactionModal {...args} />;

Default.parameters = {
  docs: {
    description: {
      component: `This is an abstraction purely to maintain style consistency and a better developer experience than
      the more flexible base modal component.\nPlease see examples below the documentation table.`,
    },
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
  },
  chromatic: { disable: true },
};

export const TypicalTransactionModal: Story<TransactionModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Transaction Modal
      </Button>

      <TransactionModal
        isOpen={isModalOpen}
        onDismiss={closeModal}
        modalLabel="Are you sure?"
        modalDescription="This is a transaction! We want to confirm that you want to do this, before you do it."
        primaryCTA={{ children: `I'm sure!`, onClick: closeModal }}
        secondaryCTA={{ children: 'Nevermind', onClick: closeModal }}
      />
    </>
  );
};

TypicalTransactionModal.parameters = {
  docs: {
    description: {
      story:
        'Just to prove that the transaction modal can open and close when integrated properly!',
    },
  },
};

export const DestructiveActionModal: Story<TransactionModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteEverything = () => {
    window.alert(`I can't believe you've done this...`);
    closeModal();
  };

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Transaction Modal
      </Button>

      <TransactionModal
        isOpen={isModalOpen}
        onDismiss={closeModal}
        modalLabel="Delete everything"
        modalDescription={`This will permanently erase every good mememory you've ever had.`}
        primaryCTA={{
          children: `Delete`,
          onClick: deleteEverything,
          variant: 'button-filled-destructive',
        }}
        secondaryCTA={{ children: 'Nevermind', onClick: closeModal }}
      />
    </>
  );
};

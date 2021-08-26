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
} from '@storybook/addon-docs';
import { AnimatePresence } from 'framer-motion';
import { Checkbox } from '../../src/Forms/Checkbox';
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
      the more flexible base modal component.\nPlease see examples below the documentation table. Please read the
      docs on our base Modal component to understand further.`,
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

      <AnimatePresence>
        {isModalOpen && (
          <TransactionModal
            onDismiss={closeModal}
            modalLabel="Are you sure?"
            modalDescription="This is a transaction! We want to confirm that you want to do this, before you do it."
            primaryCTA={{
              children: `I'm sure!`,
              onClick: closeModal,
              'data-testid': 'CUSTOM_PRIMARY_CTA_TEST_ID',
            }}
            secondaryCTA={{ children: 'Nevermind', onClick: closeModal }}
          />
        )}
      </AnimatePresence>
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

      <AnimatePresence>
        {isModalOpen && (
          <TransactionModal
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
        )}
      </AnimatePresence>
    </>
  );
};

export const TertiaryTransactionModal: Story<TransactionModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const [isChecked, setIsChecked] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Transaction Modal
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <TransactionModal
            tertiaryCTA={
              <Checkbox
                label="Apply for all items"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
            }
            onDismiss={closeModal}
            modalLabel="Uh oh! You have duplicates"
            modalDescription="3 out of 3 of the items you'd like to upload already exist. What would you like to do for item 1 of 3?"
            primaryCTA={{ children: `Upload Again`, onClick: closeModal }}
            secondaryCTA={{ children: "Don't Upload", onClick: closeModal }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

TertiaryTransactionModal.parameters = {
  docs: {
    description: {
      story:
        "We want to emphasize and reiterate that the tertiary format is optimal when you'd like to have the typical (2) button set, in addition to some other form of CTA.",
    },
  },
};

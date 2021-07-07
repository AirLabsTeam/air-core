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
import { AnimatePresence } from 'framer-motion';
import { AnnouncementModal, AnnouncementModalProps } from '../../src/Modals/AnnouncementModal';
import { Button } from '../../src/Button';
import { modalStoryDecorator } from './shared';

const meta: Meta<AnnouncementModalProps> = {
  title: 'Zephyr/Modals/Abstractions/AnnouncementModal',
  component: AnnouncementModal,
  decorators: [modalStoryDecorator],
};

export default meta;

export const Default: Story<AnnouncementModalProps> = (args) => <AnnouncementModal {...args} />;

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

export const TypicalAnnouncementModal: Story<AnnouncementModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Announcement Modal
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <AnnouncementModal
            imageSource="https://air.inc/_next/static/images/no-boards-or-assets-f8604f96572c26585d2040ebe7461a9e.png"
            onDismiss={closeModal}
            modalLabel="Acknowledge this!"
            modalDescription="This is an announcement! There's some cool new thing you need to be aware of."
            cta="Acknowledged!"
          />
        )}
      </AnimatePresence>
    </>
  );
};

TypicalAnnouncementModal.parameters = {
  docs: {
    description: {
      story:
        'Just to prove that the announcement modal can open and close when integrated properly!',
    },
  },
};

export const FeatureBlockModal: Story<AnnouncementModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Try This
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <AnnouncementModal
            imageSource="https://air.inc/_next/static/images/no-boards-or-assets-f8604f96572c26585d2040ebe7461a9e.png"
            onDismiss={closeModal}
            modalLabel="Pay up!"
            modalDescription="To do this, you need to give us $1,000,000. Do so, or this little bird gets it!"
            cta="Upgrade plan!"
            withCloseButton={false}
          />
        )}
      </AnimatePresence>
    </>
  );
};

FeatureBlockModal.parameters = {
  docs: {
    description: {
      story: `When using the announcement modal to bring attention to functionality being blocked or it is imperative
      for the user to read the modal content, simply set "withCloseButton" to false. You can only close this modal by
      clicking the button or hitting enter, since it's an alert modal.`,
    },
  },
};

export const WithCustomCTA: Story<AnnouncementModalProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(isChromatic());
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        {`See What's New Today`}
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <AnnouncementModal
            imageSource="https://air.inc/_next/static/images/no-boards-or-assets-f8604f96572c26585d2040ebe7461a9e.png"
            onDismiss={closeModal}
            modalLabel="What is the meaning of life?"
            modalDescription="We have all wondered this question. After many hours of work, the engineers at Air have figured out the meaning of life"
            cta={{
              href: 'https://en.wikipedia.org/wiki/42_(number)',
              children: 'Tell me now!',
              target: '_blank',
            }}
            withCloseButton={false}
          />
        )}
      </AnimatePresence>
    </>
  );
};

WithCustomCTA.parameters = {
  docs: {
    description: {
      story: `When using the announcement modal to bring attention to functionality being blocked or it is imperative
      for the user to read the modal content, simply set "withCloseButton" to false. You can only close this modal by
      clicking the button or hitting enter, since it's an alert modal.`,
    },
  },
};

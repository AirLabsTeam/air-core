import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Twitter } from '@air/icons';
import { Button, Modal, Box } from '../../src';
import { ModalTab, ModalTabs, ModalTabsProps } from '../../src/Modals/TabsModal';
import { modalStoryDecorator } from './shared';

export const TabsModal: Story<ModalTabsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button type="button" onClick={openModal} variant="button-filled-blue">
        Open Modal
      </Button>

      <Modal
        withCloseButton
        isOpen={isModalOpen}
        onDismiss={closeModal}
        isAlertModal={false}
        modalLabel="Invite Members"
      >
        <ModalTabs>
          <ModalTab title="Invite by Email">
            <Box tx={{ pt: 24, pb: 32 }}>some random content for invite by email</Box>
          </ModalTab>
          <ModalTab title="Invite by Link">
            <Box tx={{ pt: 24, pb: 32 }}>some random content for invite by link!</Box>
          </ModalTab>
          <ModalTab
            title={
              <Box
                tx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  as={Twitter}
                  tx={{
                    width: 16,
                    marginRight: 5,
                    '& path': {
                      fill: 'currentColor',
                    },
                  }}
                />
                tab 3
              </Box>
            }
          >
            <Box tx={{ pt: 24, pb: 32 }}>tab 3 content!</Box>
          </ModalTab>
          <ModalTab title="tab 4">
            <Box tx={{ pt: 24, pb: 32 }}>tab 4 content!</Box>
          </ModalTab>
          <ModalTab title="tab 5">
            <Box tx={{ pt: 24, pb: 32 }}>tab 5 content!</Box>
          </ModalTab>
        </ModalTabs>
      </Modal>
    </>
  );
};

TabsModal.parameters = {
  docs: {
    description: {
      story: 'Tabs component inside modal!!',
    },
  },
};

const meta: Meta = {
  title: 'Zephyr/Modals/Abstractions/TabsModal',
  component: TabsModal,
  decorators: [modalStoryDecorator],
};

export default meta;

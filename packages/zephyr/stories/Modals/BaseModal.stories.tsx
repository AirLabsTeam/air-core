import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseModal, BaseModalProps } from '../../src/Modals';

const meta: Meta<BaseModalProps> = {
  title: 'Zephyr/Modals/BaseModal',
  component: BaseModal,
};

export default meta;

const Template: Story<BaseModalProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const leastDestructiveRef = useRef<HTMLButtonElement>();

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      <BaseModal
        data-testid={meta.title}
        isOpen={isModalOpen}
        onDismiss={args.onDismiss ?? closeModal}
        modalLabel={<h2>This is a simple modal.</h2>}
        modalDescription={<p>You cannot do anything...</p>}
        leastDestructiveRef={leastDestructiveRef}
        isAlertModal={args.isAlertModal ?? false}
      >
        <button type="button" onClick={closeModal} ref={leastDestructiveRef}>
          Okay
        </button>
      </BaseModal>
    </div>
  );
};

export const Simple = Template.bind({});

import React from 'react';
import { Modal, ModalProps } from '../src/Modal';

const meta = {
  title: 'Zephyr/Modal',
  component: Modal,
};

export default meta;

const Template = (args: ModalProps) => {
  return (
    <>
      <Modal {...args} data-testid={meta.title} />
    </>
  );
};

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  children: 'Modal',
};

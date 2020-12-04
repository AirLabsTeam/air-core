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
import { modalStoryDecorator } from './shared';

const meta: Meta<ModalProps> = {
  title: 'Zephyr/Modals/Modal',
  component: Modal,
  decorators: [modalStoryDecorator],
};

export default meta;

export const Default: Story<ModalProps> = (args) => <Modal {...args} data-testid={meta.title} />;

Default.parameters = {
  docs: {
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
        withCloseButton={false}
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

export const LargeModalWithBigContent: Story<ModalProps> = () => {
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
        variant="modal-large"
        modalLabel="This is huge"
        modalDescription={
          <Text variant="text-ui-16">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper vitae lacus vel
              condimentum. Morbi vitae nibh congue urna porttitor finibus. Ut sed eros nulla.
              Phasellus sodales quam condimentum ligula volutpat feugiat ut non nibh. Suspendisse
              maximus quis dolor eget dignissim.
            </p>

            <p>
              Donec porta arcu sit amet sagittis sollicitudin. Aenean lobortis dui non suscipit
              hendrerit. Praesent vel justo velit. Praesent rhoncus rhoncus sapien, et maximus lorem
              tristique at. Proin consequat eleifend cursus. Pellentesque sed nibh vitae lacus
              dictum laoreet aliquet in velit. In hac habitasse platea dictumst. Cras maximus quis
              lectus in commodo. Donec dictum ante vitae aliquam dignissim. Curabitur ac lectus ac
              purus bibendum efficitur. Ut ut sapien vitae nulla egestas ultricies eu quis massa.
              Maecenas sit amet lectus id ante dapibus dictum. Integer eget congue mi. Pellentesque
              magna metus, dapibus hendrerit feugiat vitae, porttitor sit amet leo. Nulla sit amet
              massa quis eros sodales imperdiet quis laoreet lorem. Curabitur elementum ligula
              turpis, eget commodo enim interdum eu. Vestibulum id augue a nibh malesuada suscipit
              sit amet sed diam. Fusce gravida volutpat orci, quis gravida augue condimentum vitae.
              Ut interdum velit posuere enim ultrices venenatis at id nibh.
            </p>

            <p>
              Praesent sed egestas est, lacinia facilisis lectus. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Aenean a iaculis enim.
              Quisque quis fermentum mauris. Nulla volutpat placerat tellus id elementum. Cras felis
              tellus, elementum quis faucibus eu, dictum at odio. Nunc suscipit tortor eros,
              vestibulum ultrices metus vehicula in. Morbi tempus euismod metus, id vulputate dui
              vehicula a. Donec laoreet tempus diam, id suscipit dolor dictum non. Proin libero
              nibh, faucibus accumsan lectus ac, ultricies consectetur leo. Nunc at ante tortor. Nam
              accumsan tincidunt velit a auctor. Nam imperdiet, diam eget egestas sodales, neque
              risus mollis mauris, in laoreet odio eros volutpat odio. Pellentesque sollicitudin nec
              odio vitae porttitor. Cras congue mauris est, at ultricies ipsum ornare in. Phasellus
              egestas facilisis vulputate. Nunc tempor libero turpis. Proin nulla nulla, porta in
              molestie quis, malesuada eget leo. Nam purus lectus, interdum sit amet feugiat a,
              pretium quis ipsum. Donec elementum ultricies odio, in laoreet ex faucibus in. Nam
              posuere, quam quis facilisis porta, sem ipsum aliquet magna, nec viverra purus velit
              at augue. Phasellus non tempus nibh. Nulla et massa interdum, dignissim orci ac,
              blandit dui. Suspendisse nec eros sit amet quam consequat faucibus. Sed et ex tempor,
              dignissim magna ut, venenatis leo. Nulla mollis blandit tortor. Donec a placerat
              neque, in pharetra est.
            </p>

            <p>
              Etiam nec metus sapien. Mauris ut sapien sem. Nullam fermentum vestibulum velit.
              Aenean enim nisl, sagittis non massa sed, luctus egestas nisl. Donec ut dolor
              pellentesque, aliquet tellus ac, porta purus. Phasellus gravida imperdiet leo eu
              lacinia. Maecenas vel neque vel lorem fermentum blandit. Quisque non nunc ac odio
              sollicitudin accumsan dapibus at turpis. Donec interdum ante sed arcu eleifend cursus.
              Pellentesque semper ante venenatis risus lobortis, ullamcorper suscipit turpis tempus.
              Aenean ut vulputate enim. Nulla facilisi. Suspendisse facilisis, felis congue ornare
              auctor, lacus lacus ultrices leo, nec rutrum purus ipsum vitae metus.
            </p>

            <p>
              Etiam nec metus sapien. Mauris ut sapien sem. Nullam fermentum vestibulum velit.
              Aenean enim nisl, sagittis non massa sed, luctus egestas nisl. Donec ut dolor
              pellentesque, aliquet tellus ac, porta purus. Phasellus gravida imperdiet leo eu
              lacinia. Maecenas vel neque vel lorem fermentum blandit. Quisque non nunc ac odio
              sollicitudin accumsan dapibus at turpis. Donec interdum ante sed arcu eleifend cursus.
              Pellentesque semper ante venenatis risus lobortis, ullamcorper suscipit turpis tempus.
              Aenean ut vulputate enim. Nulla facilisi. Suspendisse facilisis, felis congue ornare
              auctor, lacus lacus ultrices leo, nec rutrum purus ipsum vitae metus.
            </p>
          </Text>
        }
        withCloseButton
      />
    </>
  );
};

LargeModalWithBigContent.parameters = {
  docs: {
    description: {
      story: 'This represents an example that takes up a large amount of space vertically.',
    },
  },
};

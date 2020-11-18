import React from 'react';

import { render, fireEvent } from '../test-utils';
import ModalMeta, * as Modal from '../stories/modals/Modal.stories';
import { ModalProps, MODAL_CLOSE_BUTTON } from '../src/Modals/Modal';

describe('Modal', () => {
  const testID = ModalMeta.title;

  const requiredProps: ModalProps = {
    modalLabel: 'Test',
    onDismiss: jest.fn(),
    isAlertModal: false,
  };

  it('does not render with only required props passed', () => {
    const { queryByTestId } = render(<Modal.Default {...requiredProps} />);

    expect(queryByTestId(testID)).toBeNull();
  });

  it('renders when "isOpen" is true', () => {
    const { queryByTestId } = render(<Modal.Default {...requiredProps} isOpen={true} />);

    expect(queryByTestId(testID)).not.toBeNull();
    expect(queryByTestId(testID)).toBeVisible();
  });

  it('should fire onDismiss callback when attempting to close the modal', () => {
    const onDismiss = jest.fn();

    const { queryByTestId } = render(
      <Modal.Default {...requiredProps} isOpen={true} onDismiss={onDismiss} />,
    );

    expect(onDismiss).not.toHaveBeenCalled();
    fireEvent.click(queryByTestId(MODAL_CLOSE_BUTTON)!);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});

// import { waitFor } from '@testing-library/react';
import { render, fireEvent } from '../test-utils';
import * as Modal from '../stories/modals/Modal.stories';
import { ModalProps } from '../src/Modals/Modal';
import { X_BUTTON } from '../src/testIDs';

describe('Modal', () => {
  const requiredProps: ModalProps = {
    modalLabel: 'Test',
    onDismiss: jest.fn(),
    isAlertModal: false,
  };

  it('should fire onDismiss callback when attempting to close the modal', () => {
    const onDismiss = jest.fn();

    const { queryByTestId } = render(<Modal.Default {...requiredProps} onDismiss={onDismiss} />);

    expect(onDismiss).not.toHaveBeenCalled();
    fireEvent.click(queryByTestId(X_BUTTON)!);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});

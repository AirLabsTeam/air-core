import React from 'react';
// import { waitFor } from '@testing-library/react';
import { render, fireEvent } from '../test-utils';
import ModalMeta, * as Modal from '../stories/modals/Modal.stories';
import { ModalProps } from '../src/Modals/Modal';
import { X_BUTTON } from '../src/testIDs';

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

  it('renders when "isOpen" is true', async () => {
    const { queryByTestId } = render(<Modal.Default {...requiredProps} isOpen={true} />);

    expect(queryByTestId(testID)).not.toBeNull();

    // TODO: Resolve https://github.com/testing-library/react-testing-library/issues/662
    // asynchronous because of animation
    // await waitFor(() => {
    //   expect(queryByTestId(testID)).toBeVisible();
    // });
  });

  it('should fire onDismiss callback when attempting to close the modal', () => {
    const onDismiss = jest.fn();

    const { queryByTestId } = render(
      <Modal.Default {...requiredProps} isOpen={true} onDismiss={onDismiss} />,
    );

    expect(onDismiss).not.toHaveBeenCalled();
    fireEvent.click(queryByTestId(X_BUTTON)!);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});

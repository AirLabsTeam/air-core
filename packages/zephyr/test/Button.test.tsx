import { render, fireEvent } from '../test-utils';
import ButtonMeta, * as Button from '../stories/buttons/Button.stories';

describe('Button', () => {
  it('should fire callback on click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button.Default onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId(ButtonMeta.title));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

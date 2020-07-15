import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import * as Button from '../stories/Button.stories';

describe('Button', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button.WithRequiredProps onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId(Button.testID));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

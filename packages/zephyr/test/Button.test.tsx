import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ButtonMeta, { Text as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button />);

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId(ButtonMeta.title));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

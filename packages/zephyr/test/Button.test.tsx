import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ButtonMeta, * as Button from '../stories/buttons/Button.stories';

describe('Button', () => {
  it('should fire callback on click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button.Default {...{ onClick }} />);

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId(ButtonMeta.title));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should contain text', () => {
    const { getByTestId } = render(<Button.Default>Button</Button.Default>);

    expect(getByTestId(ButtonMeta.title)).toHaveTextContent('Button');
  });
});

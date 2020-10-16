import React from 'react';
import { render } from '@testing-library/react';
import { theme } from '@air/zephyr/src/theme';
import Icon from '../src/index';

describe('Icons', () => {
  it('uses Edit icon', () => {
    const component = render(<Icon name="Edit" />);
    const tree = component.container.firstChild;
    expect(tree).toMatchSnapshot();
  });

  it('uses Edit icon with circular border', () => {
    const component = render(<Icon name="Edit" border />);
    const tree = component.container.firstChild;
    expect(tree).toMatchSnapshot();
  });

  it('uses Edit icon with a red background', () => {
    const component = render(<Icon name="Edit" backgroundColor="red" />);
    const tree = component.container.firstChild;
    expect(tree).toMatchSnapshot();
  });

  it('uses Edit icon and is filled black', () => {
    const component = render(<Icon name="Edit" fill={theme.colors.black} />);
    const tree = component.container.firstChild;
    expect(tree).toMatchSnapshot();
  });

  it('uses Edit icon with a stroke width of one', () => {
    const component = render(<Icon name="Edit" strokeWidth={1} />);
    const tree = component.container.firstChild;
    expect(tree).toMatchSnapshot();
  });
});

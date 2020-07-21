import { theme } from '@air/zephyr';

import {
  formatFirefoxScrollbar,
  formatScrollBar,
  formatThickness,
  formatThumb,
  formatThumbHover,
  formatTrackColor,
} from '../src/CustomScrollbar';

describe('formatThickness', () => {
  it('returns css for vertical scrollbar with custom width', () => {
    expect(formatThickness(true, 20)).toMatchSnapshot();
  });

  it('returns css for a horizontal scrollbar with a custom height', () => {
    expect(formatThickness(false, 25)).toMatchSnapshot();
  });
});

describe('formatTrackColor', () => {
  it('returns css for a scrollbar track with a custom color', () => {
    expect(formatTrackColor('tomato')).toMatchSnapshot();
  });
});

describe('formatThumb', () => {
  it('returns css for a scrollbar thumb with a custom color, size and width', () => {
    expect(formatThumb('rebeccapurple', 10, 2)).toMatchSnapshot();
  });
});

describe('formatThumbHover', () => {
  it('returns css for a scroll bar thumb with a custom hover', () => {
    expect(formatThumbHover('firebrick', 25, 8)).toMatchSnapshot();
  });
});

describe('Firefox Scrollbar', () => {
  it('returns css for a custom firefox scrollbar', () => {
    expect(formatFirefoxScrollbar('fuchsia', 'cyan')).toMatchSnapshot();
  });
});

describe('Scrollbar Integration', () => {
  it('returns css for a custom scrollbar with default values', () => {
    expect(formatScrollBar({})).toMatchSnapshot();
  });

  it('returns css for a custom scrollbar with custom values', () => {
    expect(
      formatScrollBar({
        thumbHover: theme.colors.jay4,
        thickness: 30,
        margin: 4,
        vertical: false,
      }),
    ).toMatchSnapshot();
  });
});

import {
  formatDateForm,
  formatDateVerbose,
  formatDuration,
  formatMilliseconds,
  formatUpdatedAt,
} from '../src';

describe('formatMilliseconds', () => {
  it('returns a "hh:mm:ss" format', () => {
    expect(formatMilliseconds(5350000)).toBe('1:29:10');
    expect(formatMilliseconds(143036000)).toBe('39:43:56');
    expect(formatMilliseconds(60000)).toBe('1:00');
  });

  it(`will show a double digit seconds even if there are only single seconds`, () => {
    expect(formatMilliseconds(724000)).toBe('12:04');
  });

  it(`will show single-digit 0 (not 00) when there are just seconds`, () => {
    expect(formatMilliseconds(4000)).toBe('0:04');
  });

  it(`will only show double digit minutes only when there are hours and single digit minutes`, () => {
    expect(formatMilliseconds(7202000)).toBe('2:00:02');
    expect(formatMilliseconds(7682000)).toBe('2:08:02');
  });

  it(`doesn't show hours if there are none`, () => {
    expect(formatMilliseconds(124000)).toBe('2:04');
    expect(formatMilliseconds(479000)).toBe('7:59');
    expect(formatMilliseconds(779900)).toBe('12:59');
  });
});

describe('formatDuration', () => {
  it('returns a "hh:mm:ss" format', () => {
    expect(formatDuration(5350)).toBe('1:29:10');
    expect(formatDuration(143036)).toBe('39:43:56');
    expect(formatDuration(60)).toBe('1:00');
  });

  it(`will show a double digit seconds even if there are only single seconds`, () => {
    expect(formatDuration(724)).toBe('12:04');
  });

  it(`will show single-digit 0 (not 00) when there are just seconds`, () => {
    expect(formatDuration(4)).toBe('0:04');
  });

  it(`will only show double digit minutes only when there are hours and single digit minutes`, () => {
    expect(formatDuration(7202)).toBe('2:00:02');
    expect(formatDuration(7682)).toBe('2:08:02');
  });

  it(`doesn't show hours if there are none`, () => {
    expect(formatDuration(124)).toBe('2:04');
    expect(formatDuration(479)).toBe('7:59');
    expect(formatDuration(779)).toBe('12:59');
  });
});

describe('formatUpdatedAt', () => {
  const offsetDate = (offset: number) => new Date(Date.now() - offset * 1000);
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 31;
  const year = month * 12;

  it(`now is now`, () => {
    expect(formatUpdatedAt(new Date())).toBe('just now');
    expect(formatUpdatedAt(offsetDate(minute * 2 + 10))).toBe('2m');
    expect(formatUpdatedAt(offsetDate(hour * 3 + minute * 5))).toBe('3h');
    expect(formatUpdatedAt(offsetDate(day * 5 + minute * 5))).toBe('5d');
    expect(formatUpdatedAt(offsetDate(month * 8 + minute * 5))).toBe('8mo');
    expect(formatUpdatedAt(offsetDate(year * 4 + minute * 5))).toBe('4yr');

    expect(formatUpdatedAt(offsetDate(minute + 10))).toBe('1m');
    expect(formatUpdatedAt(offsetDate(hour + minute * 5))).toBe('1h');
    expect(formatUpdatedAt(offsetDate(day + minute * 5))).toBe('1d');
    expect(formatUpdatedAt(offsetDate(month + minute * 5))).toBe('1mo');
    expect(formatUpdatedAt(offsetDate(year + minute * 5))).toBe('1yr');
  });
});

describe('formatDate', () => {
  it(`formatDateVerbose`, () => {
    expect(formatDateVerbose('2018-09-14 20:39:19.496+00')).toBe('September 14, 2018');
    expect(formatDateVerbose('2035-02-13 20:39:19.496+00')).toBe('February 13, 2035');
    expect(formatDateVerbose('1984-12-25 03:39:19.496+00')).toBe('December 25, 1984');
    expect(formatDateVerbose('2015-04-28 20:39:19.496+00')).toBe('April 28, 2015');
    expect(formatDateVerbose('2019-11-22 20:39:19.496+00')).toBe('November 22, 2019');
  });

  it(`formatDateForm`, () => {
    expect(formatDateForm('2018-09-14 20:39:19.496+00')).toBe('2018-09-14');
    expect(formatDateForm('2035-02-13 20:39:19.496+00')).toBe('2035-02-13');
    expect(formatDateForm('1984-12-25 03:39:19.496+00')).toBe('1984-12-25');
    expect(formatDateForm('2015-04-28 20:39:19.496+00')).toBe('2015-04-28');
    expect(formatDateForm('2019-11-22 20:39:19.496+00')).toBe('2019-11-22');
  });
});

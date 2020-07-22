import { formatBytes, formatDecimals } from '../src';

describe('formatBytes', () => {
  it('returns `"0 bytes"` when passing any number less than zero', () => {
    expect(formatBytes(-1)).toBe('0 bytes');
    expect(formatBytes(-10000)).toBe('0 bytes');
  });

  it('returns `"0 bytes"` when passing `0`', () => {
    expect(formatBytes(0)).toBe('0 bytes');
  });

  it('returns `"1 byte"` when passing `1`', () => {
    expect(formatBytes(1)).toBe('1 byte');
  });

  it('returns multiple bytes when passing any number between one and 1000', () => {
    expect(formatBytes(2)).toBe('2 bytes');
    expect(formatBytes(999)).toBe('999 bytes');
  });

  it('returns a number of kilobytes when passing a number between 999 and 1e6', () => {
    expect(formatBytes(1e3)).toBe('1 KB');
    expect(formatBytes(999.99999999999e3)).toBe('999 KB');
  });

  it('returns a number of megabytes when passing a number between 999999 and 1e9', () => {
    expect(formatBytes(1e6)).toBe('1 MB');
    expect(formatBytes(999.99999999999e6)).toBe('999 MB');
  });

  it('returns a number of gigabytes when passing a number between 999999999 and 999500000000', () => {
    expect(formatBytes(1e9)).toBe('1 GB');
    expect(formatBytes(999.99999999999e9)).toBe('999 GB');
  });

  it('returns a number of terabytes when passing a number between 999999999999 and 99950000000000', () => {
    expect(formatBytes(1e12)).toBe('1 TB');
    expect(formatBytes(999.99999999999e12)).toBe('999 TB');
  });

  it('returns a number of petabytes when passing a number between 999999999999999 and 99950000000000000', () => {
    expect(formatBytes(1e15)).toBe('1 PB');
    expect(formatBytes(999.99999999999e15)).toBe('999 PB');
  });

  it('returns a number of exabytes when passing a number between 999999999999999999 and 99950000000000000000', () => {
    expect(formatBytes(1e18)).toBe('1 EB');
    expect(formatBytes(999.99999999999e18)).toBe('999 EB');
  });

  it('returns a number of zettabytes when passing a number between 999999999999999999999 and 99950000000000000000000', () => {
    expect(formatBytes(1e21)).toBe('1 ZB');
    expect(formatBytes(999.99999999999e21)).toBe('999 ZB');
  });

  it('returns a number of yottabytes when passing a number between 999999999999999999999999 and 99950000000000000000000000', () => {
    expect(formatBytes(1e24)).toBe('1 YB');
    expect(formatBytes(999.99999999999e24)).toBe('999 YB');
  });

  it('returns a number with the requested amount of decimal places', () => {
    expect(
      formatBytes(12.3456, {
        numberOfDecimals: 2,
      }),
    ).toBe('12.34 bytes');
    expect(
      formatBytes(1000, {
        numberOfDecimals: 3,
      }),
    ).toBe('1.000 KB');
    expect(
      formatBytes(999.99999999999e3, {
        numberOfDecimals: 20,
      }),
    ).toBe('999.99999999999000000000 KB');
    expect(
      formatBytes(999.99999999999e24, {
        numberOfDecimals: 4,
      }),
    ).toBe('999.9999 YB');
  });
});

describe('formatDecimals', () => {
  it('returns `0` when passing any number less than 1000000000', () => {
    expect(formatDecimals(-1)).toBe(0);
    expect(formatDecimals(0)).toBe(0);
    expect(formatDecimals(1)).toBe(0);
    expect(formatDecimals(1000)).toBe(0);
    expect(formatDecimals(999999999)).toBe(0);
  });

  it('returns `2` when passing any number greater than than 999999999', () => {
    expect(formatDecimals(1e9)).toBe(2);
    expect(formatDecimals(1e12)).toBe(2);
    expect(formatDecimals(1e15)).toBe(2);
  });
});

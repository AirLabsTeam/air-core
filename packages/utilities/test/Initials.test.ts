import { formatNameToInitials } from '../src';

describe('formatNameToInitials', () => {
  it('returns the correct corresponding initials', () => {
    expect(formatNameToInitials('Captain Crunch')).toBe('CC');
    expect(formatNameToInitials('Justin Bieber')).toBe('JB');
    expect(formatNameToInitials('Ed Sheeran')).toBe('ES');
    expect(formatNameToInitials('Beyoncé')).toBe('B');
    expect(formatNameToInitials('')).toBe('');
  });
});

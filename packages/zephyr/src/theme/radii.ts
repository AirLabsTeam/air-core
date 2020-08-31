export type RadiusName = 0 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 999;

export const radii: { [key in RadiusName]: number } = {
  0: 0,
  2: 2,
  3: 3,
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  16: 16,
  999: 999,
};

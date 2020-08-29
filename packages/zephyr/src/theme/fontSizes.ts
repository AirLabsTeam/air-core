const pxToRem = (value: number): string => `${value / 16}rem`;

export type FontSizeName =
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48
  | 56
  | 64
  | 72;

export const fontSizes: { [key in FontSizeName]: string } = {
  8: pxToRem(8),
  10: pxToRem(10),
  12: pxToRem(12),
  14: pxToRem(14),
  16: pxToRem(16),
  18: pxToRem(18),
  20: pxToRem(20),
  24: pxToRem(24),
  28: pxToRem(28),
  32: pxToRem(32),
  36: pxToRem(36),
  40: pxToRem(40),
  48: pxToRem(48),
  56: pxToRem(56),
  64: pxToRem(64),
  72: pxToRem(72),
};

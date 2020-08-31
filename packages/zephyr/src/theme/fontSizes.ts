import { rem } from 'polished';

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
  8: rem(8),
  10: rem(10),
  12: rem(12),
  14: rem(14),
  16: rem(16),
  18: rem(18),
  20: rem(20),
  24: rem(24),
  28: rem(28),
  32: rem(32),
  36: rem(36),
  40: rem(40),
  48: rem(48),
  56: rem(56),
  64: rem(64),
  72: rem(72),
};

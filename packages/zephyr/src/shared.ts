import { ButtonSize } from './Button';
import { ButtonVariantName } from './theme';

export type LeftRight = 'left' | 'right';

export const allButtonSizes: ButtonSize[] = ['extra-small', 'small', 'medium', 'large'];
export const allButtonVariants: ButtonVariantName[] = [
  'button-filled-blue',
  'button-filled-destructive',
  'button-filled-grey',
  'button-ghost-blue',
  'button-ghost-destructive',
  'button-ghost-grey',
  'button-outline-blue',
  'button-outline-grey',
  'button-unstyled',
];

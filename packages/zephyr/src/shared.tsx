import { forwardRef, SVGProps } from 'react';
import { ButtonSize } from './Button';
import { ButtonVariantName } from './theme';

// eslint-disable-next-line react/display-name
const FakeAirIconComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} />
));

export type SVGComponent = typeof FakeAirIconComponent;
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

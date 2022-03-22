import { forwardRef, SVGProps } from 'react';

export interface BoardProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Board = forwardRef<SVGSVGElement, BoardProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.92 29H6.08A3.08 3.08 0 013 25.92V6.08A3.08 3.08 0 016.08 3h19.84A3.08 3.08 0 0129 6.08v19.84A3.08 3.08 0 0125.92 29zm-4.86-2.18h4.86a.9.9 0 00.9-.9v-8.13h-5.76zm-15.88-9v8.13a.9.9 0 00.9.9h12.8v-9zm0-2.19h21.64V6.08a.9.9 0 00-.9-.9H6.08a.9.9 0 00-.9.9z" />
  </svg>
));
Board.displayName = 'Board';

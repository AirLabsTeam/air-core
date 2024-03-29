import { forwardRef, SVGProps } from 'react';

export interface ShowProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Show = forwardRef<SVGSVGElement, ShowProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.92 23.05H6.08A3.08 3.08 0 013 20V6.08A3.08 3.08 0 016.08 3h19.84A3.08 3.08 0 0129 6.08V20a3.08 3.08 0 01-3.08 3.05zM6.08 5.18a.9.9 0 00-.9.9V20a.89.89 0 00.9.89h19.84a.89.89 0 00.9-.89V6.08a.9.9 0 00-.9-.9zM23.94 29H8.06a1.09 1.09 0 010-2.18h15.88a1.09 1.09 0 010 2.18z" />
  </svg>
));
Show.displayName = 'Show';

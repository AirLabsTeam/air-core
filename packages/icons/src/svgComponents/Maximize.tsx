import { forwardRef, SVGProps } from 'react';

export interface MaximizeProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Maximize = forwardRef<SVGSVGElement, MaximizeProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.92 3H6.08A3.08 3.08 0 003 6.08v19.84A3.08 3.08 0 006.08 29h19.84A3.08 3.08 0 0029 25.92V6.08A3.08 3.08 0 0025.92 3zm0 23.82H6.08a.9.9 0 01-.9-.9V8.06h21.64v17.86a.9.9 0 01-.9.9z" />
  </svg>
));
Maximize.displayName = 'Maximize';

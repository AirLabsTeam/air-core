import { forwardRef, SVGProps } from 'react';

export interface TiktokProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Tiktok = forwardRef<SVGSVGElement, TiktokProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M11.19 24.12A3.76 3.76 0 0112.88 17a3.64 3.64 0 011.15.18v-4.55a7.16 7.16 0 00-1.13-.08 8.22 8.22 0 00-4.58 15.06 8.23 8.23 0 0012.81-6.84v-9.08a10.63 10.63 0 006.2 2V9.23A6.28 6.28 0 0124 8.29l.07.07-.07-.07a6.23 6.23 0 01-2.8-4.21 4.46 4.46 0 01-.07-.51V3h-4.48v17.77a3.76 3.76 0 01-3.77 3.75 3.72 3.72 0 01-1.69-.4" />
  </svg>
));
Tiktok.displayName = 'Tiktok';

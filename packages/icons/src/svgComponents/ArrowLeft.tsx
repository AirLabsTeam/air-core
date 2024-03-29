import { forwardRef, SVGProps } from 'react';

export interface ArrowLeftProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ArrowLeft = forwardRef<SVGSVGElement, ArrowLeftProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M13.63 24.13a1.19 1.19 0 00-.05-1.68L8.2 17.22h18.6a1.19 1.19 0 100-2.37H8.11l5.42-5.32a1.18 1.18 0 000-1.68 1.22 1.22 0 00-1.7 0l-7.48 7.34a1 1 0 00-.11.17 1.27 1.27 0 00-.13.19A1.15 1.15 0 004 16a1.22 1.22 0 00.09.46 1.58 1.58 0 00.22.33v.05l7.56 7.28a1.21 1.21 0 001.76.01z" />
  </svg>
));
ArrowLeft.displayName = 'ArrowLeft';

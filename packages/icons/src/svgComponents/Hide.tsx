import { forwardRef, SVGProps } from 'react';

export interface HideProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Hide = forwardRef<SVGSVGElement, HideProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.92 29H6.08A3.08 3.08 0 013 25.92V6.08A3.08 3.08 0 016.08 3h19.84A3.08 3.08 0 0129 6.08v19.84A3.08 3.08 0 0125.92 29zM6.08 5.18a.9.9 0 00-.9.9v19.84a.9.9 0 00.9.9h19.84a.9.9 0 00.9-.9V6.08a.9.9 0 00-.9-.9z" />
    <path d="M23 23.05H9.05a1.1 1.1 0 010-2.19H23a1.1 1.1 0 010 2.19z" />
  </svg>
));
Hide.displayName = 'Hide';

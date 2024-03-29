import { forwardRef, SVGProps } from 'react';

export interface SingleSelectProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SingleSelect = forwardRef<SVGSVGElement, SingleSelectProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M26.92 3H5.08A2.08 2.08 0 003 5.08v21.84A2.08 2.08 0 005.08 29h21.84A2.08 2.08 0 0029 26.92V5.08A2.08 2.08 0 0026.92 3zm-3.38 23.82H5.18V5.18h21.64v21.64h-3.28z" />
    <path d="M20.26 10.78a25 25 0 00-3.47 3.6A39.43 39.43 0 0014 18.23l-2.07-2.43a1.19 1.19 0 00-1.82 1.54L13.24 21a1.19 1.19 0 00.91.42h.12a1.18 1.18 0 00.92-.6 37 37 0 013.43-4.94 23.83 23.83 0 013.07-3.22 1.19 1.19 0 10-1.43-1.91z" />
  </svg>
));
SingleSelect.displayName = 'SingleSelect';

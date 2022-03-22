import { forwardRef, SVGProps } from 'react';

export interface PresentationsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Presentations = forwardRef<SVGSVGElement, PresentationsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 25a11 11 0 1111-11 11 11 0 01-11 11zm1-10v7.94A9 9 0 0024.94 15zM16 5a9 9 0 00-1 17.94V14a1 1 0 011-1h8.94A9 9 0 0016 5zm8.76 23a1 1 0 00-1-1h-16a1 1 0 100 2h16a1 1 0 001-1z" />
  </svg>
));
Presentations.displayName = 'Presentations';

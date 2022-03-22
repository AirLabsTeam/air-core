import { forwardRef, SVGProps } from 'react';

export interface UploadsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Uploads = forwardRef<SVGSVGElement, UploadsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.82 29H7.18A4.19 4.19 0 013 24.8v-5.57a1.09 1.09 0 112.18 0v5.57a2 2 0 002 2h17.64a2 2 0 002-2v-5.57a1.09 1.09 0 012.18 0v5.57a4.19 4.19 0 01-4.18 4.2zm-7.73-8.42V6.77L21 10.71a1.09 1.09 0 101.55-1.53l-5.76-5.83A1.14 1.14 0 0016 3a1.11 1.11 0 00-.78.33L9.47 9.19A1.09 1.09 0 0011 10.71l3.88-4v13.87a1.09 1.09 0 002.18 0z" />
  </svg>
));
Uploads.displayName = 'Uploads';

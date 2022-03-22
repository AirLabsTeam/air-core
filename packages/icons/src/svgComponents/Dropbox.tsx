import { forwardRef, SVGProps } from 'react';

export interface DropboxProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Dropbox = forwardRef<SVGSVGElement, DropboxProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.016 10.773l-6.008 3.95 6.008 3.95-6.008 3.95L4 18.64l6.008-3.95L4 10.773l6.008-3.95 6.008 3.95zm-6.04 13.1l6.008-3.95 6.008 3.95-6.008 3.95-6.008-3.95zm6.04-5.233l6.008-3.95-6.008-3.917 5.976-3.95L28 10.773l-6.008 3.95L28 18.673l-6.008 3.95-5.976-3.983z" />
  </svg>
));
Dropbox.displayName = 'Dropbox';
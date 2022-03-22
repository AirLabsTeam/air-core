import { forwardRef, SVGProps } from 'react';

export interface FullScreenOutProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const FullScreenOut = forwardRef<SVGSVGElement, FullScreenOutProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M19.18 29a1.09 1.09 0 01-1.1-1.09V21a3.08 3.08 0 013.08-3.07h6.75a1.09 1.09 0 010 2.18h-6.75a.89.89 0 00-.89.89v7a1.09 1.09 0 01-1.09 1zm-6.95 0a1.09 1.09 0 01-1.09-1.09V21a.89.89 0 00-.9-.89H4.09a1.09 1.09 0 110-2.18h6.15A3.08 3.08 0 0113.32 21v7a1.09 1.09 0 01-1.09 1zm15.68-14.89h-6.75A3.08 3.08 0 0118.08 11V4.09a1.1 1.1 0 012.19 0v7a.89.89 0 00.89.89h6.75a1.09 1.09 0 010 2.18zm-17.27 0H4.09a1.09 1.09 0 010-2.18h6.55a.9.9 0 00.9-.89V4.09a1.09 1.09 0 012.18 0v7a3.08 3.08 0 01-3.08 3.02z" />
  </svg>
));
FullScreenOut.displayName = 'FullScreenOut';

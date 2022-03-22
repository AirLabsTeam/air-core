import { forwardRef, SVGProps } from 'react';

export interface FullScreenEnterProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const FullScreenEnter = forwardRef<SVGSVGElement, FullScreenEnterProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.33 29h-5a1.09 1.09 0 010-2.18h5a1.53 1.53 0 001.49-1.49v-4.67a1.09 1.09 0 012.18 0v4.67A3.72 3.72 0 0125.33 29zm-13.6 0H6.67A3.72 3.72 0 013 25.33v-4.67a1.09 1.09 0 012.18 0v4.67a1.53 1.53 0 001.49 1.49h5.06a1.09 1.09 0 010 2.18zm16.18-16a1.09 1.09 0 01-1.09-1.09V6.67a1.53 1.53 0 00-1.49-1.49h-5a1.09 1.09 0 010-2.18h5A3.72 3.72 0 0129 6.67v5.26A1.09 1.09 0 0127.91 13zM4.09 13A1.09 1.09 0 013 11.93V6.67A3.72 3.72 0 016.67 3h5.06a1.09 1.09 0 010 2.18H6.67a1.53 1.53 0 00-1.49 1.49v5.26A1.09 1.09 0 014.09 13z" />
  </svg>
));
FullScreenEnter.displayName = 'FullScreenEnter';

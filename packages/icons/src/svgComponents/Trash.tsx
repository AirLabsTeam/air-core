import { forwardRef, SVGProps } from 'react';

export interface TrashProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Trash = forwardRef<SVGSVGElement, TrashProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.07 29H7.71a1 1 0 01-1-.89L4.53 8.82H4a1 1 0 010-2h6.27l1.8-3.3A1 1 0 0113 3h6a1 1 0 01.86.5l1.91 3.32H28a1 1 0 010 2h-.43l-2.51 19.31a1 1 0 01-.99.87zM8.6 27h14.59l2.37-18.18h-19zm4-20.18h6.86L18.37 5h-4.83zm7.92 16.44h-.15a1 1 0 01-.84-1.14l1.42-9.34a1 1 0 012 .31l-1.42 9.33a1 1 0 01-1.06.84zm-8.83 0a1 1 0 01-1-.85l-1.46-9.33a1 1 0 012-.31l1.42 9.34a1 1 0 01-.84 1.14zm4.47 0a1 1 0 01-1-1v-9.87a1 1 0 012 0v9.87a1 1 0 01-1.05 1z" />
  </svg>
));
Trash.displayName = 'Trash';

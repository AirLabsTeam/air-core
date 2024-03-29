import { forwardRef, SVGProps } from 'react';

export interface ImageSearchProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ImageSearch = forwardRef<SVGSVGElement, ImageSearchProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M22.12 30.15h-11a1.15 1.15 0 010-2.3h11a4.07 4.07 0 004-4.15v-1a1.15 1.15 0 012.3 0v1a6.37 6.37 0 01-6.3 6.45zm-.56-4.08H5.06a3.25 3.25 0 01-3.21-3.28v-17a3.25 3.25 0 013.21-3.31h8.25a1.16 1.16 0 010 2.31H5.06a.94.94 0 00-.91 1v12.42l4.78-4.75a1.16 1.16 0 011.58 0L16 18.35l3-1.5a1.14 1.14 0 011.09 0l2.33 1.36V17a1.15 1.15 0 012.3 0v5.77a3.26 3.26 0 01-3.16 3.3zM4.15 21.45v1.34a1 1 0 00.91 1h16.5a1 1 0 00.92-1V20.9l-2.95-1.72-3.16 1.57a1.12 1.12 0 01-1.27-.17l-5.32-4.72zM29 17a1.15 1.15 0 01-.83-.36l-3.05-3.16a6.05 6.05 0 01-3.5 1.1 6.09 6.09 0 01-4.4-1.88 6.49 6.49 0 010-9 6.08 6.08 0 018.79 0 6.49 6.49 0 01.71 8.1l3.11 3.22a1.14 1.14 0 010 1.62A1.13 1.13 0 0129 17zM21.61 4.15a3.82 3.82 0 00-2.74 1.17 4.19 4.19 0 000 5.78 3.82 3.82 0 002.75 1.18 3.81 3.81 0 002.75-1.18 4.17 4.17 0 000-5.77 3.81 3.81 0 00-2.76-1.18z" />
  </svg>
));
ImageSearch.displayName = 'ImageSearch';

import { forwardRef, SVGProps } from 'react';

export interface AtProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const At = forwardRef<SVGSVGElement, AtProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 29a15.22 15.22 0 01-1.65-.1A13 13 0 0116.87 3C23.33 3.45 29 9.87 29 16.78v.15c0 3.3-2.21 5.78-5.14 5.78A4.72 4.72 0 0119.61 20a6.9 6.9 0 01-.53.68 5.22 5.22 0 01-3.77 1.72 5.16 5.16 0 01-3.89-1.4 5.68 5.68 0 01-1.51-4.36 6.64 6.64 0 014.36-6.37 6.88 6.88 0 015.9.45 2.59 2.59 0 011.18 2V18a2.52 2.52 0 002.51 2.52c1.94 0 3-1.81 3-3.6v-.15c0-5.82-4.72-11.22-10.1-11.57a10.82 10.82 0 103.9 20.57 1.1 1.1 0 01.94 2A12.93 12.93 0 0116 29zm.79-17a4.86 4.86 0 00-1.73.31 4.46 4.46 0 00-3 4.39 3.58 3.58 0 00.94 2.73 3.26 3.26 0 004.51-.22c1.34-1.45 1.64-4 1.7-5.4v-1c0-.13-.09-.24-.26-.36A3.83 3.83 0 0016.8 12z" />
  </svg>
));
At.displayName = 'At';
import { forwardRef, SVGProps } from 'react';

export interface AppleProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Apple = forwardRef<SVGSVGElement, AppleProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M19.89 29A6.3 6.3 0 0116 27.63 6.3 6.3 0 0112.11 29C7.93 29 3.5 21.3 3.5 14a7.78 7.78 0 014.95-7.18 5.51 5.51 0 01-.63-2.59 1 1 0 011-1h2.26a5.88 5.88 0 014.46 2A3.75 3.75 0 0118.2 3a1 1 0 011.18.75 1 1 0 01-.75 1.17A2.36 2.36 0 0017 7.1a8 8 0 013.57-.84A7.85 7.85 0 0128.5 14c0 5.53-4.25 15-8.61 15zM16 25.33a1 1 0 01.7.29A4.46 4.46 0 0019.89 27c2.67 0 6.65-7.77 6.65-13a5.88 5.88 0 00-5.95-5.8 6 6 0 00-3.95 1.5 1 1 0 01-.47.22.78.78 0 01-.26 0h-2.27a5.9 5.9 0 01-3.92-1.45A5.82 5.82 0 005.46 14c0 6.71 4.15 13 6.65 13a4.46 4.46 0 003.19-1.41 1 1 0 01.7-.26zM9.91 5.22A3.86 3.86 0 0013.64 8h1.15a3.84 3.84 0 00-3.73-2.77z" />
  </svg>
));
Apple.displayName = 'Apple';

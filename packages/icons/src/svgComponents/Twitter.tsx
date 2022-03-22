import { forwardRef, SVGProps } from 'react';

export interface TwitterProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Twitter = forwardRef<SVGSVGElement, TwitterProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M11.18 26.56a15.07 15.07 0 0015.17-15.17v-.69A11 11 0 0029 7.93a10.24 10.24 0 01-3.06.84 5.33 5.33 0 002.34-2.95 10.83 10.83 0 01-3.39 1.3A5.34 5.34 0 0015.8 12a15.12 15.12 0 01-11-5.57 5.33 5.33 0 001.65 7.12A5.14 5.14 0 014 12.86v.07a5.33 5.33 0 004.28 5.23 5.31 5.31 0 01-2.41.09 5.36 5.36 0 005 3.71 10.65 10.65 0 01-6.62 2.28A10.81 10.81 0 013 24.17a15.19 15.19 0 008.18 2.39" />
  </svg>
));
Twitter.displayName = 'Twitter';
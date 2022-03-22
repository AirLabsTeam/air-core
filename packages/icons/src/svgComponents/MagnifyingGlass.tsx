import { forwardRef, SVGProps } from 'react';

export interface MagnifyingGlassProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const MagnifyingGlass = forwardRef<SVGSVGElement, MagnifyingGlassProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M4 13.47a9.57 9.57 0 0119.14 0 9.39 9.39 0 01-1.87 5.62l6.37 6.72a1.29 1.29 0 01-1.87 1.79l-6.32-6.66A9.59 9.59 0 014 13.47zm9.57-6.88a6.88 6.88 0 107 6.88 6.94 6.94 0 00-7-6.88z" />
  </svg>
));
MagnifyingGlass.displayName = 'MagnifyingGlass';

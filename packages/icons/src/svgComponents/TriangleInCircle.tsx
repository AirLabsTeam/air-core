import { forwardRef, SVGProps } from 'react';

export interface TriangleInCircleProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const TriangleInCircle = forwardRef<SVGSVGElement, TriangleInCircleProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 30a14 14 0 1114-14 14 14 0 01-14 14zm0-25.82A11.82 11.82 0 1027.82 16 11.83 11.83 0 0016 4.18zm-6.87 10a1 1 0 01.91-.61H22a1 1 0 01.7 1.69l-6 6a1 1 0 01-1.4 0l-6-6a1 1 0 01-.17-1.13z" />
  </svg>
));
TriangleInCircle.displayName = 'TriangleInCircle';

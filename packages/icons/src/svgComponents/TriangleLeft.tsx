import { forwardRef, SVGProps } from 'react';

export interface TriangleLeftProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const TriangleLeft = forwardRef<SVGSVGElement, TriangleLeftProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.38 9.08A1 1 0 0119 10v12a1 1 0 01-.62.92 1 1 0 01-1.09-.21l-6-6a1 1 0 010-1.42l6-6a1 1 0 011.09-.21z" />
  </svg>
));
TriangleLeft.displayName = 'TriangleLeft';

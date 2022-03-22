import { forwardRef, SVGProps } from 'react';

export interface TriangleDownProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const TriangleDown = forwardRef<SVGSVGElement, TriangleDownProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M9.08 13.62A1 1 0 0110 13h12a1 1 0 01.92.62 1 1 0 01-.21 1.09l-6 6a1 1 0 01-1.42 0l-6-6a1 1 0 01-.21-1.09z" />
  </svg>
));
TriangleDown.displayName = 'TriangleDown';

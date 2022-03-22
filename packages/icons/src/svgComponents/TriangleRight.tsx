import { forwardRef, SVGProps } from 'react';

export interface TriangleRightProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const TriangleRight = forwardRef<SVGSVGElement, TriangleRightProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M13.62 22.92A1 1 0 0113 22V10a1 1 0 01.62-.92 1 1 0 011.09.21l6 6a1 1 0 010 1.42l-6 6a1 1 0 01-1.09.21z" />
  </svg>
));
TriangleRight.displayName = 'TriangleRight';

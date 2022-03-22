import { forwardRef, SVGProps } from 'react';

export interface TriangleUpProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const TriangleUp = forwardRef<SVGSVGElement, TriangleUpProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M22.92 18.38A1 1 0 0122 19H10a1 1 0 01-.92-.62 1 1 0 01.21-1.09l6-6a1 1 0 011.42 0l6 6a1 1 0 01.21 1.09z" />
  </svg>
));
TriangleUp.displayName = 'TriangleUp';

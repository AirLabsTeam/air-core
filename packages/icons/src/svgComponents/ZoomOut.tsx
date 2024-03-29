import { forwardRef, SVGProps } from 'react';

export interface ZoomOutProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ZoomOut = forwardRef<SVGSVGElement, ZoomOutProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 30a14 14 0 1114-14 14 14 0 01-14 14zm0-25.82A11.82 11.82 0 1027.82 16 11.83 11.83 0 0016 4.18zm5.29 12.91H10.65a1.09 1.09 0 010-2.18h10.64a1.09 1.09 0 010 2.18z" />
  </svg>
));
ZoomOut.displayName = 'ZoomOut';

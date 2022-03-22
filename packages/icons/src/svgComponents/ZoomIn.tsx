import { forwardRef, SVGProps } from 'react';

export interface ZoomInProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ZoomIn = forwardRef<SVGSVGElement, ZoomInProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 30a14 14 0 1114-14 14 14 0 01-14 14zm0-25.82A11.82 11.82 0 1027.82 16 11.83 11.83 0 0016 4.18zm0 18.24a1.09 1.09 0 01-1.09-1.1v-4.23h-4.26a1.09 1.09 0 010-2.18h4.23v-4.22a1.09 1.09 0 112.18 0v4.22h4.23a1.09 1.09 0 010 2.18h-4.23v4.23a1.09 1.09 0 01-1.06 1.1z" />
  </svg>
));
ZoomIn.displayName = 'ZoomIn';

import { forwardRef, SVGProps } from 'react';

export interface MarkerProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Marker = forwardRef<SVGSVGElement, MarkerProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 4.4h.56a8.82 8.82 0 017.65 5.16 9 9 0 01-.95 9.4l-6 8a1.57 1.57 0 01-2.5 0l-6-8a9 9 0 01-1-9.4 8.82 8.82 0 017.65-5.16H16m0 14.35a5.7 5.7 0 10-5.74-5.7 5.73 5.73 0 005.74 5.7M16 2h-.68a11.49 11.49 0 00-8.5 18.39l6 8a4 4 0 006.34 0l6-8A11.49 11.49 0 0016.68 2H16zm0 14.35a3.3 3.3 0 113.34-3.3 3.32 3.32 0 01-3.34 3.3z" />
  </svg>
));
Marker.displayName = 'Marker';

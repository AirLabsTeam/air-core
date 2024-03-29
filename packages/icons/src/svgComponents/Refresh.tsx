import { forwardRef, SVGProps } from 'react';

export interface RefreshProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Refresh = forwardRef<SVGSVGElement, RefreshProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M4.15 10.68A12.88 12.88 0 0126.23 8.3l.26-1.3a1.26 1.26 0 112.51.5l-1 4.69a1.26 1.26 0 01-.59.83 1.3 1.3 0 01-.66.19 1 1 0 01-.35-.06l-4.69-1.38a1.27 1.27 0 11.72-2.43l1.76.52a10.35 10.35 0 10-4.67 15.82 10.29 10.29 0 005.71-5.31 1.27 1.27 0 011.77-.63 1.29 1.29 0 01.62 1.69 12.73 12.73 0 01-2.66 3.76 12.89 12.89 0 01-14.48 2.51 6.73 6.73 0 01-.61-.33 12.85 12.85 0 01-5.72-16.69z" />
  </svg>
));
Refresh.displayName = 'Refresh';

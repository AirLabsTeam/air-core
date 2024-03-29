import { forwardRef, SVGProps } from 'react';

export interface SidePanelClosedProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SidePanelClosed = forwardRef<SVGSVGElement, SidePanelClosedProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M13.6 16a1.17 1.17 0 01.12-.52 1.21 1.21 0 01.21-.31l3.16-3.1a1.18 1.18 0 111.66 1.69l-1.09 1.07h5.44a1.19 1.19 0 110 2.38h-5.41l1.09 1.07a1.19 1.19 0 01-.83 2 1.21 1.21 0 01-.83-.34L14 16.85a1.21 1.21 0 01-.21-.31 1.17 1.17 0 01-.19-.54zM29 5.13v21.74A2.13 2.13 0 0126.87 29H5.13A2.13 2.13 0 013 26.87V5.13A2.13 2.13 0 015.13 3h21.74A2.13 2.13 0 0129 5.13zM5.38 26.62h2.15V5.38H5.38zM26.62 5.38H9.7v21.24h16.92z"
    />
  </svg>
));
SidePanelClosed.displayName = 'SidePanelClosed';

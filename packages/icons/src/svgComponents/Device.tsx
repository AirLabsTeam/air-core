import { forwardRef, SVGProps } from 'react';

export interface DeviceProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Device = forwardRef<SVGSVGElement, DeviceProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.92 29H7.08A2.16 2.16 0 015 26.92V5.08A2.08 2.08 0 017.08 3h17.84A2.08 2.08 0 0127 5.08v21.84A2.08 2.08 0 0124.92 29zM7.18 26.82h17.64v-4.67H7.18zm0-6.85h17.64V5.18H7.18zm14.67 5.66H15.6a1.1 1.1 0 010-2.19h6.25a1.1 1.1 0 010 2.19zm-5.85-8a1.09 1.09 0 01-1.09-1.09V11l-1.3 1.34a1.08 1.08 0 01-1.54 0 1.1 1.1 0 010-1.55l3.14-3.29a1.21 1.21 0 01.31-.21 1 1 0 01.48-.12 1 1 0 01.36.07h.07a.94.94 0 01.29.2L20 10.77a1.1 1.1 0 010 1.55 1.08 1.08 0 01-1.54 0L17.09 11v5.5A1.09 1.09 0 0116 17.59z" />
  </svg>
));
Device.displayName = 'Device';

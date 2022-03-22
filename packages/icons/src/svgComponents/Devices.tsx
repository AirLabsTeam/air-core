import { forwardRef, SVGProps } from 'react';

export interface DevicesProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Devices = forwardRef<SVGSVGElement, DevicesProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.91 27h-6a1.09 1.09 0 01-1.09-1.09v-2.38h-5.5v1.29h2.9a1.09 1.09 0 010 2.18h-7.91a1.09 1.09 0 110-2.18h2.8v-1.29h-9A1.09 1.09 0 013 22.44V6.09A1.09 1.09 0 014.09 5H24.8a1.09 1.09 0 011.09 1.09V15h2A1.09 1.09 0 0129 16.1v9.81A1.09 1.09 0 0127.91 27zM23 24.82h3.85v-7.63H23zM5.18 21.35h15.61V16.1a1.09 1.09 0 011.09-1.1h1.83V7.18H5.18z" />
  </svg>
));
Devices.displayName = 'Devices';

import { forwardRef, SVGProps } from 'react';

export interface DesktopAppProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DesktopApp = forwardRef<SVGSVGElement, DesktopAppProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.46 14.48a1 1 0 01-1 1H13.4a1 1 0 010-2h10.06a1 1 0 011 1zM8.71 13.23A1.25 1.25 0 1010 14.48a1.25 1.25 0 00-1.29-1.25zm14.75 5.24H13.4a1 1 0 100 2h10.06a1 1 0 000-2zm-14.75-.25A1.25 1.25 0 1010 19.47a1.25 1.25 0 00-1.29-1.25zM29 5.08v21.84A2.08 2.08 0 0126.92 29H5.08A2.08 2.08 0 013 26.92V5.08A2.08 2.08 0 015.08 3h21.84A2.08 2.08 0 0129 5.08zm-24 0V8h22V5.08a.07.07 0 00-.08-.08H5.08a.07.07 0 00-.08.08zm22 21.84V10H5v17a.07.07 0 00.08.08h21.84a.07.07 0 00.08-.16z" />
  </svg>
));
DesktopApp.displayName = 'DesktopApp';

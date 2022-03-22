import { forwardRef, SVGProps } from 'react';

export interface NavSlaManagerProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const NavSlaManager = forwardRef<SVGSVGElement, NavSlaManagerProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 29.5a12 12 0 01-1-23.87v-.85h-1a1.14 1.14 0 110-2.28h4.3a1.14 1.14 0 110 2.28h-1v.88A12 12 0 0116 29.5zm0-21.63a9.68 9.68 0 109.71 9.67A9.71 9.71 0 0016 7.87zm3.11 12.58a1.09 1.09 0 01-.46-.1L15.54 19a1.14 1.14 0 01-.68-1v-6.28a1.15 1.15 0 012.29 0v5.48l2.42 1.07a1.14 1.14 0 01-.46 2.18z" />
  </svg>
));
NavSlaManager.displayName = 'NavSlaManager';

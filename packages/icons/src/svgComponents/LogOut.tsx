import { forwardRef, SVGProps } from 'react';

export interface LogOutProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const LogOut = forwardRef<SVGSVGElement, LogOutProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 27H4.09A1.09 1.09 0 013 25.91V6.09A1.09 1.09 0 014.09 5H16a1.09 1.09 0 011.09 1.09v3.47a1.09 1.09 0 01-2.18 0V7.18H5.18v17.64h9.73v-2.08a1.09 1.09 0 012.18 0v3.17A1.09 1.09 0 0116 27zm6.45-4.36a1.09 1.09 0 01-.76-1.88l3.51-3.37H9a1.09 1.09 0 110-2.18h16.2l-3.51-3.38a1.09 1.09 0 111.52-1.57l5.45 5.25a1.34 1.34 0 01.22.31.14.14 0 000 .06 1 1 0 01.08.39 1 1 0 01-.08.38v.06a1 1 0 01-.21.3l-5.45 5.24a1.07 1.07 0 01-.77.39z" />
  </svg>
));
LogOut.displayName = 'LogOut';

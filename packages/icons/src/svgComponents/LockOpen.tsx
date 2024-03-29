import { forwardRef, SVGProps } from 'react';

export interface LockOpenProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const LockOpen = forwardRef<SVGSVGElement, LockOpenProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M23 29H9a3 3 0 01-3-3V14.85a3 3 0 012.54-3l-.11-.51a7.14 7.14 0 014.52-9 7 7 0 016.52 1.2 1.14 1.14 0 01.18 1.6 1.12 1.12 0 01-1.58.18 4.7 4.7 0 00-4.43-.82 4.87 4.87 0 00-3.07 6.12l.32 1.17H23a3 3 0 013 3V26a3 3 0 01-3 3zM9 14.08a.76.76 0 00-.76.77V26a.76.76 0 00.76.77h14a.76.76 0 00.76-.77V14.85a.76.76 0 00-.76-.77zm7 10.38a1.14 1.14 0 01-1.13-1.13v-2.57a2.17 2.17 0 011.13-4 2.14 2.14 0 012.12 2.16 2.2 2.2 0 01-1 1.84v2.56A1.13 1.13 0 0116 24.46z" />
  </svg>
));
LockOpen.displayName = 'LockOpen';

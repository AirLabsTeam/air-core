import { forwardRef, SVGProps } from 'react';

export interface LockFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const LockFilled = forwardRef<SVGSVGElement, LockFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.1 11.9H23V10a7 7 0 00-14 0v1.9H7.9A2.9 2.9 0 005 14.8v11.3A2.9 2.9 0 007.9 29h16.2a2.9 2.9 0 002.9-2.9V14.8a2.9 2.9 0 00-2.9-2.9zM17 20.8v2.6a1 1 0 01-2 0v-2.6a2.1 2.1 0 01-1-1.8 2 2 0 014 0 2 2 0 01-1 1.8zm4-8.9H11V10a5 5 0 015-5 5 5 0 015 5z" />
  </svg>
));
LockFilled.displayName = 'LockFilled';

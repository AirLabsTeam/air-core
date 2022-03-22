import { forwardRef, SVGProps } from 'react';

export interface UserProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const User = forwardRef<SVGSVGElement, UserProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21.6 9.7c0 3.72-2.51 6.8-5.6 6.8s-5.6-2.9-5.6-6.8a5.6 5.6 0 1111.2 0zM26 28a10.5 10.5 0 00-20 0h10"
    />
  </svg>
));
User.displayName = 'User';

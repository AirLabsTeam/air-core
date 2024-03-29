import { forwardRef, SVGProps } from 'react';

export interface LockProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Lock = forwardRef<SVGSVGElement, LockProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fillRule="evenodd"
      d="M9 10a7 7 0 0114 0v1.9h1.1a3 3 0 012.9 2.9v11.3a2.89 2.89 0 01-2.9 2.9H7.9A3 3 0 015 26.1V14.8a3 3 0 012.9-2.9H9zm-1.1 3.9a1 1 0 00-.9.9v11.3a1 1 0 00.9.9h16.2a.9.9 0 00.9-.9V14.8a1 1 0 00-.9-.9zm13.1-2H11V10a5 5 0 0110 0zm-7 7.2a2 2 0 012-2 2.09 2.09 0 012 2 2 2 0 01-1 1.74v2.66a1 1 0 01-2 0v-2.66a2 2 0 01-1-1.74z"
    />
  </svg>
));
Lock.displayName = 'Lock';

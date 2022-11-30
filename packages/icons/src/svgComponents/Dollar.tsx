import { forwardRef, SVGProps } from 'react';

export interface DollarProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Dollar = forwardRef<SVGSVGElement, DollarProps>((props, ref) => (
  <svg ref={ref} {...props} aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.7 2.2a.7.7 0 1 0-1.4 0v.7a2.8 2.8 0 1 0 0 5.6v2.8a1.401 1.401 0 0 1-1.32-.933.7.7 0 0 0-1.32.466A2.801 2.801 0 0 0 7.3 12.7v.7a.7.7 0 1 0 1.4 0v-.7a2.8 2.8 0 1 0 0-5.6V4.3a1.4 1.4 0 0 1 1.32.933.7.7 0 0 0 1.32-.466A2.8 2.8 0 0 0 8.7 2.9v-.7ZM7.3 4.3a1.4 1.4 0 0 0 0 2.8V4.3Zm1.4 4.2v2.8a1.4 1.4 0 1 0 0-2.8Z"
      clipRule="evenodd"
    />
  </svg>
));

Dollar.displayName = 'Dollar';

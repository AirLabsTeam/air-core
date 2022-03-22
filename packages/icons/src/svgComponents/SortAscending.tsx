import { forwardRef, SVGProps } from 'react';

export interface SortAscendingProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SortAscending = forwardRef<SVGSVGElement, SortAscendingProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M28.47 7.21H16m-2.33 12.27l-5.09 5.31-5.07-5.31M8.58 7.21v15.24m19.89 2.34h-6.56M19.63 16h8.87"
    />
  </svg>
));
SortAscending.displayName = 'SortAscending';

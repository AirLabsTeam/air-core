import { forwardRef, SVGProps } from 'react';

export interface SortDescendingProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SortDescending = forwardRef<SVGSVGElement, SortDescendingProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.48 12.48l5.07-5.32 5.08 5.32m-5.08-3v15.27m7.39 0h12.49M21.87 7.16h6.56M19.56 16h8.87"
    />
  </svg>
));
SortDescending.displayName = 'SortDescending';

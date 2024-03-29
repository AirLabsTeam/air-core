import { forwardRef, SVGProps } from 'react';

export interface CalendarProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Calendar = forwardRef<SVGSVGElement, CalendarProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.15 5.09h-1.89V4a1.5 1.5 0 00-3 0v1.09h-8.52V4a1.5 1.5 0 00-3 0v1.09H6.85a4.06 4.06 0 00-4 4.05v16.3a4.05 4.05 0 004.05 4h18.3a4.05 4.05 0 004.05-4V9.14a4.06 4.06 0 00-4.1-4.05zm-18.3 2.4h1.91a1.49 1.49 0 003 0h8.56a1.49 1.49 0 003 0h1.91a1.65 1.65 0 011.57 1.65v1.5H5.2v-1.5a1.65 1.65 0 011.65-1.65zm18.3 19.6H6.85a1.65 1.65 0 01-1.65-1.65V13h21.6v12.4a1.65 1.65 0 01-1.65 1.69z" />
    <rect width="4.41" height="4.41" x="7.59" y="15.16" rx=".93" />
    <rect width="4.41" height="4.41" x="13.74" y="15.16" rx=".93" />
    <rect width="4.41" height="4.41" x="19.89" y="20.91" rx=".93" />
  </svg>
));
Calendar.displayName = 'Calendar';

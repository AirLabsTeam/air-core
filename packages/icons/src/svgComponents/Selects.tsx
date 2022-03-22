import { forwardRef, SVGProps } from 'react';

export interface SelectsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Selects = forwardRef<SVGSVGElement, SelectsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21.05 12.21C17 14.6 14 19.8 14 19.8l-3-3.4M4 13v6m24-6v6M19 4h-6m6 24h-6m-9-3.5V28h4.4m15.3 0H28v-3.5m0-17V4h-4.3M8.4 4H4v3.5"
    />
  </svg>
));
Selects.displayName = 'Selects';

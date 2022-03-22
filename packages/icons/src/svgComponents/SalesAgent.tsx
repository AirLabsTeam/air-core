import { forwardRef, SVGProps } from 'react';

export interface SalesAgentProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SalesAgent = forwardRef<SVGSVGElement, SalesAgentProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M7.49 16.09h.79A1.09 1.09 0 009.38 15v-2.71a1.11 1.11 0 00-.67-1 7.93 7.93 0 0115.74 1.4v2.51h-1.6a8.94 8.94 0 00.27-2.2 6.62 6.62 0 10-13.23 0c0 4.26 2.9 7.59 6.61 7.59a6.35 6.35 0 005.5-3.22h3.6a1.09 1.09 0 001.09-1.1v-3.6a10.13 10.13 0 10-20.25 0V15a1.09 1.09 0 001.05 1.09zm9 2.33c-2.48 0-4.42-2.37-4.42-5.4a4.42 4.42 0 118.84 0 6.32 6.32 0 01-.37 2.16h-3.11a1.1 1.1 0 100 2.19h1.68a3.89 3.89 0 01-2.61 1.05zm10.66 9.31A14 14 0 0016 22.43a14 14 0 00-11.15 5.3 1.1 1.1 0 00.87 1.77h9.91a1.1 1.1 0 000-2.2H8.31A12 12 0 0116 24.63a11.77 11.77 0 019.41 4.45 1.12 1.12 0 00.87.42 1.1 1.1 0 00.87-1.77z" />
  </svg>
));
SalesAgent.displayName = 'SalesAgent';

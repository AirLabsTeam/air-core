import { forwardRef, SVGProps } from 'react';

export interface SkipProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Skip = forwardRef<SVGSVGElement, SkipProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M29.05 19.15a1.33 1.33 0 00-.95-.33 1.35 1.35 0 00-.91.45L25 21.77v-5A11.34 11.34 0 0013.74 5.38 11.34 11.34 0 002.5 16.8V24a1.32 1.32 0 102.64 0v-7.2a8.71 8.71 0 018.6-8.8 8.71 8.71 0 018.61 8.79v5.14l-2.47-2.69a1.33 1.33 0 00-.92-.43 1.32 1.32 0 00-1 2.21l4.73 5.17a1.34 1.34 0 001 .42 1.3 1.3 0 001.1-.61l4.38-5a1.32 1.32 0 00.33-1 1.27 1.27 0 00-.45-.85z" />
  </svg>
));
Skip.displayName = 'Skip';

import { forwardRef, SVGProps } from 'react';

export interface HelpProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Help = forwardRef<SVGSVGElement, HelpProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fillRule="evenodd"
      d="M3 16a13 13 0 1113 13A13 13 0 013 16zm13.9 2.2c0-1 .4-1.5 1.7-2.3a4.15 4.15 0 002.2-3.9c0-2.4-1.9-4-4.7-4-2.3 0-4 1.1-4.6 2.9a1.23 1.23 0 00.2 1 1.05 1.05 0 00.9.5 1.17 1.17 0 001.1-.8 2.13 2.13 0 012.2-1.4 2 2 0 012.3 2c0 1.1-.4 1.6-1.7 2.4-1.5.9-2.2 1.9-2.1 3.4v.3a1.49 1.49 0 00.4.9 1.14 1.14 0 00.8.3h.1a1.19 1.19 0 001.2-1.3zm.35 4a1.48 1.48 0 01-1.5 1.5 1.57 1.57 0 01-1.5-1.5 1.5 1.5 0 013 0z"
    />
  </svg>
));
Help.displayName = 'Help';

import { forwardRef, SVGProps } from 'react';

export interface ClockProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Clock = forwardRef<SVGSVGElement, ClockProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 30a14 14 0 1114-14 14 14 0 01-14 14zm0-25.82A11.82 11.82 0 1027.82 16 11.83 11.83 0 0016 4.18zm4.74 14.39a1.14 1.14 0 00-.58-1.51l-3-1.33V9.05a1.14 1.14 0 00-2.28 0v7.43a1.14 1.14 0 00.68 1l3.7 1.63a1.09 1.09 0 00.46.1 1.12 1.12 0 001.02-.64z" />
  </svg>
));
Clock.displayName = 'Clock';

import { forwardRef, SVGProps } from 'react';

export interface DowntickProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Downtick = forwardRef<SVGSVGElement, DowntickProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M28.47 9.76L16 22.22 3.53 9.76h24.94z"
    />
  </svg>
));
Downtick.displayName = 'Downtick';

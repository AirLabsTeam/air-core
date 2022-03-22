import { forwardRef, SVGProps } from 'react';

export interface RadarProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Radar = forwardRef<SVGSVGElement, RadarProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 27.63l.7-.22a11.16 11.16 0 001.4-.55M28 16a12 12 0 10-12 12m2-12a2 2 0 11-2-2 2 2 0 012 2zm-2 7.5a7.5 7.5 0 117.5-7.5m-4 6.6h0M18 16h10"
    />
  </svg>
));
Radar.displayName = 'Radar';

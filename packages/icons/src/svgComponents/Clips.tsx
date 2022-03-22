import { forwardRef, SVGProps } from 'react';

export interface ClipsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Clips = forwardRef<SVGSVGElement, ClipsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M27.17 23.82H4.63v-16h22.54zM10 7.84V23M21.93 7.84V23m-17.3-9.84h5m-5 5.33h5m12.56-5.33h5m-5 5.33h5"
    />
  </svg>
));
Clips.displayName = 'Clips';

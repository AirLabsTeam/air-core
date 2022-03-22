import { forwardRef, SVGProps } from 'react';

export interface DashedPlusProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DashedPlus = forwardRef<SVGSVGElement, DashedPlusProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 11v10m5-5H11m-7-3v6m24-6v6M19 4h-6m6 24h-6m-4.6 0H4v-3.5m24 0V28h-4.36m0-24H28v3.5m-24 0V4h4.4"
    />
  </svg>
));
DashedPlus.displayName = 'DashedPlus';

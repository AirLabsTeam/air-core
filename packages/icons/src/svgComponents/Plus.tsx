import { forwardRef, SVGProps } from 'react';

export interface PlusProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Plus = forwardRef<SVGSVGElement, PlusProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M7.13 14.37a1.63 1.63 0 100 3.26h7.24v7.24a1.63 1.63 0 103.26 0v-7.24h7.24a1.63 1.63 0 000-3.26h-7.24V7.13a1.63 1.63 0 10-3.26 0v7.24z" />
  </svg>
));
Plus.displayName = 'Plus';

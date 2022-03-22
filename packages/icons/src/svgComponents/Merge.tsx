import { forwardRef, SVGProps } from 'react';

export interface MergeProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Merge = forwardRef<SVGSVGElement, MergeProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.47 14.86l-4.22-4.13a1.18 1.18 0 00-1.66 1.69l2.17 2.12H14.7a4.83 4.83 0 01-4.7-3.69 4.52 4.52 0 10-2.41.06 7.21 7.21 0 003.16 4.82 7.26 7.26 0 00-3.24 5.38 4.55 4.55 0 102.4 0 4.89 4.89 0 014.79-4.21h9.06l-2.17 2.16a1.17 1.17 0 000 1.67 1.16 1.16 0 00.84.35 1.2 1.2 0 00.84-.34l4.22-4.19a1.18 1.18 0 000-1.69zM6.54 6.53A2.17 2.17 0 118.71 8.7a2.17 2.17 0 01-2.17-2.17zm4.33 18.94a2.17 2.17 0 11-2.16-2.17 2.16 2.16 0 012.16 2.17z" />
  </svg>
));
Merge.displayName = 'Merge';

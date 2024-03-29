import { forwardRef, SVGProps } from 'react';

export interface SortingProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Sorting = forwardRef<SVGSVGElement, SortingProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.35 20.75l-5.47 5.9a1.1 1.1 0 01-1.61 0l-5.47-5.9a1.11 1.11 0 01.05-1.57 1.08 1.08 0 011.55.05L9 23.08v-17a1.1 1.1 0 112.2 0v17l3.57-3.85a1.1 1.1 0 011.56-.05 1.12 1.12 0 01.02 1.57zm-.65-7.93a1.1 1.1 0 001.56-.05l3.57-3.85v17a1.1 1.1 0 102.2 0v-17l3.57 3.85a1.08 1.08 0 001.55.05 1.11 1.11 0 00.05-1.57l-5.47-5.9a1.1 1.1 0 00-1.61 0l-5.47 5.9a1.12 1.12 0 00.05 1.57z" />
  </svg>
));
Sorting.displayName = 'Sorting';

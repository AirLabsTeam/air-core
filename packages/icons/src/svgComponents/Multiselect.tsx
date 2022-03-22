import { forwardRef, SVGProps } from 'react';

export interface MultiselectProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Multiselect = forwardRef<SVGSVGElement, MultiselectProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M20.21 9.18a1.09 1.09 0 01-.37 1.5c-4.27 2.6-7.63 8.2-7.66 8.26a1.1 1.1 0 01-.94.53 1.09 1.09 0 01-.94-.53L7.92 15a1.09 1.09 0 011.87-1.12l1.49 2.48a27.11 27.11 0 017.43-7.51 1.08 1.08 0 011.5.33zM22.65 25H5.38A2.41 2.41 0 013 22.65V5.38A2.41 2.41 0 015.38 3h17.27A2.41 2.41 0 0125 5.38v17.27A2.41 2.41 0 0122.65 25zM5.38 22.85h17.27a.23.23 0 00.2-.2V5.38a.23.23 0 00-.2-.2H5.38a.23.23 0 00-.2.2v17.27a.23.23 0 00.2.2zm22.53-13.6a1.09 1.09 0 00-1.09 1.09v14.29a2.22 2.22 0 01-2.19 2.19H10A1.09 1.09 0 0010 29h14.63A4.37 4.37 0 0029 24.63V10.34a1.09 1.09 0 00-1.09-1.09z" />
  </svg>
));
Multiselect.displayName = 'Multiselect';
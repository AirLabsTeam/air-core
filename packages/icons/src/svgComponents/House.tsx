import { forwardRef, SVGProps } from 'react';

export interface HouseProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const House = forwardRef<SVGSVGElement, HouseProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.68 28.38h-6.85a.93.93 0 01-.92-.91L17.85 23a1.84 1.84 0 00-3.66 0v4.49a.92.92 0 01-.91.92H6.33a2.09 2.09 0 01-2.06-2.12v-7.72a.89.89 0 01-.68.2.91.91 0 01-.59-.36L1.18 16a.92.92 0 01.16-1.26L14.92 3.83a.9.9 0 011.12 0l14.59 11a.89.89 0 01.36.6.9.9 0 01-.17.68L29 18.41a.9.9 0 01-1.27.19v7.69a2.09 2.09 0 01-2.05 2.09zm-5.95-1.84h5.95a.26.26 0 00.22-.28V17.2L15.52 9.41 6.1 17.08v9.18a.26.26 0 00.23.28h6V23a3.65 3.65 0 017.3 0zm8.4-10l.68-.9-13.3-10-12.33 10 .67.9 11.07-9a.92.92 0 011.12 0z" />
  </svg>
));
House.displayName = 'House';

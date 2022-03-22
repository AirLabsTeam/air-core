import { forwardRef, SVGProps } from 'react';

export interface SaveProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Save = forwardRef<SVGSVGElement, SaveProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.91 29H4.09A1.09 1.09 0 013 27.91V4.09A1.09 1.09 0 014.09 3h19.16a1.07 1.07 0 01.77.32L28.68 8a1.1 1.1 0 01.32.78v19.13A1.09 1.09 0 0127.91 29zm-3.67-2.18h2.58V9.21l-3.58-3.57v6.59a1.09 1.09 0 01-1.09 1.09H9.85a1.09 1.09 0 01-1.09-1.09v-7H5.18v21.59h2.58v-8.24a1.09 1.09 0 011.09-1.09h14.3a1.09 1.09 0 011.09 1.09zm-14.24 0h12.1v-7.15H10zm1-15.68h10.06v-6H10.94zm5.56 12.4h-4.13a1.09 1.09 0 110-2.18h4.07a1.09 1.09 0 110 2.18z" />
  </svg>
));
Save.displayName = 'Save';

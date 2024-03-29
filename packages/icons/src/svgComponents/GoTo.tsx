import { forwardRef, SVGProps } from 'react';

export interface GoToProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const GoTo = forwardRef<SVGSVGElement, GoToProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M22.65 29H7.37A4.37 4.37 0 013 24.63V9.35A4.32 4.32 0 017.37 5H15a1.1 1.1 0 010 2.19H7.37a2.16 2.16 0 00-2.19 2.16v15.28a2.22 2.22 0 002.19 2.19h15.28a2.21 2.21 0 002.18-2.19V17A1.1 1.1 0 0127 17v7.64A4.37 4.37 0 0122.65 29zm-11.21-7.34a1.13 1.13 0 01-.78-.32 1.11 1.11 0 010-1.55L25.27 5.18H21A1.09 1.09 0 1121 3h7a1.16 1.16 0 01.42.08 1.16 1.16 0 01.59.59 1.16 1.16 0 01.08.42v7a1.09 1.09 0 01-2.18 0V6.73l-14.7 14.61a1.13 1.13 0 01-.77.32z" />
  </svg>
));
GoTo.displayName = 'GoTo';

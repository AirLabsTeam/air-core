import { forwardRef, SVGProps } from 'react';

export interface NavFeedbackProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const NavFeedback = forwardRef<SVGSVGElement, NavFeedbackProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.58 29a1.2 1.2 0 01-.48-.11 1.09 1.09 0 01-.61-1l.15-3.33h-3.23C7.58 24.42 3 20.35 3 14.41A11.43 11.43 0 0114.41 3h3.28A11.38 11.38 0 0129 14.41v.3c0 5.43-3.51 8.71-9.71 14a1.05 1.05 0 01-.71.29zm.2-6.65a1.11 1.11 0 01.79.33 1.15 1.15 0 01.3.81l-.09 1.92c4.87-4.3 7-6.93 7-10.71v-.3a9.19 9.19 0 00-9.13-9.23h-3.24a9.24 9.24 0 00-9.23 9.23c0 4.73 3.63 7.85 9.25 8zm-2.55-2.54a1 1 0 01-.34-.06c-.23-.08-5.6-2.11-5.6-6.76a3.67 3.67 0 013.79-3.53 3.92 3.92 0 012.15.63 3.91 3.91 0 012.14-.63 3.67 3.67 0 013.8 3.54c0 4.32-5.32 6.64-5.55 6.74a1.09 1.09 0 01-.39.08zm-2.15-8.37A1.71 1.71 0 0012.27 13c0 2.69 2.89 4.26 3.93 4.74 1.05-.54 4-2.26 4-4.74a1.7 1.7 0 00-1.81-1.55 1.9 1.9 0 00-1.41.61 1 1 0 01-.73.31 1 1 0 01-.73-.32 1.93 1.93 0 00-1.44-.6z" />
  </svg>
));
NavFeedback.displayName = 'NavFeedback';

import { forwardRef, SVGProps } from 'react';

export interface NavPoliciesProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const NavPolicies = forwardRef<SVGSVGElement, NavPoliciesProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M22.59 13.29a1.14 1.14 0 01-1.14 1.14H10.94a1.14 1.14 0 110-2.27h10.51a1.13 1.13 0 011.14 1.13zM15 21.3h-4.06a1.14 1.14 0 000 2.28H15a1.14 1.14 0 000-2.28zM26.87 7.45v19.47A3.08 3.08 0 0123.79 30H8.21a3.08 3.08 0 01-3.08-3.08V7.45a3.08 3.08 0 013.08-3.08h3.34a4.95 4.95 0 018.45 0h3.79a3.08 3.08 0 013.08 3.08zm-12-2.69a.9.9 0 10.9-.89.9.9 0 00-.89.89zm9.73 2.69a.82.82 0 00-.81-.81h-3.07v.6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-.58H8.21a.82.82 0 00-.81.81v19.45a.82.82 0 00.81.81h15.58a.82.82 0 00.81-.81zm-3.15 9.28H10.94a1.14 1.14 0 100 2.27h10.51a1.14 1.14 0 100-2.27z" />
  </svg>
));
NavPolicies.displayName = 'NavPolicies';
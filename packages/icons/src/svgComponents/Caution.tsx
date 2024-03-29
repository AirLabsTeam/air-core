import { forwardRef, SVGProps } from 'react';

export interface CautionProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Caution = forwardRef<SVGSVGElement, CautionProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fillRule="evenodd"
      d="M3.82 22.69A2.28 2.28 0 003.74 25a2.33 2.33 0 002 1.2h21.39a2.33 2.33 0 002-1.2 2.28 2.28 0 00-.08-2.35L18.42 4a2.34 2.34 0 00-3.93 0zm12.63 1.12A1.42 1.42 0 1015 22.39a1.51 1.51 0 001.45 1.42zm0-4.71a1 1 0 001-1.06l.34-6.64a1.26 1.26 0 00-1.24-1.18 1.19 1.19 0 00-1.25 1.18l.14 6.6a1 1 0 001.01 1.1z"
    />
  </svg>
));
Caution.displayName = 'Caution';

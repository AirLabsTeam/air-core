import { forwardRef, SVGProps } from 'react';

export interface ArrowDownProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ArrowDown = forwardRef<SVGSVGElement, ArrowDownProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.13 18.37a1.19 1.19 0 00-1.68.05l-5.23 5.38V5.2a1.19 1.19 0 10-2.37 0v18.69l-5.32-5.42a1.18 1.18 0 00-1.68 0 1.22 1.22 0 000 1.7l7.35 7.49a1 1 0 00.17.11 1.27 1.27 0 00.19.13 1.15 1.15 0 00.44.1 1.22 1.22 0 00.46-.09 1.58 1.58 0 00.33-.22h.05l7.28-7.56a1.21 1.21 0 00.01-1.76z" />
  </svg>
));
ArrowDown.displayName = 'ArrowDown';

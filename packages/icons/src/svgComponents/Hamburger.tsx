import { forwardRef, SVGProps } from 'react';

export interface HamburgerProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Hamburger = forwardRef<SVGSVGElement, HamburgerProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M6.4 7a1.4 1.4 0 000 2.8h19.2a1.4 1.4 0 000-2.8zM5 16a1.4 1.4 0 011.4-1.4h19.2a1.4 1.4 0 010 2.8H6.4A1.4 1.4 0 015 16zm0 7.6a1.4 1.4 0 011.4-1.4h19.2a1.4 1.4 0 010 2.8H6.4A1.4 1.4 0 015 23.6z" />
  </svg>
));
Hamburger.displayName = 'Hamburger';

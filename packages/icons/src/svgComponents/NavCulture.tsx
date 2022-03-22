import { forwardRef, SVGProps } from 'react';

export interface NavCultureProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const NavCulture = forwardRef<SVGSVGElement, NavCultureProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M21.86 27.84H10.14a1 1 0 110-2.05h11.72a1 1 0 110 2.05zm4.61-4.34H5.53a1 1 0 110-2.05h20.94a1 1 0 110 2.05zm3-3.91H2.52a1 1 0 010-2.05h.78a13 13 0 0126 0h.16a1 1 0 110 2.05zm-3.72-2.05h1.51a11 11 0 00-21.9 0h1.51a9.46 9.46 0 0118.88 0zm-4.52 0h2.46a7.41 7.41 0 00-14.77 0h2.46a5 5 0 019.85 0zm-7.77 0h5.69a2.92 2.92 0 00-5.69 0z" />
  </svg>
));
NavCulture.displayName = 'NavCulture';

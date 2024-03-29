import { forwardRef, SVGProps } from 'react';

export interface BoxLogoProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BoxLogo = forwardRef<SVGSVGElement, BoxLogoProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M12.14 15.76a4.85 4.85 0 00-7.2-1.61v-4.08a1 1 0 00-1.94 0v8a4.86 4.86 0 009.14 2.2 4.85 4.85 0 104.28-7.13 4.76 4.76 0 00-4.28 2.62zm-4.29 5.18A2.91 2.91 0 1110.76 18a2.91 2.91 0 01-2.91 2.91m8.57 0A2.91 2.91 0 1119.33 18a2.91 2.91 0 01-2.91 2.91m12.38.32a.92.92 0 01-.22 1.34 1.12 1.12 0 01-1.47-.18l-2.27-2.77-2.27 2.77a1.1 1.1 0 01-1.46.18.91.91 0 01-.22-1.34L23.52 18l-2.63-3.24a.92.92 0 01.22-1.35 1.12 1.12 0 011.46.18l2.27 2.78 2.27-2.78a1.13 1.13 0 011.47-.18.92.92 0 01.22 1.35L26.16 18l2.64 3.23" />
  </svg>
));
BoxLogo.displayName = 'BoxLogo';

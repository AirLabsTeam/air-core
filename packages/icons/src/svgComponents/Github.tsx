import { forwardRef, SVGProps } from 'react';

export interface GithubProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Github = forwardRef<SVGSVGElement, GithubProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 3.81a12.5 12.5 0 00-3.95 24.36c.62.11.85-.27.85-.6v-2.13c-3.48.76-4.22-1.67-4.22-1.67a3.26 3.26 0 00-1.38-1.83c-1.14-.78.08-.76.08-.76a2.63 2.63 0 011.92 1.29 2.65 2.65 0 003.63 1 2.73 2.73 0 01.8-1.67C10.94 21.52 8 20.45 8 15.66a4.83 4.83 0 011.31-3.36A4.49 4.49 0 019.43 9s1.05-.33 3.44 1.28A12.56 12.56 0 0116 9.85a12.56 12.56 0 013.13.42C21.52 8.66 22.56 9 22.56 9a4.46 4.46 0 01.13 3.31A4.82 4.82 0 0124 15.66c0 4.8-2.92 5.85-5.7 6.16a3 3 0 01.84 2.32v3.43c0 .43.22.72.86.6a12.5 12.5 0 00-4-24.36z" />
  </svg>
));
Github.displayName = 'Github';

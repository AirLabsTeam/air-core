import { forwardRef, SVGProps } from 'react';

export interface BoardAddProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BoardAdd = forwardRef<SVGSVGElement, BoardAddProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M19.34 18a1.09 1.09 0 01-1.09 1.1h-3.2v2.78a1.09 1.09 0 11-2.18 0v-2.8H9.78a1.1 1.1 0 010-2.19h3.09v-2.78a1.09 1.09 0 112.18 0v2.78h3.2A1.09 1.09 0 0119.34 18zM14.66 5.18h5.08a1.09 1.09 0 000-2.18h-5.08a1.09 1.09 0 000 2.18zM26.41 3h-1.49a1.09 1.09 0 100 2.18h1.49a.45.45 0 01.41.4v1.49a1.09 1.09 0 102.18 0V5.58A2.61 2.61 0 0026.41 3zM29 21.16v1.49a2.61 2.61 0 01-2.59 2.58H25v.89A2.89 2.89 0 0122.13 29H5.89a3 3 0 01-2.17-.95A2.75 2.75 0 013 25.92V9.85A2.88 2.88 0 015.89 7h1V5.58A2.62 2.62 0 019.48 3H11a1.09 1.09 0 010 2.18H9.48a.45.45 0 00-.4.4V7h13.05A2.89 2.89 0 0125 9.85v13.2h1.39a.45.45 0 00.41-.4v-1.49a1.09 1.09 0 012.18 0zM22.83 9.85a.7.7 0 00-.7-.7H5.89a.7.7 0 00-.7.7V26a.7.7 0 00.14.56.78.78 0 00.56.24h16.24a.7.7 0 00.7-.7zm5.08 1.29a1.09 1.09 0 00-1.09 1.09v4a1.09 1.09 0 002.18 0v-4a1.09 1.09 0 00-1.09-1.09z" />
  </svg>
));
BoardAdd.displayName = 'BoardAdd';

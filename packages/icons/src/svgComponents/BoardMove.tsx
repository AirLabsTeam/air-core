import { forwardRef, SVGProps } from 'react';

export interface BoardMoveProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BoardMove = forwardRef<SVGSVGElement, BoardMoveProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M23 29H5.08A2.08 2.08 0 013 26.92V10.44a2.08 2.08 0 012.08-2.08h1.39V5.08A2.09 2.09 0 018.56 3H11a1.09 1.09 0 010 2.18H8.66v3.18H23a2.08 2.08 0 012 2.08v11.61h1.79v-1.88a1.09 1.09 0 112.18 0v2a2.09 2.09 0 01-2.08 2.09H25v2.68A2.08 2.08 0 0123 29zM5.18 26.82h17.67V10.54H5.18zM23 10.54zm5 5.56a1.09 1.09 0 01-1.18-1.1v-2.77a1.09 1.09 0 012.18 0V15a1.09 1.09 0 01-1.09 1.1zm0-7.94a1.09 1.09 0 01-1.09-1.09V5.18h-1.98a1.09 1.09 0 110-2.18h2A2.08 2.08 0 0129 5.08v2a1.09 1.09 0 01-1.09 1.08zm-8.14-3h-5.15a1.09 1.09 0 010-2.18h5.06a1.09 1.09 0 010 2.18z" />
  </svg>
));
BoardMove.displayName = 'BoardMove';

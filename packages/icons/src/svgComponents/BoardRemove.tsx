import { forwardRef, SVGProps } from 'react';

export interface BoardRemoveProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BoardRemove = forwardRef<SVGSVGElement, BoardRemoveProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.3 19.31H9.7a1.1 1.1 0 010-2.2h8.6a1.1 1.1 0 010 2.2zm6.6 6.89v-1h1.6a2.53 2.53 0 002.5-2.5v-1.5a1 1 0 00-2 0v1.5a.54.54 0 01-.5.5h-1.6V9.8A2.81 2.81 0 0022.1 7H9V5.5c0-.24.16-.5.4-.5H11a1 1 0 000-2H9.4A2.46 2.46 0 007 5.5V7H5.8A2.81 2.81 0 003 9.8v16.3A2.82 2.82 0 005.8 29h16.3a2.81 2.81 0 002.8-2.8zM22.1 9a.79.79 0 01.8.8v16.4a.79.79 0 01-.8.8H5.8a.83.83 0 01-.8-.9V9.8a.79.79 0 01.8-.8zm6.9 7.2v-4a1 1 0 00-2 0v4a1 1 0 102 0zM29 7V5.5A2.53 2.53 0 0026.5 3H25a1 1 0 000 2h1.5a.54.54 0 01.5.5V7a1 1 0 002 0zm-8.2-3a1 1 0 00-1-1h-5.1a1 1 0 000 2h5.1a1 1 0 001-1z" />
  </svg>
));
BoardRemove.displayName = 'BoardRemove';

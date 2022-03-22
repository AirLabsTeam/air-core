import { forwardRef, SVGProps } from 'react';

export interface BoardsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Boards = forwardRef<SVGSVGElement, BoardsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M21.49 29H5.87A2.88 2.88 0 013 26.12V10.44a3 3 0 011-2.2 2.57 2.57 0 011.95-.68h2.49V5.88A2.88 2.88 0 0111.31 3h14.82A2.88 2.88 0 0129 5.88v14.88a2.88 2.88 0 01-2.87 2.88h-1.78v2.48A2.87 2.87 0 0121.49 29zm-3.56-2.18h3.56a.69.69 0 00.68-.7v-6.25h-4.24zM5.18 19.87v6.25a.69.69 0 00.69.7h9.88v-6.95zm19.17 1.59h1.78a.69.69 0 00.69-.7V5.88a.69.69 0 00-.69-.7H11.31a.69.69 0 00-.69.7v1.68h10.87a2.88 2.88 0 012.86 2.88zm-7.51-3.77h5.33v-7.25a.68.68 0 00-.68-.69H5.76a.39.39 0 00-.33.12.82.82 0 00-.25.58v7.25z" />
  </svg>
));
Boards.displayName = 'Boards';
import { forwardRef, SVGProps } from 'react';

export interface AudioProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Audio = forwardRef<SVGSVGElement, AudioProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M29 16.46V4.09A1.09 1.09 0 0027.65 3L12.12 6.7a1.1 1.1 0 00-.84 1.06v10.77H8.06A5.07 5.07 0 003 23.59v.35A5.07 5.07 0 008.06 29h.35a5.07 5.07 0 005.06-5.06v-11l13.32-3.39v5.88h-3.2a5.06 5.06 0 00-5.05 5.07v.34a5 5 0 005.05 5.05h.35A5.07 5.07 0 0029 20.83v-4.17a1.42 1.42 0 000-.2zm-17.72 7.48a2.88 2.88 0 01-2.87 2.88h-.35a2.88 2.88 0 01-2.88-2.88v-.35a2.89 2.89 0 012.88-2.88h3.22v3.23zm2.19-13.28v-2L26.8 5.47v1.82zm13.35 10.17a2.88 2.88 0 01-2.88 2.88h-.35a2.88 2.88 0 01-2.87-2.87v-.34a2.88 2.88 0 012.87-2.88h3.23z" />
  </svg>
));
Audio.displayName = 'Audio';

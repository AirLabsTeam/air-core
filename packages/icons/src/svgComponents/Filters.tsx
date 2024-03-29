import { forwardRef, SVGProps } from 'react';

export interface FiltersProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Filters = forwardRef<SVGSVGElement, FiltersProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M10.49 26.9a5 5 0 01-4.76-3.82h-1.5a1.18 1.18 0 110-2.36h1.5a5 5 0 014.76-3.82 5 5 0 014.75 3.82h12.58a1.18 1.18 0 010 2.36H15.24a5 5 0 01-4.75 3.82zM8 21.9a2.62 2.62 0 002.54 2.64 2.64 2.64 0 000-5.28A2.62 2.62 0 008 21.9zm13.56-6.8a5 5 0 01-4.75-3.82H4.18a1.18 1.18 0 010-2.36h12.58a5 5 0 014.75-3.82 5 5 0 014.76 3.82h1.5a1.18 1.18 0 110 2.36h-1.5a5 5 0 01-4.76 3.82zm-2.56-5a2.54 2.54 0 102.53-2.64A2.62 2.62 0 0019 10.1z" />
  </svg>
));
Filters.displayName = 'Filters';

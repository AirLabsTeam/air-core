import { forwardRef, SVGProps } from 'react';

export interface ChevronDownProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ChevronDown = forwardRef<SVGSVGElement, ChevronDownProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M10.55 13a1.27 1.27 0 01.9.37L16 17.93l4.55-4.56a1.29 1.29 0 011.8 0 1.27 1.27 0 010 1.8l-5.45 5.46a1.29 1.29 0 01-1.8 0l-5.45-5.46a1.27 1.27 0 010-1.8 1.24 1.24 0 01.9-.37z" />
  </svg>
));
ChevronDown.displayName = 'ChevronDown';

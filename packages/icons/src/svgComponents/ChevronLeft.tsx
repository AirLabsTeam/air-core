import { forwardRef, SVGProps } from 'react';

export interface ChevronLeftProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ChevronLeft = forwardRef<SVGSVGElement, ChevronLeftProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M17.73 22.73a1.27 1.27 0 01-.9-.38l-5.46-5.45a1.29 1.29 0 010-1.8l5.46-5.45a1.27 1.27 0 011.8 0 1.29 1.29 0 010 1.8L14.07 16l4.56 4.55a1.28 1.28 0 01-.9 2.18z" />
  </svg>
));
ChevronLeft.displayName = 'ChevronLeft';

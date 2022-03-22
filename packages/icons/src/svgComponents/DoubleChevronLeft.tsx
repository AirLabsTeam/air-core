import { forwardRef, SVGProps } from 'react';

export interface DoubleChevronLeftProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DoubleChevronLeft = forwardRef<SVGSVGElement, DoubleChevronLeftProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M23 23.5a1.51 1.51 0 01-1.06-.44l-6-6a1.49 1.49 0 010-2.12l6-6a1.5 1.5 0 012.12 2.12L19.12 16l4.94 4.94a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.44zm-8 0a1.51 1.51 0 01-1.06-.44l-6-6a1.49 1.49 0 010-2.12l6-6a1.5 1.5 0 112.12 2.12L11.12 16l4.94 4.94a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.44z" />
  </svg>
));
DoubleChevronLeft.displayName = 'DoubleChevronLeft';

import { forwardRef, SVGProps } from 'react';

export interface DoubleChevronUpProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DoubleChevronUp = forwardRef<SVGSVGElement, DoubleChevronUpProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M22 24.5a1.51 1.51 0 01-1.06-.44L16 19.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.12l6-6a1.49 1.49 0 012.12 0l6 6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.44zm0-8a1.51 1.51 0 01-1.06-.44L16 11.12l-4.94 4.94a1.5 1.5 0 11-2.12-2.12l6-6a1.49 1.49 0 012.12 0l6 6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.44z" />
  </svg>
));
DoubleChevronUp.displayName = 'DoubleChevronUp';

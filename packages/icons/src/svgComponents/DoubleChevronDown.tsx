import { forwardRef, SVGProps } from 'react';

export interface DoubleChevronDownProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DoubleChevronDown = forwardRef<SVGSVGElement, DoubleChevronDownProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 24.5a1.51 1.51 0 01-1.06-.44l-6-6a1.5 1.5 0 012.12-2.12L16 20.88l4.94-4.94a1.5 1.5 0 012.12 2.12l-6 6a1.51 1.51 0 01-1.06.44zm0-8a1.51 1.51 0 01-1.06-.44l-6-6a1.5 1.5 0 012.12-2.12L16 12.88l4.94-4.94a1.5 1.5 0 112.12 2.12l-6 6a1.51 1.51 0 01-1.06.44z" />
  </svg>
));
DoubleChevronDown.displayName = 'DoubleChevronDown';
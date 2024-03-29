import { forwardRef, SVGProps } from 'react';

export interface DoubleChevronRightProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DoubleChevronRight = forwardRef<SVGSVGElement, DoubleChevronRightProps>(
  (props, ref) => (
    <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
      <path d="M17 23.5a1.51 1.51 0 01-1.06-.44 1.49 1.49 0 010-2.12L20.88 16l-4.94-4.94a1.5 1.5 0 012.12-2.12l6 6a1.49 1.49 0 010 2.12l-6 6a1.51 1.51 0 01-1.06.44zm-8 0a1.51 1.51 0 01-1.06-.44 1.49 1.49 0 010-2.12L12.88 16l-4.94-4.94a1.5 1.5 0 112.12-2.12l6 6a1.49 1.49 0 010 2.12l-6 6A1.51 1.51 0 019 23.5z" />
    </svg>
  ),
);
DoubleChevronRight.displayName = 'DoubleChevronRight';

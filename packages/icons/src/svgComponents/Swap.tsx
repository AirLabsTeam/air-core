import { forwardRef, SVGProps } from 'react';

export interface SwapProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Swap = forwardRef<SVGSVGElement, SwapProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.2 27.26l3.71-3.55-3.71-3.54M10.78 4.73L7.07 8.28l3.71 3.54m13.13 11.89h-8.72a6.87 6.87 0 01-6.86-6.87v-.59m-.43-8h9.81a7 7 0 017 7v1.2"
    />
  </svg>
));
Swap.displayName = 'Swap';

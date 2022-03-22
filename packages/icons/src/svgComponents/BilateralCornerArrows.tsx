import { forwardRef, SVGProps } from 'react';

export interface BilateralCornerArrowsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BilateralCornerArrows = forwardRef<SVGSVGElement, BilateralCornerArrowsProps>(
  (props, ref) => (
    <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
      <path d="M27.69 3H17.17a1.3 1.3 0 100 2.6h7.41l-19 19v-7.37a1.3 1.3 0 10-2.59 0V27.7A1.3 1.3 0 004.31 29h10.51a1.3 1.3 0 000-2.6H7.44l19-18.95v7.36a1.3 1.3 0 102.59 0V4.3A1.3 1.3 0 0027.69 3z" />
    </svg>
  ),
);
BilateralCornerArrows.displayName = 'BilateralCornerArrows';

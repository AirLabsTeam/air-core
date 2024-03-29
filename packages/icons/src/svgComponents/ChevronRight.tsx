import { forwardRef, SVGProps } from 'react';

export interface ChevronRightProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ChevronRight = forwardRef<SVGSVGElement, ChevronRightProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M14.27 22.73a1.28 1.28 0 01-.9-2.18L17.93 16l-4.56-4.55a1.29 1.29 0 010-1.8 1.27 1.27 0 011.8 0l5.46 5.45a1.29 1.29 0 010 1.8l-5.46 5.45a1.27 1.27 0 01-.9.38z" />
  </svg>
));
ChevronRight.displayName = 'ChevronRight';

import { forwardRef, SVGProps } from 'react';

export interface CloseProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Close = forwardRef<SVGSVGElement, CloseProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M7.23 7.23a1.63 1.63 0 012.31 0L16 13.69l6.46-6.46a1.63 1.63 0 112.31 2.31L18.31 16l6.46 6.46a1.63 1.63 0 11-2.31 2.31L16 18.31l-6.46 6.46a1.63 1.63 0 11-2.31-2.31L13.69 16 7.23 9.54a1.63 1.63 0 010-2.31z" />
  </svg>
));
Close.displayName = 'Close';

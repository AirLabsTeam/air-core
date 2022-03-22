import { forwardRef, SVGProps } from 'react';

export interface ArrowUpProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ArrowUp = forwardRef<SVGSVGElement, ArrowUpProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M7.87 13.63a1.19 1.19 0 001.68-.05l5.23-5.38v18.6a1.19 1.19 0 102.37 0V8.11l5.32 5.42a1.18 1.18 0 001.68 0 1.22 1.22 0 000-1.7l-7.34-7.48a1 1 0 00-.17-.11 1.27 1.27 0 00-.19-.13A1.15 1.15 0 0016 4a1.22 1.22 0 00-.46.09 1.58 1.58 0 00-.33.22l-7.38 7.62a1.21 1.21 0 00.04 1.7z" />
  </svg>
));
ArrowUp.displayName = 'ArrowUp';

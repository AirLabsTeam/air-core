import { forwardRef, SVGProps } from 'react';

export interface MinusProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Minus = forwardRef<SVGSVGElement, MinusProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.53 18H6.47a2 2 0 010-4h19.06a2 2 0 010 4z" />
  </svg>
));
Minus.displayName = 'Minus';

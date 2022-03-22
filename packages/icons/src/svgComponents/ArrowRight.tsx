import { forwardRef, SVGProps } from 'react';

export interface ArrowRightProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ArrowRight = forwardRef<SVGSVGElement, ArrowRightProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.5 7.9c-.4.5-.4 1.2 0 1.7l5.4 5.2H5.3c-.7-.1-1.2.4-1.3 1.1-.1.7.4 1.2 1.1 1.3H24l-5.4 5.3c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l7.5-7.3c0-.1.1-.1.1-.2s.1-.1.1-.2c.1-.1.1-.3.1-.5s0-.3-.1-.5c-.1-.1-.1-.2-.2-.3l-7.6-7.3c-.4-.5-1.2-.5-1.7 0 0-.1 0 0 0 0z" />
  </svg>
));
ArrowRight.displayName = 'ArrowRight';

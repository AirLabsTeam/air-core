import { forwardRef, SVGProps } from 'react';

export interface BrokenLinkProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BrokenLink = forwardRef<SVGSVGElement, BrokenLinkProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M14.2 9a1.18 1.18 0 010-1.67l2.13-2.13a7.42 7.42 0 0110.5 10.5L24 18.48a1.2 1.2 0 01-1.67 0 1.18 1.18 0 010-1.67L25.15 14A5.06 5.06 0 0018 6.84L15.87 9a1.17 1.17 0 01-1.67 0zm2.54 13.45L14 25.16A5.06 5.06 0 016.84 18l2.81-2.81A1.18 1.18 0 008 13.52l-2.83 2.81a7.42 7.42 0 0010.5 10.5l2.74-2.74a1.18 1.18 0 00-1.67-1.67zM6.35 4.61a1.18 1.18 0 00-1.67 1.68l21 21.07a1.18 1.18 0 001.67-1.67z" />
  </svg>
));
BrokenLink.displayName = 'BrokenLink';

import { forwardRef, SVGProps } from 'react';

export interface LinkProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Link = forwardRef<SVGSVGElement, LinkProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.16 6.84a5.08 5.08 0 00-7.16 0l-2.74 2.74a5.08 5.08 0 000 7.16 1.17 1.17 0 010 1.67 1.18 1.18 0 01-1.67 0 7.44 7.44 0 010-10.5l2.74-2.74a7.42 7.42 0 0110.5 10.5L24 18.48a1.18 1.18 0 01-1.67-1.67L25.16 14a5.08 5.08 0 000-7.16zM9.65 13.52a1.18 1.18 0 010 1.67L6.84 18A5.06 5.06 0 0014 25.16l2.74-2.74a5.08 5.08 0 000-7.16 1.17 1.17 0 010-1.67 1.18 1.18 0 011.67 0 7.44 7.44 0 010 10.5l-2.74 2.74a7.42 7.42 0 01-10.5-10.5L8 13.52a1.18 1.18 0 011.65 0z" />
  </svg>
));
Link.displayName = 'Link';

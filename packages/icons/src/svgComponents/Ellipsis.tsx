import { forwardRef, SVGProps } from 'react';

export interface EllipsisProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Ellipsis = forwardRef<SVGSVGElement, EllipsisProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.85 18.15A2.15 2.15 0 1128 16a2.15 2.15 0 01-2.15 2.15zm-9.85 0A2.15 2.15 0 1118.15 16 2.15 2.15 0 0116 18.15zM4 16a2.15 2.15 0 102.15-2.15A2.15 2.15 0 004 16z" />
  </svg>
));
Ellipsis.displayName = 'Ellipsis';

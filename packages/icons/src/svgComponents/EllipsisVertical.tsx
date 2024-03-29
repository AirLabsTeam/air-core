import { forwardRef, SVGProps } from 'react';

export interface EllipsisVerticalProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const EllipsisVertical = forwardRef<SVGSVGElement, EllipsisVerticalProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.15 6.15A2.15 2.15 0 1116 4a2.15 2.15 0 012.15 2.15zm0 9.85A2.15 2.15 0 1116 13.85 2.15 2.15 0 0118.15 16zM16 28a2.15 2.15 0 10-2.15-2.15A2.15 2.15 0 0016 28z" />
  </svg>
));
EllipsisVertical.displayName = 'EllipsisVertical';

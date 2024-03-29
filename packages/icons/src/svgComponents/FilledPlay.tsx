import { forwardRef, SVGProps } from 'react';

export interface FilledPlayProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const FilledPlay = forwardRef<SVGSVGElement, FilledPlayProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M7.48 3.29a2.32 2.32 0 012.36.07L26.65 14a2.32 2.32 0 010 3.92L9.84 28.64a2.32 2.32 0 01-2.36.07 2.34 2.34 0 01-1.21-2V5.32a2.34 2.34 0 011.21-2.03z" />
  </svg>
));
FilledPlay.displayName = 'FilledPlay';

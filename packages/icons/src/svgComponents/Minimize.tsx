import { forwardRef, SVGProps } from 'react';

export interface MinimizeProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Minimize = forwardRef<SVGSVGElement, MinimizeProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M28 28H4"
    />
  </svg>
));
Minimize.displayName = 'Minimize';

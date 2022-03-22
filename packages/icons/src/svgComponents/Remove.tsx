import { forwardRef, SVGProps } from 'react';

export interface RemoveProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Remove = forwardRef<SVGSVGElement, RemoveProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M24 16.08l-16-.16"
    />
  </svg>
));
Remove.displayName = 'Remove';

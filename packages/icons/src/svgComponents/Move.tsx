import { forwardRef, SVGProps } from 'react';

export interface MoveProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Move = forwardRef<SVGSVGElement, MoveProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 28h20V8H4zm24-6.81v3h-4m4-8v-4M28 7V4h-3m-5 0h-5m-4 0H8v4"
    />
  </svg>
));
Move.displayName = 'Move';

import { forwardRef, SVGProps } from 'react';

export interface PencilProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Pencil = forwardRef<SVGSVGElement, PencilProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M4.09 29a1.09 1.09 0 01-.75-.3 1.08 1.08 0 01-.32-1l1.49-8.18a1 1 0 01.31-.59L19.37 4.66a5.58 5.58 0 014-1.66 5.61 5.61 0 014 1.66 5.69 5.69 0 010 8L12.68 26.87a1.12 1.12 0 01-.51.28L4.34 29a1.07 1.07 0 01-.25 0zm2.5-8.74l-1.13 6.21 5.92-1.38L22.85 14 18 9.09zm5.33 5.83zm7.61-18.53l4.89 4.9 1.4-1.35a3.48 3.48 0 000-4.91 3.44 3.44 0 00-2.44-1 3.48 3.48 0 00-2.45 1z" />
  </svg>
));
Pencil.displayName = 'Pencil';

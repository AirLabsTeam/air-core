import { forwardRef, SVGProps } from 'react';

export interface FlashProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Flash = forwardRef<SVGSVGElement, FlashProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M15 29a1.21 1.21 0 01-.38-.06 1.16 1.16 0 01-.78-1.11l.31-8.62H6.66a1.15 1.15 0 01-1-.62 1.1 1.1 0 01.09-1.18L16 3.47a1.18 1.18 0 011.29-.42 1.14 1.14 0 01.8 1.08V13h7.25a1.17 1.17 0 011 .62 1.12 1.12 0 01-.11 1.18L15.88 28.54A1.15 1.15 0 0115 29zM9 17h6.3a1.17 1.17 0 01.83.34 1.08 1.08 0 01.32.83l-.21 6.15 6.81-9h-6.12a1.14 1.14 0 01-1.15-1.13V7.63z" />
  </svg>
));
Flash.displayName = 'Flash';

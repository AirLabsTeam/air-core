import { forwardRef, SVGProps } from 'react';

export interface RedoProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Redo = forwardRef<SVGSVGElement, RedoProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.54,8.51l-4.9-4.2a1.28,1.28,0,0,0-1.82.15A1.33,1.33,0,0,0,21,6.31L23,8H19.05A15.16,15.16,0,0,0,4,23.26v3.43a1.29,1.29,0,1,0,2.58,0V23.26A12.56,12.56,0,0,1,19.05,10.64h4.34L21,12.71a1.33,1.33,0,0,0-.15,1.85,1.31,1.31,0,0,0,1,.46,1.26,1.26,0,0,0,.83-.31l4.9-4.2a1.33,1.33,0,0,0,.46-1A1.31,1.31,0,0,0,27.54,8.51Z" />
  </svg>
));
Redo.displayName = 'Redo';

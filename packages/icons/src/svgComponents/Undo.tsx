import { forwardRef, SVGProps } from 'react';

export interface UndoProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Undo = forwardRef<SVGSVGElement, UndoProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M13,8H9l2-1.71a1.33,1.33,0,0,0,.15-1.85,1.28,1.28,0,0,0-1.82-.15l-4.9,4.2a1.31,1.31,0,0,0-.46,1,1.33,1.33,0,0,0,.46,1l4.9,4.2a1.26,1.26,0,0,0,.83.31,1.31,1.31,0,0,0,1-.46A1.33,1.33,0,0,0,11,12.71L8.61,10.64H13A12.56,12.56,0,0,1,25.42,23.26v3.43a1.29,1.29,0,1,0,2.58,0V23.26A15.16,15.16,0,0,0,13,8Z" />
  </svg>
));
Undo.displayName = 'Undo';

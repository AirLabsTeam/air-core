import { forwardRef, SVGProps } from 'react';

export interface GridProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Grid = forwardRef<SVGSVGElement, GridProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.91 29h-9.63a1.09 1.09 0 01-1.09-1.09v-9.63a1.09 1.09 0 011.09-1.09h9.63A1.09 1.09 0 0129 18.28v9.63A1.09 1.09 0 0127.91 29zm-8.54-2.18h7.45v-7.45h-7.45zM13.72 29H4.09A1.09 1.09 0 013 27.91v-9.63a1.09 1.09 0 011.09-1.09h9.63a1.09 1.09 0 011.09 1.09v9.63A1.09 1.09 0 0113.72 29zm-8.54-2.18h7.45v-7.45H5.18zm22.73-12h-9.63a1.09 1.09 0 01-1.09-1.09V4.09A1.09 1.09 0 0118.28 3h9.63A1.09 1.09 0 0129 4.09v9.63a1.09 1.09 0 01-1.09 1.09zm-8.54-2.18h7.45V5.18h-7.45zm-5.65 2.18H4.09A1.09 1.09 0 013 13.72V4.09A1.09 1.09 0 014.09 3h9.63a1.09 1.09 0 011.09 1.09v9.63a1.09 1.09 0 01-1.09 1.09zm-8.54-2.19h7.45V5.18H5.18z" />
  </svg>
));
Grid.displayName = 'Grid';

import { forwardRef, SVGProps } from 'react';

export interface VolumeLowProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const VolumeLow = forwardRef<SVGSVGElement, VolumeLowProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M21.82 20.64a1.09 1.09 0 01-.27-2.15 2.12 2.12 0 001.63-2.11 2.22 2.22 0 00-1.65-2.11 1.09 1.09 0 11.59-2.1 4.42 4.42 0 013.25 4.21 4.31 4.31 0 01-3.27 4.22 1 1 0 01-.28.04zM16.23 27a3.45 3.45 0 01-1.68-.44l-.15-.1-7.1-5.7H4.09A1.09 1.09 0 013 19.67v-7.39a1.09 1.09 0 011.09-1.09h3.22l7.19-5.7a.91.91 0 01.16-.11 3.29 3.29 0 013.23.09 3 3 0 011.5 2.58V24a3 3 0 01-1.51 2.57 3.32 3.32 0 01-1.65.43zm-.54-2.31a1.17 1.17 0 001.1 0 .79.79 0 00.41-.69V8.05a.84.84 0 00-.43-.71 1.08 1.08 0 00-1-.07l-7 5.54v2.89a1.09 1.09 0 11-2.18 0v-2.33H5.18v5.21h2.51a1 1 0 01.68.24z" />
  </svg>
));
VolumeLow.displayName = 'VolumeLow';

import { forwardRef, SVGProps } from 'react';

export interface BoardDuplicateProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BoardDuplicate = forwardRef<SVGSVGElement, BoardDuplicateProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M14.71 5.18h5.06a1.09 1.09 0 000-2.18h-5.06a1.09 1.09 0 000 2.18zM26.92 3h-2a1.09 1.09 0 100 2.18h1.89v1.89a1.09 1.09 0 102.18 0v-2A2.08 2.08 0 0026.92 3zm.99 8.14a1.09 1.09 0 00-1.09 1.09V15A1.09 1.09 0 0029 15v-2.77a1.09 1.09 0 00-1.09-1.09z" />
    <path d="M27.91 19.08a1.09 1.09 0 00-1.09 1.09v1.88H25V10.44a2.08 2.08 0 00-2-2.08H8.66V5.18H11A1.09 1.09 0 0011 3H8.56a2.09 2.09 0 00-2.09 2.08v3.28H5.08A2.08 2.08 0 003 10.44v16.48A2.08 2.08 0 005.08 29H23a2.08 2.08 0 002-2.08v-2.68h1.89A2.09 2.09 0 0029 22.15v-2a1.09 1.09 0 00-1.09-1.07zm-5.06-8.54v7.78H5.18v-7.78zm-17.67 10h5.87v6.3H5.18zm8.08 6.3v-6.3h9.59v6.3z" />
  </svg>
));
BoardDuplicate.displayName = 'BoardDuplicate';

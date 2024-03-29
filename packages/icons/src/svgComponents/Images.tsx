import { forwardRef, SVGProps } from 'react';

export interface ImagesProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Images = forwardRef<SVGSVGElement, ImagesProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.92 3H10.05A3.08 3.08 0 007 6.08V7h-.92A3.08 3.08 0 003 10.05v15.86A3.08 3.08 0 006.08 29H22a3.08 3.08 0 003-3.08v-.69h.89A3.08 3.08 0 0029 22.15V6.08A3.08 3.08 0 0025.92 3zm-3.07 22.92a.9.9 0 01-.9.9H6.08a.9.9 0 01-.9-.9V25L11 18.69l4.5 3.71a1.09 1.09 0 001.42 0l2.74-2.43 3.19 3.8zm0-5.57l-2.24-2.67a1.08 1.08 0 00-1.56-.11l-2.88 2.55-4.53-3.77a1.09 1.09 0 00-1.5.1l-5 5.31V10.05a.9.9 0 01.9-.9H22a.9.9 0 01.9.9zm4 1.8a.9.9 0 01-.9.9H25v-13A3.08 3.08 0 0022 7H9.15v-.92a.9.9 0 01.9-.9h15.87a.9.9 0 01.9.9z" />
    <path d="M21.34 13.31a2.28 2.28 0 100 .41.31.31 0 000-.1 1.06 1.06 0 000-.31z" />
  </svg>
));
Images.displayName = 'Images';

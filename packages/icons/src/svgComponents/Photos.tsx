import { forwardRef, SVGProps } from 'react';

export interface PhotosProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Photos = forwardRef<SVGSVGElement, PhotosProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 24.63l6.9-7.5 5.31 4.4 3.6-3.2 4.2 5m-3.7-9.9a1.1 1.1 0 100 .14H19.2M4 8h20v20H4zm20 16.2h4V4H8v4"
    />
  </svg>
));
Photos.displayName = 'Photos';

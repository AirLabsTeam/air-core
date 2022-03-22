import { forwardRef, SVGProps } from 'react';

export interface ShareProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Share = forwardRef<SVGSVGElement, ShareProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.19 4L28 13l-11.81 9v-5c-3.4 0-5.59 2-5.59 5.12 0 2.36 2.1 3.93 3.6 4.92.5.39.3 1-.3 1C8.6 28 4 23.77 4 18.56a9.66 9.66 0 019.9-9.45L16.19 9z" />
  </svg>
));
Share.displayName = 'Share';

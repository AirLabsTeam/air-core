import { forwardRef, SVGProps } from 'react';

export interface HeartProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Heart = forwardRef<SVGSVGElement, HeartProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 28a1.12 1.12 0 01-.56-.15C14.93 27.54 3 20.31 3 11.73A7.48 7.48 0 0110.38 4a6.58 6.58 0 015.54 3.3 6.42 6.42 0 015.7-3.3A7.48 7.48 0 0129 11.73c0 8.58-11.93 15.81-12.44 16.12A1.12 1.12 0 0116 28zM10.38 6.17a5.33 5.33 0 00-5.2 5.56c0 6.4 8.53 12.39 10.82 13.89 2.29-1.5 10.82-7.49 10.82-13.89a5.33 5.33 0 00-5.2-5.56c-3.76 0-4.51 4-4.54 4.13a1.1 1.1 0 01-2.17-.07c-.07-.23-1.26-4.06-4.53-4.06z" />
  </svg>
));
Heart.displayName = 'Heart';

import { forwardRef, SVGProps } from 'react';

export interface FacebookProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Facebook = forwardRef<SVGSVGElement, FacebookProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M28.5 16a12.5 12.5 0 10-14.45 12.36v-8.73h-3.18V16h3.18v-2.74c0-3.13 1.86-4.86 4.72-4.86a19.54 19.54 0 012.8.24v3.08H20a1.81 1.81 0 00-2 1.95V16h3.47l-.55 3.61H18v8.73A12.49 12.49 0 0028.5 16z" />
  </svg>
));
Facebook.displayName = 'Facebook';

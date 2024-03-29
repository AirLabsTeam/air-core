import { forwardRef, SVGProps } from 'react';

export interface CloudUploadProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const CloudUpload = forwardRef<SVGSVGElement, CloudUploadProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M23.1 27h-7.31a1.09 1.09 0 01-1.1-1.09v-8l-1.11 1.22A1.09 1.09 0 0112 17.65l3-3.31.06-.06a1 1 0 01.29-.2h.07a.94.94 0 01.33-.08h.14a1.3 1.3 0 01.33.07h.07a1.34 1.34 0 01.31.22v.05l3 3.31a1.09 1.09 0 11-1.6 1.46l-1.11-1.22v6.93h6.21a4.87 4.87 0 004.72-5 4.87 4.87 0 00-4.72-5 1.09 1.09 0 01-1.1-1.09v-.11a6.3 6.3 0 00-6.12-6.44 6.16 6.16 0 00-6 6.44v.11a1.09 1.09 0 01-1.1 1.09 4.88 4.88 0 00-4.61 5 4.87 4.87 0 004.72 5A1.09 1.09 0 118.9 27 7.05 7.05 0 012 19.82a7.09 7.09 0 015.74-7.1A8.27 8.27 0 0115.89 5a8.44 8.44 0 018.26 7.72 7.11 7.11 0 015.85 7.1A7.05 7.05 0 0123.1 27z" />
  </svg>
));
CloudUpload.displayName = 'CloudUpload';

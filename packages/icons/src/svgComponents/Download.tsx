import { forwardRef, SVGProps } from 'react';

export interface DownloadProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Download = forwardRef<SVGSVGElement, DownloadProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.91 29H7.09a1.09 1.09 0 010-2.18h17.82a1.09 1.09 0 010 2.18zm-9-6.05h-.05a1.28 1.28 0 01-.34-.06h-.07a1 1 0 01-.3-.2l-6.82-6.91a1.1 1.1 0 010-1.55 1.09 1.09 0 011.54 0l4.92 5V4.09a1.09 1.09 0 012.18 0v15l4.63-4.88a1.09 1.09 0 011.58 1.51l-6.5 6.88a1.1 1.1 0 01-.31.22 1.3 1.3 0 01-.4.09z" />
  </svg>
));
Download.displayName = 'Download';

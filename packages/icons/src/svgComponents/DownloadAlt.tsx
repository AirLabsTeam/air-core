import { forwardRef, SVGProps } from 'react';

export interface DownloadAltProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DownloadAlt = forwardRef<SVGSVGElement, DownloadAltProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.82 29H7.18A4.19 4.19 0 013 24.8v-5.57a1.09 1.09 0 112.18 0v5.57a2 2 0 002 2h17.64a2 2 0 002-2v-5.57a1.09 1.09 0 012.18 0v5.57a4.19 4.19 0 01-4.18 4.2zM16 21.67a1.11 1.11 0 00.78-.33l5.74-5.85a1.1 1.1 0 000-1.55A1.09 1.09 0 0021 14l-3.88 4V4.09a1.09 1.09 0 00-2.18 0V17.9L11 14a1.09 1.09 0 10-1.55 1.53l5.73 5.84a1.1 1.1 0 00.78.32z" />
  </svg>
));
DownloadAlt.displayName = 'DownloadAlt';
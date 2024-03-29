import { forwardRef, SVGProps } from 'react';

export interface CloudOfflineProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const CloudOffline = forwardRef<SVGSVGElement, CloudOfflineProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.3 27a1.13 1.13 0 01-.69-.24l-.37-.31H9.09A7.23 7.23 0 018.4 12L4.65 9A1.09 1.09 0 116 7.32l6 4.88.13.11L28 25.06a1.1 1.1 0 01.16 1.54 1.11 1.11 0 01-.86.4zM9.09 14.19a5 5 0 000 10.08h14.45L11.06 14.19zm18.85 9.53a1.09 1.09 0 01-.64-.21 1.1 1.1 0 01-.24-1.51 4.17 4.17 0 00.76-2.53 4.5 4.5 0 00-4.48-4.61h-.22a1.08 1.08 0 01-1.12-1.1v-.22a6.28 6.28 0 00-6.19-6.36 6.06 6.06 0 00-3.37 1A1.11 1.11 0 0111 7.89a1.09 1.09 0 01.32-1.51A8.13 8.13 0 0115.84 5a8.45 8.45 0 018.34 7.72A6.66 6.66 0 0130 19.45a6.46 6.46 0 01-1.17 3.82 1.12 1.12 0 01-.89.45z" />
  </svg>
));
CloudOffline.displayName = 'CloudOffline';

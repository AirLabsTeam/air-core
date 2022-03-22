import { forwardRef, SVGProps } from 'react';

export interface VolumeMutedProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const VolumeMuted = forwardRef<SVGSVGElement, VolumeMutedProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M17.89 5.47a3.29 3.29 0 00-3.23-.09.91.91 0 00-.16.11l-7.19 5.7H4.09A1.09 1.09 0 003 12.28v7.39a1.09 1.09 0 001.09 1.09H7.3l7.1 5.7.15.1a3.45 3.45 0 001.68.44 3.32 3.32 0 001.65-.44A3 3 0 0019.39 24V8.05a3 3 0 00-1.5-2.58zM17.2 24a.79.79 0 01-.41.68 1.2 1.2 0 01-1.1 0l-7.32-5.86a1 1 0 00-.68-.24H5.18v-5.21H6.6v2.33a1.09 1.09 0 102.18 0v-2.89l7-5.54a1.1 1.1 0 011 .07.84.84 0 01.43.71zm9.7-7.43l1.78-1.78a1.09 1.09 0 00-1.54-1.54L25.36 15l-1.71-1.7a1 1 0 10-1.4 1.4L24 16.43l-1.82 1.77a1.08 1.08 0 000 1.54 1.09 1.09 0 001.54 0L25.5 18l1.71 1.7a.94.94 0 00.7.29 1 1 0 00.7-.29 1 1 0 000-1.4z" />
  </svg>
));
VolumeMuted.displayName = 'VolumeMuted';

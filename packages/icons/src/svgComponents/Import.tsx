import { forwardRef, SVGProps } from 'react';

export interface ImportProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Import = forwardRef<SVGSVGElement, ImportProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 29a.94.94 0 01-1-1V15.2l-2.2 2.2a1 1 0 01-1.4-1.4l3.8-3.8a1.23 1.23 0 01.8-.4.91.91 0 01.7.3l3.9 3.9a1 1 0 01-1.4 1.4L17 15.2V28a.94.94 0 01-1 1zm9.2 0h-4a1 1 0 010-2h4a.79.79 0 00.8-.8V5.8a.76.76 0 00-.2-.5.86.86 0 00-.6-.3H6.8a.79.79 0 00-.8.8v20.4a.74.74 0 00.8.8h4.5a1 1 0 010 2H6.8A2.73 2.73 0 014 26.2V5.8A2.8 2.8 0 016.8 3h18.4a3.18 3.18 0 012 .8 2.44 2.44 0 01.8 2v20.5a2.71 2.71 0 01-2.8 2.7z" />
  </svg>
));
Import.displayName = 'Import';

import { forwardRef, SVGProps } from 'react';

export interface ImportFolderProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ImportFolder = forwardRef<SVGSVGElement, ImportFolderProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M26.11 27.9h-3.59a1 1 0 010-2h3.59a.79.79 0 00.8-.8v-15a.79.79 0 00-.8-.79H16a.91.91 0 01-.8-.4L12.76 6H5v19.11a.79.79 0 00.8.8h5.48a4.38 4.38 0 003.09-1.3 4.75 4.75 0 001.39-3.38V17l-2.19 2.19a1 1 0 01-1.4 0 1 1 0 010-1.4L16 14a1.23 1.23 0 01.8-.4.87.87 0 01.69.3l3.89 3.88a1 1 0 01-1.4 1.4L17.74 17v4.28a6.93 6.93 0 01-2 4.88A6.35 6.35 0 0111.27 28H5.79A2.87 2.87 0 013 25.11V5a.94.94 0 011-1h9.26a.91.91 0 01.8.4l2.39 2.89h9.76A2.78 2.78 0 0129 10.07v15a2.87 2.87 0 01-2.89 2.83z" />
  </svg>
));
ImportFolder.displayName = 'ImportFolder';

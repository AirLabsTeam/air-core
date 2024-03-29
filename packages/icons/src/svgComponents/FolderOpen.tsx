import { forwardRef, SVGProps } from 'react';

export interface FolderOpenProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const FolderOpen = forwardRef<SVGSVGElement, FolderOpenProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M26.91 29H5.09A1.08 1.08 0 014 28L3 15.42a1.12 1.12 0 01.29-.83 1.09 1.09 0 01.71-.34V8.71a1.09 1.09 0 011.09-1.09h.72V4.09A1.09 1.09 0 016.9 3h18.2a1.09 1.09 0 011.09 1.09v3.53h.65a1.09 1.09 0 011.09 1.09v5.53a1.13 1.13 0 01.78.35 1.12 1.12 0 01.29.83L28 28a1.08 1.08 0 01-1.09 1zM6.1 26.82h19.8l.83-10.39H5.27zM8 14.24h16V8.85a1.41 1.41 0 010-.29V5.18H8zm11.78-1.83h-9.57a1.1 1.1 0 010-2.19h9.56a1.1 1.1 0 010 2.19zm-4.6-3.56h-5a1.09 1.09 0 010-2.18h5a1.09 1.09 0 010 2.18z" />
  </svg>
));
FolderOpen.displayName = 'FolderOpen';

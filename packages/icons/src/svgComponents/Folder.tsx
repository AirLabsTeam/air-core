import { forwardRef, SVGProps } from 'react';

export interface FolderProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Folder = forwardRef<SVGSVGElement, FolderProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M26.92 28H5.08A2.08 2.08 0 013 25.92V6.08A2.08 2.08 0 015.08 4h8.58a2.09 2.09 0 011.88 1.19l1.15 2.45h10.23A2.08 2.08 0 0129 9.72v16.2A2.08 2.08 0 0126.92 28zM5.18 25.82h21.64v-16H16.63a2.11 2.11 0 01-1.89-1.2l-1.15-2.44H5.18z" />
  </svg>
));
Folder.displayName = 'Folder';

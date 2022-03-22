import { forwardRef, SVGProps } from 'react';

export interface FileExtensionProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const FileExtension = forwardRef<SVGSVGElement, FileExtensionProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M19.15 3H7.6a2.13 2.13 0 00-2.1 2.17v21.66A2.13 2.13 0 007.6 29h16.8a2.13 2.13 0 002.1-2.17V10.58zm.05 3.5l4.4 4.5h-4.4zM7.9 26.6V5.4h8.9v6.84a1.2 1.2 0 001.2 1.2h6.1V26.6z"
    />
  </svg>
));
FileExtension.displayName = 'FileExtension';

import { forwardRef, SVGProps } from 'react';

export interface CompressedFilesProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const CompressedFiles = forwardRef<SVGSVGElement, CompressedFilesProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M26.09 29H5.91A2.91 2.91 0 013 26.09V5.91A2.91 2.91 0 015.91 3h20.18A2.91 2.91 0 0129 5.91v20.18A2.91 2.91 0 0126.09 29zM5.91 5.18a.73.73 0 00-.73.73v20.18a.73.73 0 00.73.73h20.18a.73.73 0 00.73-.73V5.91a.73.73 0 00-.73-.73zm9.74 17.39a3 3 0 01-2.94-2.95.91.91 0 010-.17v-.06a.85.85 0 010-.23l.29-1.81a2.7 2.7 0 015.36 0l.23 1.79v.24a1 1 0 010 .17v.06a1.49 1.49 0 010 .21 3 3 0 01-2.94 2.75zm-.75-2.85a.76.76 0 00.75.67.78.78 0 00.77-.77v-.13a.77.77 0 00-1.5 0v.23zM17.74 13H13.6a1.09 1.09 0 010-2.18h4.14a1.09 1.09 0 010 2.18zm0-3.42H13.6a1.09 1.09 0 010-2.18h4.14a1.09 1.09 0 010 2.18z" />
  </svg>
));
CompressedFiles.displayName = 'CompressedFiles';

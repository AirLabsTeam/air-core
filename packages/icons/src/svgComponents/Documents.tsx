import { forwardRef, SVGProps } from 'react';

export interface DocumentsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Documents = forwardRef<SVGSVGElement, DocumentsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M22 29H7.08A2.08 2.08 0 015 26.92V13a1.09 1.09 0 012.18 0v13.8H22a1.09 1.09 0 010 2.2zm4-4H10.05A1.09 1.09 0 019 23.94V4.09A1.09 1.09 0 0110.05 3h8.66a1.16 1.16 0 01.42.08 1.21 1.21 0 01.35.24l7.2 7.44a1 1 0 01.29.72v12.46A1.09 1.09 0 0125.91 25zm-14.86-2.15h13.68V12.63h-6.11a1.09 1.09 0 01-1.09-1.1V5.18h-6.48zm8.66-12.41h3.54L19.8 6.79zm2.42 9.75h-9.06a1.1 1.1 0 010-2.19h9.06a1.1 1.1 0 010 2.19zm0-3.47h-9.06a1.09 1.09 0 010-2.18h9.06a1.09 1.09 0 010 2.18z" />
  </svg>
));
Documents.displayName = 'Documents';

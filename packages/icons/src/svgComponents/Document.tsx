import { forwardRef, SVGProps } from 'react';

export interface DocumentProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Document = forwardRef<SVGSVGElement, DocumentProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M23.93 29H8.07A3.08 3.08 0 015 25.92V6.08A3.08 3.08 0 018.07 3h15.86A3.08 3.08 0 0127 6.08v19.84A3.08 3.08 0 0123.93 29zM8.07 5.18a.89.89 0 00-.89.9v19.84a.89.89 0 00.89.9h15.86a.89.89 0 00.89-.9V6.08a.89.89 0 00-.89-.9zM15 22.45h-4.15a1.09 1.09 0 010-2.18H15a1.09 1.09 0 110 2.18zm6.54-4.66H10.85a1.1 1.1 0 010-2.19h10.7a1.1 1.1 0 010 2.19zm0-4.67H10.85a1.09 1.09 0 010-2.18h10.7a1.09 1.09 0 010 2.18z" />
  </svg>
));
Document.displayName = 'Document';

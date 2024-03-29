import { forwardRef, SVGProps } from 'react';

export interface EmailProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Email = forwardRef<SVGSVGElement, EmailProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M26.58 5H4.85a2.65 2.65 0 00-2.63 2.67v16.66A2.65 2.65 0 004.85 27h21.73a2.66 2.66 0 002.64-2.67V7.67A2.66 2.66 0 0026.58 5zm-1.13 2.18L16 15.33 5.9 7.18zm1.13 17.64H4.85a.49.49 0 01-.49-.49V8.7l10.92 8.9a1 1 0 00.71.28 1.09 1.09 0 00.72-.28l10.36-9v15.7a.49.49 0 01-.49.52z" />
  </svg>
));
Email.displayName = 'Email';

import { forwardRef, SVGProps } from 'react';

export interface PdfProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Pdf = forwardRef<SVGSVGElement, PdfProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27 13c0-.1 0-.1 0 0 0-.2 0-.3-.1-.4-.1-.1-.1-.2-.2-.3l-8.9-8.9c-.2-.3-.4-.4-.7-.4H6c-.6 0-1 .5-1 1v24c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V13zm-8.9-6.6l5.5 5.6h-5.5V6.4zm-2-1.4v8c0 .6.4 1 1 1H25v2.4H7V5h9.1zM8.4 25.2v-6.1h2.3c1.4 0 2.2.9 2.2 2 0 1.2-.8 2-2.2 2H9.5v2.1H8.4zm5.6 0v-6.1h2.1c1.8 0 2.9 1.1 2.9 3s-1.1 3.1-3 3.1h-2zm10-3.5v.9h-2.5v2.6h-1.1v-6.1h3.9v.9h-2.8v1.7H24zm-6.1.4c0 1.4-.6 2.1-1.9 2.1h-.9V20h.9c1.3 0 1.9.7 1.9 2.1zm-7.4.1h-1V20h1c.8 0 1.2.4 1.2 1.1 0 .6-.3 1.1-1.2 1.1z" />
  </svg>
));
Pdf.displayName = 'Pdf';

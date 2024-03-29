import { forwardRef, SVGProps } from 'react';

export interface LinkedInProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const LinkedIn = forwardRef<SVGSVGElement, LinkedInProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M24.6 28H7.4A3.4 3.4 0 014 24.6V7.4A3.4 3.4 0 017.4 4h17.2A3.4 3.4 0 0128 7.4v17.2a3.4 3.4 0 01-3.4 3.4zm-12.67-3.91V13.25h-3.6v10.84zm2 0h3.6V18a2.6 2.6 0 01.12-.88 2 2 0 011.85-1.32c1.3 0 1.83 1 1.83 2.45v5.8h3.6v-6.17c0-3.33-1.78-4.88-4.15-4.88a3.6 3.6 0 00-3.27 1.82v-1.57h-3.59c.05 1 0 10.84 0 10.84zM12.17 9.9A1.88 1.88 0 0010.29 8H10a1.88 1.88 0 00-1.89 1.9A1.87 1.87 0 0010 11.77h.3a1.87 1.87 0 001.87-1.87z" />
  </svg>
));
LinkedIn.displayName = 'LinkedIn';

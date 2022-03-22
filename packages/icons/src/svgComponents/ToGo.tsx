import { forwardRef, SVGProps } from 'react';

export interface ToGoProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ToGo = forwardRef<SVGSVGElement, ToGoProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 4h7v7.05M26 17v7.7a3.3 3.3 0 01-3.3 3.3H7.29A3.29 3.29 0 014 24.7V9.25A3.29 3.29 0 017.29 6H15m13-2L11.43 20.57"
    />
  </svg>
));
ToGo.displayName = 'ToGo';

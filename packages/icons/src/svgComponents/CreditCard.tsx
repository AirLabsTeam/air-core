import { forwardRef, SVGProps } from 'react';

export interface CreditCardProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const CreditCard = forwardRef<SVGSVGElement, CreditCardProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M5.5 5h21a3.08 3.08 0 013 3v16a3 3 0 01-3 3h-21a3 3 0 01-3-3V8a3.08 3.08 0 013-3zm21 20a1 1 0 001-1V13.7h-23V24a1 1 0 001 1zm-22-14.9h23V8a1 1 0 00-1-1h-21a1 1 0 00-1 1zm20.22 13h-4.4a.8.8 0 01-.8-.8v-1.4a.8.8 0 01.8-.8h4.4a.8.8 0 01.8.8v1.4a.8.8 0 01-.8.82z" />
  </svg>
));
CreditCard.displayName = 'CreditCard';

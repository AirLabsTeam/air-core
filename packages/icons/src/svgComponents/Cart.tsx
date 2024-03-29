import { forwardRef, SVGProps } from 'react';

export interface CartProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Cart = forwardRef<SVGSVGElement, CartProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M23 29.67a2.53 2.53 0 112.52-2.53A2.53 2.53 0 0123 29.67zm0-3a.46.46 0 100 .91.46.46 0 100-.91zm-8.76 3a2.53 2.53 0 112.53-2.53 2.53 2.53 0 01-2.57 2.53zm0-3a.46.46 0 10.46.45.46.46 0 00-.5-.43zm12.46-2.18H10.47a3.09 3.09 0 01-.92-6L5.32 4.4H2.53a1 1 0 010-2.07h3.56a1 1 0 011 .74L8 6.25h20.47a1 1 0 011 1.28l-3 12.08a1 1 0 01-1 .78h-15a1 1 0 000 2.05h16.19a1 1 0 110 2.07zm-15-6.19h13l2.51-10H8.66z" />
  </svg>
));
Cart.displayName = 'Cart';

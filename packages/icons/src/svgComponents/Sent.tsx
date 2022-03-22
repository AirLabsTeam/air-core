import { forwardRef, SVGProps } from 'react';

export interface SentProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Sent = forwardRef<SVGSVGElement, SentProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M28.71 3.29a1 1 0 01.25 1l-7.34 24a1 1 0 01-1.79.23l-5.76-9.35a2.61 2.61 0 01-.33-.92 2.49 2.49 0 01-.91-.33l-9.36-5.75a1 1 0 01.23-1.79L27.72 3a1 1 0 01.99.29zM17 16.41l-.08.09-1.09 1.09a.45.45 0 00-.06.55l4.61 7.48 6.13-20.13-20.12 6.14 7.48 4.61a.47.47 0 00.56-.07L19.62 11a1 1 0 111.4 1.4z" />
  </svg>
));
Sent.displayName = 'Sent';

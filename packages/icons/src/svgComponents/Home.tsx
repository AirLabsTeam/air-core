import { forwardRef, SVGProps } from 'react';

export interface HomeProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Home = forwardRef<SVGSVGElement, HomeProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M13 29.1H5.15a2.6 2.6 0 01-2.25-2.49V13.36a2.34 2.34 0 011-1.92l10.54-8a2.61 2.61 0 013.08 0l10.66 8.11.1.09a2.44 2.44 0 01.83 1.78v13.19A2.43 2.43 0 0126.7 29h-7.6a1.1 1.1 0 01-1.1-1.08l-.1-6a1.81 1.81 0 00-1.9-1.69A1.83 1.83 0 0014.1 22v6a1.1 1.1 0 01-1.1 1.1zm-7.6-2.2h6.5V22a4 4 0 014.1-4 4 4 0 014.1 3.89l.08 4.88h6.52a.23.23 0 00.2-.19V13.36l-.13-.17-10.54-8s-.27-.16-.44 0L5.17 13.24a.14.14 0 00-.07.12v13.25c0 .1.14.24.3.29z" />
  </svg>
));
Home.displayName = 'Home';

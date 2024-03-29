import { forwardRef, SVGProps } from 'react';

export interface StarProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Star = forwardRef<SVGSVGElement, StarProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M28.27 15.36a2.43 2.43 0 00-1.34-4.14h-.06l-6.16-.43a.18.18 0 01-.15-.11l-2.38-5.83a2.43 2.43 0 00-4.39.08l-2.35 5.73a.18.18 0 01-.15.12l-6.21.44a2.42 2.42 0 00-1.29 4.19l4.68 4a.18.18 0 01.06.19l-1.46 6a2.44 2.44 0 002.4 2.84 2.4 2.4 0 001.19-.32L15.91 25a.16.16 0 01.09 0h.09l5.31 3.22a2.39 2.39 0 001.13.28 2.43 2.43 0 002.38-2.92l-1.44-5.94a.18.18 0 01.06-.19zm-6.88 4.52l1.37 5.65a.5.5 0 01-.13.4.53.53 0 01-.41.2.62.62 0 01-.26-.06l-4.95-3a1.91 1.91 0 00-1-.29 1.89 1.89 0 00-1 .29l-5 3a.62.62 0 01-.22 0 .51.51 0 01-.41-.2.5.5 0 01-.12-.44l1.36-5.61A1.93 1.93 0 0010 18l-4.46-3.89a.55.55 0 01-.12-.54.54.54 0 01.44-.38l5.78-.4a1.92 1.92 0 001.66-1.2l2.23-5.46a.53.53 0 01.47-.26.54.54 0 01.49.3l2.21 5.42a1.92 1.92 0 001.66 1.2l5.82.41a.5.5 0 01.39.37.53.53 0 01-.13.56L22 18a2 2 0 00-.61 1.88z" />
  </svg>
));
Star.displayName = 'Star';

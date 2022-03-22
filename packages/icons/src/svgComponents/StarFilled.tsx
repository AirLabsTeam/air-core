import { forwardRef, SVGProps } from 'react';

export interface StarFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const StarFilled = forwardRef<SVGSVGElement, StarFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M28.27 15.36a2.43 2.43 0 00-1.34-4.14h-.06l-6.16-.43a.18.18 0 01-.15-.11l-2.38-5.83a2.43 2.43 0 00-4.39.08l-2.35 5.73a.18.18 0 01-.15.12l-6.21.44a2.42 2.42 0 00-1.29 4.19l4.68 4a.18.18 0 01.06.19l-1.46 6a2.44 2.44 0 002.4 2.84 2.4 2.4 0 001.19-.32L15.91 25a.16.16 0 01.09 0h.09l5.31 3.22a2.39 2.39 0 001.13.28 2.43 2.43 0 002.38-2.92l-1.44-5.94a.18.18 0 01.06-.19z" />
  </svg>
));
StarFilled.displayName = 'StarFilled';

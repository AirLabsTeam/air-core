import { forwardRef, SVGProps } from 'react';

export interface SentFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SentFilled = forwardRef<SVGSVGElement, SentFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M29 3.67a.52.52 0 00-.67-.67l-25 7.63a.53.53 0 00-.37.43.55.55 0 00.25.51l8.56 5.1a2 2 0 002.49-.29l4.64-4.82a1.08 1.08 0 011.54-.08 1 1 0 01-.11 1.52l-4.73 4.71a2 2 0 00-.3 2.49l5.11 8.55a.55.55 0 00.51.25.53.53 0 00.43-.37z" />
  </svg>
));
SentFilled.displayName = 'SentFilled';

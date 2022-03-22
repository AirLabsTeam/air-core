import { forwardRef, SVGProps } from 'react';

export interface PlayFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const PlayFilled = forwardRef<SVGSVGElement, PlayFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M9 5.24a2 2 0 012 .07l14.1 9a2 2 0 010 3.32l-14.1 9a2 2 0 01-2 .07A2 2 0 018 25V7a2 2 0 011-1.76z" />
  </svg>
));
PlayFilled.displayName = 'PlayFilled';

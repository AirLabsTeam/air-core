import { forwardRef, SVGProps } from 'react';

export interface MarkerFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const MarkerFilled = forwardRef<SVGSVGElement, MarkerFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.68 2h-1.36a11.49 11.49 0 00-8.5 18.39l6 8a4 4 0 006.34 0l6-8A11.49 11.49 0 0016.68 2zM16 17.43a4.39 4.39 0 114.44-4.38A4.41 4.41 0 0116 17.43z" />
  </svg>
));
MarkerFilled.displayName = 'MarkerFilled';

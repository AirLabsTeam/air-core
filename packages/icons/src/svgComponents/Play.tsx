import { forwardRef, SVGProps } from 'react';

export interface PlayProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Play = forwardRef<SVGSVGElement, PlayProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fillRule="evenodd"
      d="M11 8.87v14.26L22.13 16zm0-3.56a2 2 0 00-2-.07A2 2 0 008 7v18a2 2 0 001 1.73 2 2 0 002-.07l14.1-9a2 2 0 000-3.32z"
    />
  </svg>
));
Play.displayName = 'Play';

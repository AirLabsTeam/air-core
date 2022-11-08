import { forwardRef, SVGProps } from 'react';

export interface FinderProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Finder = forwardRef<SVGSVGElement, FinderProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 16 16">
    <g stroke="currentColor" opacity="0.87">
      <rect width="13" height="12" x="1.5" y="2" rx="0.5" />
      <rect
        width="0.5"
        height="1.5"
        x="4.75"
        y="4.75"
        fill="currentColor"
        strokeWidth="0.5"
        rx="0.25"
      />
      <rect
        width="0.5"
        height="1.5"
        x="10.75"
        y="4.75"
        fill="currentColor"
        strokeWidth="0.5"
        rx="0.25"
      />
      <path d="M8 2L7 9H9V13.5" />
      <path strokeLinecap="round" d="M4 10C4 10 5.5 11.5 8 11.5C10.5 11.5 12 10 12 10" />
    </g>
  </svg>
));
Finder.displayName = 'Finder';

import { forwardRef, SVGProps } from 'react';

export interface SearchProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Search = forwardRef<SVGSVGElement, SearchProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21.06l6.49 6.49M14.15 4.8a9.4 9.4 0 109.4 9.4 9.4 9.4 0 00-9.4-9.4z"
    />
  </svg>
));
Search.displayName = 'Search';

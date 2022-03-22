import { forwardRef, SVGProps } from 'react';

export interface ExclamationProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Exclamation = forwardRef<SVGSVGElement, ExclamationProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M14.48 20.157c.117.868.7 1.488 1.515 1.488.816 0 1.4-.62 1.516-1.488l.7-12.678C18.326 6.116 17.277 5 15.995 5 14.83 5 13.78 6.116 13.78 7.48l.7 12.677zm-.977 6.346A2.504 2.504 0 0116 24.007a2.504 2.504 0 012.497 2.496A2.504 2.504 0 0116 29a2.504 2.504 0 01-2.497-2.497z"
      clipRule="evenodd"
    />
  </svg>
));
Exclamation.displayName = 'Exclamation';

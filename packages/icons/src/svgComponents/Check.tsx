import { forwardRef, SVGProps } from 'react';

export interface CheckProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Check = forwardRef<SVGSVGElement, CheckProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M12.74 25.2a1.75 1.75 0 01-1.32-.6l-5.51-6.49a1.69 1.69 0 01.2-2.41 1.71 1.71 0 012.42.19l4 4.68A60.86 60.86 0 0123.6 7.26a1.71 1.71 0 012.4.09 1.67 1.67 0 01-.09 2.42c-6.45 5.41-11.61 14.44-11.65 14.51a1.72 1.72 0 01-1.33.91z" />
  </svg>
));
Check.displayName = 'Check';

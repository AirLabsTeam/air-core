import { forwardRef, SVGProps } from 'react';

export interface CodeProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Code = forwardRef<SVGSVGElement, CodeProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M12.89 6.28v.06zm6.49.02zM9.17 23a1.17 1.17 0 01-.85-.36l-5.67-5.77a1.21 1.21 0 010-1.69l5.67-5.76A1.2 1.2 0 1110 11.1L5.18 16 10 21a1.2 1.2 0 010 1.69 1.22 1.22 0 01-.83.31zm14.66 0a1.22 1.22 0 01-.85-.35A1.2 1.2 0 0123 21l4.82-5L23 11.1a1.2 1.2 0 111.71-1.68l5.68 5.76a1.21 1.21 0 010 1.69l-5.68 5.76a1.17 1.17 0 01-.88.37zm-10.02 3.2a1.12 1.12 0 01-.4-.07 1.2 1.2 0 01-.73-1.53l6.37-18a1.2 1.2 0 112.26.8l-6.37 18a1.2 1.2 0 01-1.13.8z" />
  </svg>
));
Code.displayName = 'Code';

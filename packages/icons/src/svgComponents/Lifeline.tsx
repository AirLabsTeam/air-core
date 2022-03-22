import { forwardRef, SVGProps } from 'react';

export interface LifelineProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Lifeline = forwardRef<SVGSVGElement, LifelineProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.21 26a1.1 1.1 0 01-1-.7l-5.73-15-2.27 6.46a1.1 1.1 0 01-1 .73H4.09a1.09 1.09 0 010-2.18H7.4l3-8.58a1.09 1.09 0 011-.73 1.17 1.17 0 011 .7l5.9 15.4 2.83-6.1a1.1 1.1 0 011-.64h5.79a1.09 1.09 0 110 2.18h-5.1l-3.62 7.83a1.08 1.08 0 01-.99.63z" />
  </svg>
));
Lifeline.displayName = 'Lifeline';

import { forwardRef, SVGProps } from 'react';

export interface MagicWandProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const MagicWand = forwardRef<SVGSVGElement, MagicWandProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.91 29a1.13 1.13 0 01-.78-.32l-8.65-8.74-1.4 3.79a1.07 1.07 0 01-.85.7 1.1 1.1 0 01-1-.4l-3.26-4.1-5.17-.22A1.09 1.09 0 015.9 18l2.85-4.41-1.36-5a1.1 1.1 0 011.35-1.32l5 1.36 4.37-2.85a1.09 1.09 0 011.69.87l.2 5.19 4.08 3.3a1.12 1.12 0 01.39 1 1.08 1.08 0 01-.7.84L20 18.4l8.66 8.74a1.1 1.1 0 010 1.54 1.11 1.11 0 01-.75.32zM8.77 17.61l3.76.16a1.07 1.07 0 01.81.41l2.37 3L17 17.6a1.11 1.11 0 01.64-.65l3.56-1.32-3-2.4a1.1 1.1 0 01-.4-.81l-.16-3.77-3.14 2.07a1.09 1.09 0 01-.88.14L10 9.87l1 3.65a1.09 1.09 0 01-.14.88zm.77 7.79a1 1 0 01-.5-.13 1.07 1.07 0 01-.59-1 1.15 1.15 0 01.12-.5l.29-.55a1.08 1.08 0 011.47-.47 1.1 1.1 0 01.47 1.47l-.29.56a1.11 1.11 0 01-.97.62zM4.43 14h-.34a1.1 1.1 0 010-2.19h.34a1.1 1.1 0 010 2.19zm19.79-3.32a1.1 1.1 0 01-1-.58 1.16 1.16 0 01-.12-.51 1.1 1.1 0 01.58-1l.52-.27a1.09 1.09 0 011.48.45 1 1 0 01.13.51 1.11 1.11 0 01-.59 1l-.52.27a1.07 1.07 0 01-.48.08zm-11.31-5a1.09 1.09 0 01-1.07-.89l-.08-.41a1.49 1.49 0 010-.21 1.09 1.09 0 012.17-.2l.07.33a1.49 1.49 0 010 .21 1.1 1.1 0 01-.89 1.07z" />
  </svg>
));
MagicWand.displayName = 'MagicWand';
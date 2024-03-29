import { forwardRef, SVGProps } from 'react';

export interface MegaphoneProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Megaphone = forwardRef<SVGSVGElement, MegaphoneProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M9 27.5a2.76 2.76 0 01-1-.22 2.78 2.78 0 01-1.46-3.63L8.07 20h-.6a2.47 2.47 0 01-2.35-1.73 3.86 3.86 0 010-7.66 2.47 2.47 0 012.35-1.77h.77a2.45 2.45 0 011.82.82l12.2-5.19a1 1 0 011.39.92v18a1 1 0 01-1.39.92l-8.49-3.61-2.19 5.1A2.76 2.76 0 019 27.5zm1.46-8.13l-2.13 5.06a.78.78 0 00.41 1 .77.77 0 001-.4L11.91 20zm.19-2.13l11 4.66v-15l-11 4.66zm-3.22-6.4a.47.47 0 00-.43.46v6.2a.47.47 0 00.46.46h.77a.46.46 0 00.45-.46v-6.2a.46.46 0 00-.45-.46zM5 12.63a1.86 1.86 0 000 3.54zM26.68 20a.76.76 0 01-.21 0L25 19.61a1 1 0 11.42-1.95l1.5.32a1 1 0 01-.21 2zm2.05-4.38h-3.37a1 1 0 010-2h3.37a1 1 0 010 2zm-3.37-4.31a1 1 0 01-.54-1.84l1.32-.85a1 1 0 111.08 1.68l-1.31.85a1 1 0 01-.55.12z" />
  </svg>
));
Megaphone.displayName = 'Megaphone';

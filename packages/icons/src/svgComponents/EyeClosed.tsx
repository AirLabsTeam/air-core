import { forwardRef, SVGProps } from 'react';

export interface EyeClosedProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const EyeClosed = forwardRef<SVGSVGElement, EyeClosedProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M16.06 27.46a1.21 1.21 0 01-1.21-1.2v-1.85a1.21 1.21 0 012.42 0v1.85a1.21 1.21 0 01-1.21 1.2zm-7.37-2.37a1.23 1.23 0 01-.8-.3 1.2 1.2 0 01-.11-1.7l.9-1a1.22 1.22 0 011.71-.09 1.18 1.18 0 01.12 1.69l-.91 1a1.19 1.19 0 01-.91.4zM23.37 25a1.18 1.18 0 01-.91-.41l-.76-.86a1.19 1.19 0 01.11-1.69 1.22 1.22 0 011.71.11l.76.86a1.19 1.19 0 01-.91 2zm-7.31-3.2a15.18 15.18 0 01-11.77-5.3 1.2 1.2 0 01.14-1.7 1.24 1.24 0 011.71.2 12.59 12.59 0 009.92 4.46 13.16 13.16 0 009.83-4.48 1.21 1.21 0 011.71-.09 1.18 1.18 0 01.09 1.69 15.76 15.76 0 01-11.63 5.24z"
    />
  </svg>
));
EyeClosed.displayName = 'EyeClosed';

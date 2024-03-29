import { forwardRef, SVGProps } from 'react';

export interface SendProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Send = forwardRef<SVGSVGElement, SendProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.32 11.68l-5.19 5.19a1.45 1.45 0 01-1.78.21L4 11.33 28 4l-7.33 24-5.75-9.34a1.44 1.44 0 01.21-1.78l1.08-1.08"
    />
  </svg>
));
Send.displayName = 'Send';

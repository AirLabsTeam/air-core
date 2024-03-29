import { forwardRef, SVGProps } from 'react';

export interface SendFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SendFilled = forwardRef<SVGSVGElement, SendFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M20.66 11.32a1.54 1.54 0 00-2.19.08L14 16a1.45 1.45 0 01-1.78.21L4 11.33 28 4l-7.33 24-4.91-8.22A1.44 1.44 0 0116 18l4.55-4.55a1.47 1.47 0 00.11-2.13z" />
  </svg>
));
SendFilled.displayName = 'SendFilled';

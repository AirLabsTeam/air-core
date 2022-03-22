import { forwardRef, SVGProps } from 'react';

export interface InfoFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const InfoFilled = forwardRef<SVGSVGElement, InfoFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fillRule="evenodd"
      d="M29 16A13 13 0 1116 3a13 13 0 0113 13zm-13-2.69a1.48 1.48 0 011.51 1.44v7.88a1.51 1.51 0 01-3 0v-7.88A1.48 1.48 0 0116 13.31zm1.62-3.79a1.62 1.62 0 00-3.24 0 1.62 1.62 0 003.24 0z"
    />
  </svg>
));
InfoFilled.displayName = 'InfoFilled';

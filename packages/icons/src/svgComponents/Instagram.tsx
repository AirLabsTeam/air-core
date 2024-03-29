import { forwardRef, SVGProps } from 'react';

export interface InstagramProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Instagram = forwardRef<SVGSVGElement, InstagramProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 5.75c3.34 0 3.73 0 5.05.08a6.55 6.55 0 012.32.43 3.73 3.73 0 011.44.93 3.73 3.73 0 01.93 1.44 6.55 6.55 0 01.43 2.37c.07 1.32.08 1.71.08 5.05s0 3.73-.08 5.05a6.55 6.55 0 01-.43 2.32 4.07 4.07 0 01-2.37 2.37 6.55 6.55 0 01-2.32.43c-1.32.07-1.71.08-5.05.08s-3.73 0-5.05-.08a6.55 6.55 0 01-2.32-.43 3.73 3.73 0 01-1.44-.93 3.73 3.73 0 01-.93-1.44 6.55 6.55 0 01-.43-2.32c-.07-1.32-.08-1.71-.08-5.05s0-3.73.08-5.05a6.55 6.55 0 01.43-2.32 3.73 3.73 0 01.93-1.44 3.73 3.73 0 011.44-.93A6.55 6.55 0 0111 5.83c1.32-.07 1.71-.08 5.05-.08M16 3.5c-3.39 0-3.82 0-5.15.08a9.2 9.2 0 00-3 .58A6 6 0 005.6 5.6a6 6 0 00-1.44 2.21 9.2 9.2 0 00-.58 3c-.07 1.37-.08 1.8-.08 5.19s0 3.82.08 5.15a9.2 9.2 0 00.58 3A6 6 0 005.6 26.4a6 6 0 002.21 1.44 9.2 9.2 0 003 .58c1.33.07 1.76.08 5.15.08s3.82 0 5.15-.08a9.2 9.2 0 003-.58 6.39 6.39 0 003.65-3.65 9.2 9.2 0 00.58-3c.07-1.33.08-1.76.08-5.15s0-3.82-.08-5.15a9.2 9.2 0 00-.58-3A6 6 0 0026.4 5.6a6 6 0 00-2.21-1.44 9.2 9.2 0 00-3-.58c-1.37-.07-1.8-.08-5.19-.08zm0 6.08A6.42 6.42 0 1022.42 16 6.41 6.41 0 0016 9.58zm0 10.59A4.17 4.17 0 1120.17 16 4.17 4.17 0 0116 20.17zm6.67-12.34a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z" />
  </svg>
));
Instagram.displayName = 'Instagram';

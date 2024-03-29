import { forwardRef, SVGProps } from 'react';

export interface MemberProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Member = forwardRef<SVGSVGElement, MemberProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.49 17.18c-3.7 0-6.6-3.32-6.6-7.56a6.6 6.6 0 1113.2 0c0 4.24-2.9 7.56-6.6 7.56zm0-11.82a4.25 4.25 0 00-4.23 4.26c0 2.92 1.86 5.2 4.23 5.2s4.24-2.33 4.24-5.2a4.25 4.25 0 00-4.24-4.26zm11.73 23.57a1.19 1.19 0 00.71-1.52A13.66 13.66 0 0016 18.76a13.65 13.65 0 00-12.93 8.65A1.19 1.19 0 004.18 29H16a1.18 1.18 0 000-2.36H6a11.44 11.44 0 0110-5.52 11.28 11.28 0 0110.71 7.1 1.18 1.18 0 001.11.78 1.12 1.12 0 00.4-.07z" />
  </svg>
));
Member.displayName = 'Member';

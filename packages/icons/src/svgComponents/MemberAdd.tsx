import { forwardRef, SVGProps } from 'react';

export interface MemberAddProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const MemberAdd = forwardRef<SVGSVGElement, MemberAddProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M14 17.67c3.69 0 6.7-3.53 6.7-7.87a6.7 6.7 0 10-13.4 0c.03 4.41 2.98 7.87 6.7 7.87zm0-12.31a4.39 4.39 0 014.36 4.44c0 3-2 5.51-4.33 5.51S9.7 12.89 9.7 9.8A4.39 4.39 0 0114 5.36zm.42 13.69a12.06 12.06 0 00-11.36 8.39A1.18 1.18 0 004.18 29h10.24a1.18 1.18 0 100-2.36H6a9.61 9.61 0 018.45-5.22 9.71 9.71 0 019.13 6.77 1.17 1.17 0 001.12.81 1.18 1.18 0 001.12-1.56 12.06 12.06 0 00-11.4-8.39zM27.82 15h-2.07v-2a1.18 1.18 0 10-2.36 0v2h-2a1.18 1.18 0 100 2.36h2v2.07a1.18 1.18 0 002.36 0v-2.05h2.07a1.18 1.18 0 000-2.36z" />
  </svg>
));
MemberAdd.displayName = 'MemberAdd';

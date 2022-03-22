import { forwardRef, SVGProps } from 'react';

export interface ThreeDProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ThreeD = forwardRef<SVGSVGElement, ThreeDProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 28.5a1.86 1.86 0 01-1.89-1.83 1.81 1.81 0 01.77-1.48v-2l-.4-.19-6.35-3.46a3.17 3.17 0 01-1.64-2.77v-6.69a3.43 3.43 0 010-.56L4.7 8.5a1.89 1.89 0 01-.82.18 1.84 1.84 0 110-3.68 1.87 1.87 0 011.87 1.6l1.9 1a3.17 3.17 0 01.49-.32l6.32-3.44a3.19 3.19 0 013 0l6.32 3.46a3.39 3.39 0 01.5.34l1.94-1a1.88 1.88 0 111.87 2.05 1.9 1.9 0 01-.79-.17l-1.9 1.04a2.47 2.47 0 01.05.54v6.69a3.17 3.17 0 01-1.64 2.77L17.48 23a4.28 4.28 0 01-.44.2v2a1.82 1.82 0 01.82 1.52A1.86 1.86 0 0116 28.5zm1.09-14.42v6.68l5.71-3.11a1 1 0 00.51-.86v-6.08zm-8.41-3.39v6.08a1 1 0 00.52.87l5.67 3.1v-6.66zm1.18-1.83L16 12.2l6.1-3.32-5.65-3.09a1 1 0 00-.94 0z" />
  </svg>
));
ThreeD.displayName = 'ThreeD';

import { forwardRef, SVGProps } from 'react';

export interface SidePanelOpenProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const SidePanelOpen = forwardRef<SVGSVGElement, SidePanelOpenProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M14.1 16.22A1.19 1.19 0 0115.29 15h5.44l-1.09-1a1.19 1.19 0 010-1.68 1.2 1.2 0 011.69 0l3.15 3.11a1.21 1.21 0 01.21.31 1.17 1.17 0 01.12.52 1.17 1.17 0 01-.12.52 1.21 1.21 0 01-.21.31l-3.15 3.1a1.22 1.22 0 01-.84.35 1.19 1.19 0 01-.83-2l1.09-1.07h-5.46a1.19 1.19 0 01-1.19-1.25zM29 5.13v21.74A2.13 2.13 0 0126.87 29H5.13A2.13 2.13 0 013 26.87V5.13A2.13 2.13 0 015.13 3h21.74A2.13 2.13 0 0129 5.13zM5.38 26.62h5.09V5.38H5.38zM26.62 5.38h-14v21.24h14zm-18.1 4h-1a.49.49 0 00-.52.5v1a.48.48 0 00.48.48h1a.47.47 0 00.52-.44v-1a.48.48 0 00-.48-.52zm0 3.83h-1a.48.48 0 00-.48.48v1a.49.49 0 00.48.49h1a.48.48 0 00.48-.44v-1a.47.47 0 00-.48-.51zm0 4.21h-1a.49.49 0 00-.48.48v1a.49.49 0 00.48.48h1A.48.48 0 009 19v-1a.48.48 0 00-.48-.56z"
    />
  </svg>
));
SidePanelOpen.displayName = 'SidePanelOpen';

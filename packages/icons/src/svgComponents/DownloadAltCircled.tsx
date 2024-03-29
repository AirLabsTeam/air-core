import { forwardRef, SVGProps } from 'react';

export interface DownloadAltCircledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const DownloadAltCircled = forwardRef<SVGSVGElement, DownloadAltCircledProps>(
  (props, ref) => (
    <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
      <defs>
        <clipPath id="a">
          <path fill="none" d="M-.04.11h32v32h-32z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path d="M16 29a14.1 14.1 0 1114.1-14.1A14.11 14.11 0 0116 29zm0-26a11.9 11.9 0 1011.9 11.9A11.92 11.92 0 0016 3zm0 20.5a1.11 1.11 0 01-.78-.33L10 17.82a1.1 1.1 0 111.57-1.54l3.3 3.36-.11-11.28a1.1 1.1 0 011.09-1.1A1.14 1.14 0 0117 8.34v11.34l3.33-3.4a1.1 1.1 0 111.57 1.54l-5.19 5.3a1.13 1.13 0 01-.77.33z" />
      </g>
    </svg>
  ),
);
DownloadAltCircled.displayName = 'DownloadAltCircled';

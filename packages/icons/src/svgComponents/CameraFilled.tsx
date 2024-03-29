import { forwardRef, SVGProps } from 'react';

export interface CameraFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const CameraFilled = forwardRef<SVGSVGElement, CameraFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M12.89 6.28v.06zm6.49.02zM29.79 10a2.81 2.81 0 00-1.53-1.55 2.86 2.86 0 00-1.08-.22h-4.35l-1.72-2.95a1.69 1.69 0 00-.58-.58 1.54 1.54 0 00-.76-.2h-7.33a1.55 1.55 0 00-.77.24 1.53 1.53 0 00-.5.52L9.3 8.19H5a3 3 0 00-1.15.23 3.21 3.21 0 00-1 .66 3 3 0 00-.65 1 3.07 3.07 0 00-.2 1.14v13.25a3 3 0 00.22 1.16 3 3 0 00.65 1 2.88 2.88 0 001 .66A3 3 0 005 27.5h22.07a3 3 0 002.08-.91 3 3 0 00.85-2.11V11.05a2.93 2.93 0 00-.21-1.05zm-8.43 10.6a6.2 6.2 0 01-2.79 2.3 6.08 6.08 0 01-2.37.48 6.24 6.24 0 01-6.09-5 6.29 6.29 0 01.35-3.61 6.22 6.22 0 0112 2.39 6.32 6.32 0 01-1.1 3.44zm4.14-6.72h-.39a1 1 0 010-2h.39a1 1 0 010 2z" />
    <path d="M19.17 14.13a4.21 4.21 0 00-3-1.25 4.14 4.14 0 00-2.34.72 4.26 4.26 0 00-.64 6.52 4.13 4.13 0 002.16 1.16 4.2 4.2 0 004.32-1.8 4.27 4.27 0 00.39-4 4.13 4.13 0 00-.89-1.35z" />
  </svg>
));
CameraFilled.displayName = 'CameraFilled';

import { forwardRef, SVGProps } from 'react';

export interface GoogleDriveProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const GoogleDrive = forwardRef<SVGSVGElement, GoogleDriveProps>((props, ref) => (
  <svg ref={ref} {...props} aria-hidden="true" viewBox="0 0 32 32">
    <path fill="#2684fc" d="M8 26.573l4-6.667h16l-4 6.667H8z" />
    <path fill="#ffba00" d="M20 19.906h8L20 6.573h-8l8 13.333z" />
    <path fill="#00ac47" d="M4 19.906l4 6.667 8-13.333-4-6.667-8 13.333z" />
  </svg>
));
GoogleDrive.displayName = 'GoogleDrive';

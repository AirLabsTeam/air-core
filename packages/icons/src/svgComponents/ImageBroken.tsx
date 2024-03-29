import { forwardRef, SVGProps } from 'react';

export interface ImageBrokenProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ImageBroken = forwardRef<SVGSVGElement, ImageBrokenProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.91 29a1.09 1.09 0 01-.77-.32l-.83-.83a3.08 3.08 0 01-1.6.44H7.39a3.37 3.37 0 01-3.33-3.4V7.52A3.47 3.47 0 014.43 6L3.32 4.86a1.09 1.09 0 011.54-1.54l10.47 10.47 13.35 13.35a1.09 1.09 0 01-.77 1.86zM6.24 21.9v3a1.19 1.19 0 001.15 1.22h17.17L13.81 15.36a.22.22 0 00-.3 0zm0-14.11V19l5.81-5.22.08-.07zm21 14.38a1.1 1.1 0 01-.79-.34l-3.26-3.42a1.09 1.09 0 011.58-1.51l1.38 1.45V7.45a1.21 1.21 0 00-1.25-1.21h-13a1.09 1.09 0 010-2.18h13a3.39 3.39 0 013.39 3.39v13.63a1.08 1.08 0 01-.68 1 1.19 1.19 0 01-.41.09z" />
    <circle cx="21.35" cy="10.84" r="2.42" />
  </svg>
));
ImageBroken.displayName = 'ImageBroken';

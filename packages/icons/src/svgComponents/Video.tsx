import { forwardRef, SVGProps } from 'react';

export interface VideoProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Video = forwardRef<SVGSVGElement, VideoProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.92 27H6.08A3.08 3.08 0 013 23.93V8.07A3.08 3.08 0 016.08 5h19.84A3.08 3.08 0 0129 8.07v15.86A3.08 3.08 0 0125.92 27zM6.08 7.18a.89.89 0 00-.9.89v15.86a.89.89 0 00.9.89h19.84a.89.89 0 00.9-.89V8.07a.89.89 0 00-.9-.89z" />
    <path d="M14.11 20.86a1.1 1.1 0 01-.53-.14 1.09 1.09 0 01-.56-.95v-6.94a1.09 1.09 0 011.66-.93l5.75 3.46a1.09 1.09 0 010 1.87l-5.75 3.47a1.17 1.17 0 01-.57.16zm1.1-6.1v3.07l2.55-1.53z" />
  </svg>
));
Video.displayName = 'Video';

import { forwardRef, SVGProps } from 'react';

export interface CommentProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Comment = forwardRef<SVGSVGElement, CommentProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M18.58 29a1.16 1.16 0 01-.48-.11 1.09 1.09 0 01-.61-1l.15-3.33h-3.23C7.58 24.42 3 20.35 3 14.41A11.42 11.42 0 0114.41 3h3.28A11.37 11.37 0 0129 14.41v.3c0 5.43-3.51 8.7-9.71 14a1.09 1.09 0 01-.71.29zm.2-6.65a1.08 1.08 0 01.79.34 1.11 1.11 0 01.3.8l-.09 1.93c4.87-4.31 7-6.93 7-10.71v-.3a9.19 9.19 0 00-9.13-9.23h-3.24a9.24 9.24 0 00-9.23 9.23c0 4.73 3.63 7.84 9.25 7.94z" />
  </svg>
));
Comment.displayName = 'Comment';

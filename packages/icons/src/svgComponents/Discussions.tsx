import { forwardRef, SVGProps } from 'react';

export interface DiscussionsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Discussions = forwardRef<SVGSVGElement, DiscussionsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M19.29 29a1.07 1.07 0 01-.35-.06c-6.22-2.11-8.1-6.17-8.61-9.07a35.46 35.46 0 01-3.7.58 1.08 1.08 0 01-1-.5 1.1 1.1 0 010-1.17L6.71 17C4.94 16.1 2 14.09 2 10.31 2 6.08 5.59 3 10.54 3h1.37a8.65 8.65 0 018.29 6.05h1.06A8.77 8.77 0 0130 17.84c0 4.59-3.51 7.74-8.73 7.83h-1.44l.52 2A1.09 1.09 0 0119.29 29zm-6.94-10.67v.08c.13 2.44 1.21 5.59 5.32 7.65l-.32-1.21a1.13 1.13 0 01.19-.94 1.09 1.09 0 01.87-.42h2.84c3-.06 6.56-1.57 6.56-5.65a6.6 6.6 0 00-6.56-6.61h-2.43a6.56 6.56 0 00-6.48 6.61c0 .16 0 .32.01.49zM10.54 5.18c-3.16 0-6.36 1.82-6.36 5.13 0 3.66 4.28 5 4.46 5.09a1.09 1.09 0 01.7.66 1.11 1.11 0 01-.09 1l-.6 1c.52-.09 1-.19 1.5-.31a8.75 8.75 0 017.76-8.65 6.6 6.6 0 00-6-3.92z" />
  </svg>
));
Discussions.displayName = 'Discussions';

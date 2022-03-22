import { forwardRef, SVGProps } from 'react';

export interface PlayPauseProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const PlayPause = forwardRef<SVGSVGElement, PlayPauseProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.88 7.91l10.83 7.49a.61.61 0 010 1L8.88 23.91A.6.6 0 018 23.4v-15a.6.6 0 01.88-.49zM24.1 24h-2a1 1 0 01-1.1-1V9.06A1 1 0 0122.07 8h2a1 1 0 011 1.05V23a1 1 0 01-.97 1z"
    />
  </svg>
));
PlayPause.displayName = 'PlayPause';
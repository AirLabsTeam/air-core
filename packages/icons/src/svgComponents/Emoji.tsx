import { forwardRef, SVGProps } from 'react';

export interface EmojiProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Emoji = forwardRef<SVGSVGElement, EmojiProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 25.85A11.85 11.85 0 1127.85 16 11.86 11.86 0 0116 27.85z" />
    <path d="M13.58 13.26a1.08 1.08 0 10-1.08-1.08 1.07 1.07 0 001.08 1.08zm4.3 0a1.08 1.08 0 10-1.07-1.08 1.08 1.08 0 001.07 1.08zm7.22 1.4a1.07 1.07 0 00-1.49.3h-.11a1.08 1.08 0 00-1.8 1.19 2.38 2.38 0 00.53.57 7.35 7.35 0 01-6.52 4 7.43 7.43 0 01-6.55-4 2.56 2.56 0 00.55-.59A1.07 1.07 0 107.89 15a1.07 1.07 0 00-1.79 1.19 2.32 2.32 0 00.74.72V17a9.67 9.67 0 008.85 5.92A9.55 9.55 0 0024.46 17a2.22 2.22 0 00.94-.82 1.07 1.07 0 00-.3-1.52z" />
  </svg>
));
Emoji.displayName = 'Emoji';

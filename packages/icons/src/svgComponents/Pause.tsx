import { forwardRef, SVGProps } from 'react';

export interface PauseProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Pause = forwardRef<SVGSVGElement, PauseProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M21.25 7A1.75 1.75 0 0123 8.75v14.5A1.75 1.75 0 0121.25 25a1.75 1.75 0 01-1.75-1.75V8.75A1.75 1.75 0 0121.25 7zm-10.5 0a1.75 1.75 0 011.75 1.75v14.5A1.75 1.75 0 0110.75 25 1.75 1.75 0 019 23.25V8.75A1.75 1.75 0 0110.75 7z" />
  </svg>
));
Pause.displayName = 'Pause';

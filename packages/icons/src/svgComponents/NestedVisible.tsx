import { forwardRef, SVGProps } from 'react';

export interface NestedVisibleProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const NestedVisible = forwardRef<SVGSVGElement, NestedVisibleProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M13.6 4.35A1.33 1.33 0 0012.29 3h-8A1.32 1.32 0 003 4.35a1.32 1.32 0 001.3 1.34h8a1.33 1.33 0 001.3-1.34zm14.1 8.39H4.3a1.35 1.35 0 010-2.7h23.4a1.35 1.35 0 010 2.7zm1.3 6.78a1.32 1.32 0 00-1.3-1.34H4.3a1.35 1.35 0 000 2.69h23.4a1.32 1.32 0 001.3-1.35zm0 8.13a1.32 1.32 0 00-1.3-1.34H4.3a1.35 1.35 0 000 2.69h23.4a1.32 1.32 0 001.3-1.35z" />
  </svg>
));
NestedVisible.displayName = 'NestedVisible';

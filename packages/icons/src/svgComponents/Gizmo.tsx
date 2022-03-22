import { forwardRef, SVGProps } from 'react';

export interface GizmoProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Gizmo = forwardRef<SVGSVGElement, GizmoProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M14 8a2 2 0 11-2-2 2 2 0 012 2zm6-2a2 2 0 102 2 2 2 0 00-2-2zm-8 8a2 2 0 102 2 2 2 0 00-2-2zm8 0a2 2 0 102 2 2 2 0 00-2-2zm-8 8a2 2 0 102 2 2 2 0 00-2-2zm8 0a2 2 0 102 2 2 2 0 00-2-2z" />
  </svg>
));
Gizmo.displayName = 'Gizmo';

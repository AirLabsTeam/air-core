import { forwardRef, SVGProps } from 'react';

export interface KanbanProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Kanban = forwardRef<SVGSVGElement, KanbanProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M13 29H4.77A1.78 1.78 0 013 27.22V4.77A1.78 1.78 0 014.77 3H13a1.78 1.78 0 011.78 1.77v22.45A1.78 1.78 0 0113 29zm-7.82-2.18h7.45V5.18H5.18zM13 5.18zM27.23 21H19a1.78 1.78 0 01-1.78-1.78V4.77A1.78 1.78 0 0119 3h8.26A1.78 1.78 0 0129 4.77v14.4A1.78 1.78 0 0127.23 21zm-7.86-2.19h7.45V5.18h-7.45zm7.86-13.63z" />
  </svg>
));
Kanban.displayName = 'Kanban';

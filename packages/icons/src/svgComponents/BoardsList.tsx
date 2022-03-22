import { forwardRef, SVGProps } from 'react';

export interface BoardsListProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const BoardsList = forwardRef<SVGSVGElement, BoardsListProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M28 21H17m11.13 5.06H17M12 20H4v8h8zM28 5H17m11 5H17m-5-6H4v8h8z"
    />
  </svg>
));
BoardsList.displayName = 'BoardsList';

import { forwardRef, SVGProps } from 'react';

export interface BookmarkProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Bookmark = forwardRef<SVGSVGElement, BookmarkProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M25.91 29a1.08 1.08 0 01-.62-.19L16 22.39l-9.29 6.42a1.09 1.09 0 01-1.13.06 1.07 1.07 0 01-.58-1V4.09A1.09 1.09 0 016.09 3h19.82A1.09 1.09 0 0127 4.09v23.82a1.07 1.07 0 01-.58 1 1 1 0 01-.51.09zM16 20a1.08 1.08 0 01.62.19l8.2 5.67V5.18H7.18v20.65l8.2-5.67A1.08 1.08 0 0116 20z" />
  </svg>
));
Bookmark.displayName = 'Bookmark';

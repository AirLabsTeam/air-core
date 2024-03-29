import { forwardRef, SVGProps } from 'react';

export interface TagProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Tag = forwardRef<SVGSVGElement, TagProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M14 28.69a3.47 3.47 0 01-1.87-1L3.93 19A3.46 3.46 0 013 16.62a3.33 3.33 0 01.29-1.29 3.19 3.19 0 01.77-1.08l10.31-9.78a3.37 3.37 0 011.14-.73 3.42 3.42 0 011.34-.21l7.93-.27h.1a4.46 4.46 0 012.9 1.37A4.5 4.5 0 0129 7.6v.1l-.67 7.91a3.55 3.55 0 01-.28 1.32 3.37 3.37 0 01-.77 1.1L17 27.81a3.37 3.37 0 01-1.37.79 3.51 3.51 0 01-1.58.09zM24.76 5.56l-7.91.27h-.1a1.07 1.07 0 00-.43.06 1.2 1.2 0 00-.37.23L5.64 15.9a1.07 1.07 0 00-.31.76 1.1 1.1 0 00.31.76l8.25 8.67a1 1 0 00.75.33 1.08 1.08 0 00.77-.28l10.31-9.78A1.23 1.23 0 0026 16a1.07 1.07 0 00.09-.43v-.11l.67-7.89a2.11 2.11 0 00-2-2z" />
    <path d="M22.15 12.15A2.19 2.19 0 1020 10a2.19 2.19 0 002.15 2.15z" />
  </svg>
));
Tag.displayName = 'Tag';

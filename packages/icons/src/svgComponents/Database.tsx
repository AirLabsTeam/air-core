import { forwardRef, SVGProps } from 'react';

export interface DatabaseProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Database = forwardRef<SVGSVGElement, DatabaseProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M27.19 27H4.81A1.74 1.74 0 013 25.33v-5.77a.71.71 0 010-.14.61.61 0 010-.14V13.4a.66.66 0 010-.14.61.61 0 010-.14V7a2.08 2.08 0 012.18-2h21.64A2.09 2.09 0 0129 7v18.32A1.75 1.75 0 0127.19 27zm-13.84-2H27v-4.58H13.35zM5 25h6.34v-4.58H5zm8.34-6.58H27v-4.16H13.35zm-8.34 0h6.34v-4.16H5zm8.34-6.16H27V8H13.35zm-8.34 0h6.34V8H5z" />
  </svg>
));
Database.displayName = 'Database';

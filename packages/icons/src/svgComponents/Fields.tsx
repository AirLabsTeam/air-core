import { forwardRef, SVGProps } from 'react';

export interface FieldsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Fields = forwardRef<SVGSVGElement, FieldsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M5.59 3.5h20.82A2.59 2.59 0 0129 6.09v5.82a2.59 2.59 0 01-2.59 2.59H5.59A2.59 2.59 0 013 11.91V6.09A2.59 2.59 0 015.59 3.5zm20.82 9a.6.6 0 00.59-.59V6.09a.6.6 0 00-.59-.59H5.59a.6.6 0 00-.59.59v5.82a.6.6 0 00.59.59zM13.84 9a1 1 0 001 1h9.33a1 1 0 000-2h-9.33a1 1 0 00-1 1zm-7 0a1 1 0 001 1H11a1 1 0 100-2H7.83a1 1 0 00-1 1zm-1.39 8.5h15.63a2.59 2.59 0 012.59 2.59v5.82a2.59 2.59 0 01-2.59 2.59H5.59A2.59 2.59 0 013 25.91V20a2.45 2.45 0 012.45-2.5zm15.63 9a.59.59 0 00.59-.59v-5.82a.59.59 0 00-.59-.59H5.45A.45.45 0 005 20v6a.6.6 0 00.59.59zm-10.91-3.38a1 1 0 001 1h7.73a1 1 0 000-2h-7.73a1 1 0 00-1 1zm-2.4 1.08a1 1 0 10-1-1 1 1 0 001 1z" />
  </svg>
));
Fields.displayName = 'Fields';

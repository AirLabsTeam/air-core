import { forwardRef, SVGProps } from 'react';

export interface FieldProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Field = forwardRef<SVGSVGElement, FieldProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M5.59 10.21h20.82A2.59 2.59 0 0129 12.8v7.82a2.6 2.6 0 01-2.59 2.59H5.59A2.6 2.6 0 013 20.62V12.8a2.59 2.59 0 012.59-2.59zm20.82 11a.6.6 0 00.59-.59V12.8a.59.59 0 00-.59-.59H5.59a.59.59 0 00-.59.59v7.82a.6.6 0 00.59.59zm-14.75-4.75a1 1 0 001 1h11.51a1 1 0 000-2H12.66a1 1 0 00-1 1zm-4.83 0a1 1 0 001 1h1.08a1 1 0 000-2H7.83a1 1 0 00-1 1z"
    />
  </svg>
));
Field.displayName = 'Field';

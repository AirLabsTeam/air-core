import { forwardRef, SVGProps } from 'react';

export interface EditProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Edit = forwardRef<SVGSVGElement, EditProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 26l-9 2 2.2-8.6 14-14a4.6 4.6 0 016.5 0h0a4.6 4.6 0 010 6.5zm5-18.5l6.5 6.5"
    />
  </svg>
));
Edit.displayName = 'Edit';

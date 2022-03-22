import { forwardRef, SVGProps } from 'react';

export interface LabelsProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Labels = forwardRef<SVGSVGElement, LabelsProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M17.79 29a1.13 1.13 0 01-.78-.32L5.11 16.77a1.08 1.08 0 01-.3-1l1.75-7.66-3.24-3.25a1.09 1.09 0 011.54-1.54l3.25 3.24 7.65-1.75a1.08 1.08 0 011 .3L28.68 17a1.06 1.06 0 01.32.77 1.07 1.07 0 01-.32.77L18.56 28.68a1.09 1.09 0 01-.77.32zM7.08 15.65l10.71 10.71 8.57-8.57-10.7-10.71-5.73 1.31 2.05 2A1.8 1.8 0 1110.44 12l-2-2.05z" />
  </svg>
));
Labels.displayName = 'Labels';

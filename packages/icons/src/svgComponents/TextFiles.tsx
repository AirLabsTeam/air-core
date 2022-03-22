import { forwardRef, SVGProps } from 'react';

export interface TextFilesProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const TextFiles = forwardRef<SVGSVGElement, TextFilesProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.5 26.89V5.11A1.61 1.61 0 017.11 3.5h17.78a1.61 1.61 0 011.61 1.61v21.78a1.61 1.61 0 01-1.61 1.61H7.11a1.61 1.61 0 01-1.61-1.61zm5.11-15h11.26m-11.26 4.8h11.26m-11.26 4.93H15"
    />
  </svg>
));
TextFiles.displayName = 'TextFiles';

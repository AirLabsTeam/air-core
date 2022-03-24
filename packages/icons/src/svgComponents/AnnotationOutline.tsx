import { forwardRef, SVGProps } from 'react';

export interface AnnotationOutlineProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const AnnotationOutline = forwardRef<SVGSVGElement, AnnotationOutlineProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.5,5.4a10.6,10.6,0,0,1,0,21.2H5.9V16A10.62,10.62,0,0,1,16.5,5.4m0-2.4a13,13,0,0,0-13,13V26.6A2.41,2.41,0,0,0,5.9,29H16.5a13,13,0,0,0,0-26Z" />
  </svg>
));
AnnotationOutline.displayName = 'AnnotationOutline';

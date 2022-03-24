import { forwardRef, SVGProps } from 'react';

export interface AnnotationOutlinePlusProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const AnnotationOutlinePlus = forwardRef<SVGSVGElement, AnnotationOutlinePlusProps>(
  (props, ref) => (
    <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
      <path d="M16.5,3a13,13,0,0,0-13,13V26.6A2.41,2.41,0,0,0,5.9,29H16.5a13,13,0,0,0,0-26Zm0,23.6H5.9V16A10.6,10.6,0,1,1,16.5,26.6ZM22.23,16A1.2,1.2,0,0,1,21,17.2H18.09v2.94a1.2,1.2,0,1,1-2.4,0V17.2H12.75a1.2,1.2,0,0,1,0-2.4h2.94V11.86a1.2,1.2,0,0,1,2.4,0V14.8H21A1.2,1.2,0,0,1,22.23,16Z" />
    </svg>
  ),
);
AnnotationOutlinePlus.displayName = 'AnnotationOutlinePlus';

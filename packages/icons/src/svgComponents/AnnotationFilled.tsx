import { forwardRef, SVGProps } from 'react';

export interface AnnotationFilledProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const AnnotationFilled = forwardRef<SVGSVGElement, AnnotationFilledProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.5,3h0a13,13,0,0,1,13,13v0a13,13,0,0,1-13,13H5.9a2.4,2.4,0,0,1-2.4-2.4V16A13,13,0,0,1,16.5,3Z" />
  </svg>
));
AnnotationFilled.displayName = 'AnnotationFilled';

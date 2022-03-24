import { forwardRef, SVGProps } from 'react';

export interface AnnotationContainerProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const AnnotationContainer = forwardRef<SVGSVGElement, AnnotationContainerProps>(
  (props, ref) => (
    <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
      <path
        d="M13.47,28.7H11.54a1.22,1.22,0,1,1,0-2.43h1.93a1.22,1.22,0,0,1,0,2.43Zm-5.4,0H6.15A3.16,3.16,0,0,1,3,25.55V24.09a1.22,1.22,0,0,1,2.43,0v1.46a.72.72,0,0,0,.72.72H8.07a1.22,1.22,0,1,1,0,2.43ZM4.21,20A1.21,1.21,0,0,1,3,18.76V12.94a1.22,1.22,0,0,1,2.43,0v5.82A1.22,1.22,0,0,1,4.21,20ZM27.43,15.4a1.21,1.21,0,0,1-1.21-1.21V11.86a1.22,1.22,0,0,1,2.43,0v2.33A1.22,1.22,0,0,1,27.43,15.4Zm0-6.58a1.21,1.21,0,0,1-1.21-1.21V6.15a.72.72,0,0,0-.72-.72H23.18a1.22,1.22,0,1,1,0-2.43H25.5a3.15,3.15,0,0,1,3.15,3.15V7.61A1.22,1.22,0,0,1,27.43,8.82Zm-23.22,0A1.21,1.21,0,0,1,3,7.61V6.15A3.15,3.15,0,0,1,6.15,3H8.47a1.22,1.22,0,0,1,0,2.43H6.15a.72.72,0,0,0-.72.72V7.61A1.22,1.22,0,0,1,4.21,8.82ZM18.73,5.43H12.92a1.22,1.22,0,0,1,0-2.43h5.81a1.22,1.22,0,0,1,0,2.43ZM29,22.84v-.33a6.16,6.16,0,0,0-6.16-6.16h-.3a6.16,6.16,0,0,0-6.17,6.16v5.35A1.14,1.14,0,0,0,17.51,29h5.33A6.16,6.16,0,0,0,29,22.84Z"
        className="prefix_cls-1"
      />
    </svg>
  ),
);
AnnotationContainer.displayName = 'AnnotationContainer';

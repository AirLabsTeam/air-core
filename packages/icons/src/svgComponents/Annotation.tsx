import { forwardRef, SVGProps } from 'react';

export interface AnnotationProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Annotation = forwardRef<SVGSVGElement, AnnotationProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.09 29.36h-3.38a1.22 1.22 0 010-2.44h3.38a1.22 1.22 0 010 2.44zm-8 0H4.7a2.22 2.22 0 01-2.2-2.24v-2.54a1.2 1.2 0 112.4 0v2.34h3.21a1.22 1.22 0 010 2.44zM3.7 20.2A1.21 1.21 0 012.5 19v-6.1a1.2 1.2 0 112.4 0V19a1.2 1.2 0 01-1.2 1.2zm24-2.83a1.21 1.21 0 01-1.2-1.22v-3.27a1.2 1.2 0 112.4 0v3.27a1.21 1.21 0 01-1.17 1.22zm0-8.87a1.21 1.21 0 01-1.2-1.22V4.94h-3.18a1.22 1.22 0 010-2.44h3.41a2.22 2.22 0 012.2 2.24v2.54a1.21 1.21 0 01-1.2 1.22zm-24 0a1.21 1.21 0 01-1.2-1.22V4.74A2.22 2.22 0 014.7 2.5h3.41a1.22 1.22 0 010 2.44H4.9v2.34A1.2 1.2 0 013.7 8.5zm15-3.56h-6a1.22 1.22 0 010-2.44h6a1.22 1.22 0 010 2.44zm-3.39 10.14a.52.52 0 01.54-.14l13.26 4.11a.57.57 0 01.39.46.59.59 0 01-.26.55l-5.16 3.23a1.37 1.37 0 01-.51.19 1.64 1.64 0 01-.18.51l-3.18 5.24a.56.56 0 01-.54.27.55.55 0 01-.45-.39l-4-13.48a.54.54 0 01.09-.55z" />
  </svg>
));
Annotation.displayName = 'Annotation';

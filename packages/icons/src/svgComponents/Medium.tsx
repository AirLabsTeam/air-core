import { forwardRef, SVGProps } from 'react';

export interface MediumProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Medium = forwardRef<SVGSVGElement, MediumProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 3.35A12.65 12.65 0 003.35 16a12.65 12.65 0 0025.3 0A12.65 12.65 0 0016 3.35zm7.47 6.87l-1.21 1.16a.35.35 0 00-.14.34v8.51a.35.35 0 00.14.34l1.18 1.16V22H17.5v-.26l1.22-1.19c.12-.12.12-.15.12-.33v-6.9L15.44 22H15l-4-8.64v5.79a.8.8 0 00.22.66l1.59 1.93V22H8.32v-.3l1.59-1.93a.76.76 0 00.21-.66v-6.7a.61.61 0 00-.19-.49l-1.42-1.7V10h4.39l3.4 7.45 3-7.45h4.19z" />
  </svg>
));
Medium.displayName = 'Medium';
